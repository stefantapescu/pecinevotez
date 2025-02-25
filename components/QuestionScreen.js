import styles from '../styles/QuestionScreen.module.css';

export default function QuestionScreen({ 
  question, 
  currentQuestionIndex, 
  totalQuestions, 
  onSelectOption 
}) {
  return (
    <div className={styles.questionScreen}>
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>
      
      <h2 className={styles.questionText}>{question.question}</h2>
      
      <div className={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={styles.optionButton}
            onClick={() => onSelectOption(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
      
      <div className={styles.questionCounter}>
        {currentQuestionIndex + 1} / {totalQuestions}
      </div>
    </div>
  );
} 