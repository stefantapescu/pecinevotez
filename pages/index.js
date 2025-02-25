import { useState, useEffect } from 'react';
import Head from 'next/head';
import IntroScreen from '../components/IntroScreen';
import QuestionScreen from '../components/QuestionScreen';
import ResultScreen from '../components/ResultScreen';
import { questions, spectrumDefinitions, romanianParties, romanianPoliticians } from '../data/quizData';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userScores, setUserScores] = useState({
    traditional: 0,
    authoritarian: 0,
    economic_right: 0
  });
  const [results, setResults] = useState({
    profile: null,
    partyMatches: [],
    politicianMatches: []
  });

  const startQuiz = () => {
    setCurrentScreen('question');
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setUserScores({
      traditional: 0,
      authoritarian: 0,
      economic_right: 0
    });
    setCurrentScreen('intro');
  };

  const selectOption = (optionIndex) => {
    const question = questions[currentQuestion];
    const selectedOption = question.options[optionIndex];
    
    // Update scores based on selected option
    const newScores = { ...userScores };
    for (const dimension in selectedOption.scores) {
      newScores[dimension] += selectedOption.scores[dimension];
    }
    setUserScores(newScores);
    
    // Store answer
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResults(newScores);
      }
    }, 800);
  };

  const calculateResults = (scores) => {
    // Calculate total possible points per dimension
    const totalPossiblePoints = {};
    for (const dimension in scores) {
      totalPossiblePoints[dimension] = 0;
      questions.forEach(question => {
        // Find maximum possible score for each dimension
        const maxScore = Math.max(...question.options.map(option => 
          Math.abs(option.scores[dimension] || 0)
        ));
        totalPossiblePoints[dimension] += maxScore;
      });
    }
    
    // Normalize scores to -10 to +10 scale
    const normalizedScores = { ...scores };
    for (const dimension in normalizedScores) {
      const normalizedScore = (normalizedScores[dimension] / totalPossiblePoints[dimension]) * 10;
      normalizedScores[dimension] = Math.min(Math.max(normalizedScore, -10), 10);
    }
    
    // Determine profile
    const profile = determineIdeologicalProfile(normalizedScores);
    
    // Find matching parties and politicians
    const partyMatches = findMatches(romanianParties, normalizedScores);
    const politicianMatches = findMatches(romanianPoliticians, normalizedScores);
    
    setResults({
      profile,
      partyMatches,
      politicianMatches
    });
    
    setCurrentScreen('result');
  };

  const determineIdeologicalProfile = (scores) => {
    let profile = { label: "", description: "" };
    const t = scores.traditional, a = scores.authoritarian, e = scores.economic_right;
    
    if (t > 5 && a > 5 && e < 0) {
      profile.label = "Conservator Social";
      profile.description = "Susții valorile tradiționale și autoritatea statului, dar preferi politici economice care protejează cetățenii.";
    } else if (t > 5 && a > 5 && e > 0) {
      profile.label = "Conservator Clasic";
      profile.description = "Susții valorile tradiționale, autoritatea statului și libertatea economică. Prioritizezi ordinea și piața liberă.";
    } else if (t < -5 && a < -5 && e < -5) {
      profile.label = "Libertarian de Stânga";
      profile.description = "Susții libertatea personală, egalitatea și intervenția statului pentru binele comun.";
    } else if (t < -5 && a < -5 && e > 5) {
      profile.label = "Libertarian de Dreapta";
      profile.description = "Susții libertatea personală și piața liberă, cu intervenție minimă a statului.";
    } else if (t < -5 && a > 5 && e < -5) {
      profile.label = "Progresist Autoritar";
      profile.description = "Susții schimbarea socială, dar crezi că statul trebuie să aibă autoritate puternică pentru implementare.";
    } else if (t > 5 && a < -5 && e > 5) {
      profile.label = "Conservator Libertarian";
      profile.description = "Valorizezi tradițiile și piața liberă, dar preferi o intervenție minimă a statului în viața personală.";
    } else if (Math.abs(t) < 3 && Math.abs(a) < 3 && Math.abs(e) < 3) {
      profile.label = "Centrist";
      profile.description = "Ai o viziune echilibrată, îmbinând elemente din stânga și dreapta politică.";
    } else if (t < 0 && a < 0 && e > 0) {
      profile.label = "Progresist Liberal";
      profile.description = "Susții libertatea personală și schimbarea socială, împreună cu libertatea economică.";
    } else if (t > 0 && a < 0 && e < 0) {
      profile.label = "Conservator Social-Democrat";
      profile.description = "Valorizezi tradițiile, dar susții și libertatea personală și politici economice de stânga.";
    } else {
      profile.label = "Eclectic";
      profile.description = "Ai o combinație unică de valori politice, greu de încadrat într-o categorie standard.";
    }
    return profile;
  };

  const findMatches = (entities, scores) => {
    const distances = entities.map(entity => {
      let distanceSquared = 0;
      for (const dimension in scores) {
        const diff = scores[dimension] - entity.scores[dimension];
        distanceSquared += diff * diff;
      }
      return { entity: entity, distance: Math.sqrt(distanceSquared) };
    });
    
    distances.sort((a, b) => a.distance - b.distance);
    return distances.slice(0, 3).map(item => item.entity);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Test Politic Românesc 2025</title>
        <meta name="description" content="Descoperă ce ideologie politică ți se potrivește în România" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        {currentScreen === 'intro' && (
          <IntroScreen onStart={startQuiz} />
        )}
        
        {currentScreen === 'question' && (
          <QuestionScreen 
            question={questions[currentQuestion]}
            currentQuestionIndex={currentQuestion}
            totalQuestions={questions.length}
            onSelectOption={selectOption}
          />
        )}
        
        {currentScreen === 'result' && (
          <ResultScreen 
            profile={results.profile}
            partyMatches={results.partyMatches}
            politicianMatches={results.politicianMatches}
            userScores={userScores}
            spectrumDefinitions={spectrumDefinitions}
            onRetry={resetQuiz}
          />
        )}
      </main>
    </div>
  );
} 