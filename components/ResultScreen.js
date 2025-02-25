import styles from '../styles/ResultScreen.module.css';
import { FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa';

export default function ResultScreen({ 
  profile, 
  partyMatches, 
  politicianMatches, 
  userScores,
  spectrumDefinitions,
  onRetry 
}) {
  const shareToFacebook = () => {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(`Am făcut Testul Politic Românesc 2025 și sunt ${profile.label}! Încearcă și tu! #TestulPolitic2025`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const shareText = encodeURIComponent(`Am făcut Testul Politic Românesc 2025 și sunt ${profile.label}! Încearcă și tu! ${window.location.href}`);
    window.open(`https://wa.me/?text=${shareText}`, '_blank');
  };

  const shareToTikTok = () => {
    alert('Pentru a distribui pe TikTok, fă un screenshot cu rezultatul și încarcă-l în aplicația TikTok cu hashtag-ul #TestulPolitic2025');
  };

  return (
    <div className={styles.resultScreen}>
      <h1 className={styles.title}>Rezultatul Tău</h1>
      
      <div className={styles.profileBox}>
        <h2 className={styles.profileTitle}>{profile.label}</h2>
        <p className={styles.profileDescription}>{profile.description}</p>
      </div>

      <div className={styles.spectrumResults}>
        {Object.entries(spectrumDefinitions).map(([key, spectrum]) => (
          <div key={key} className={styles.spectrumContainer}>
            <h3>{spectrum.name}</h3>
            <div className={styles.spectrumBar}>
              <span className={styles.leftLabel}>
                {spectrum.emoji_left} {spectrum.left}
              </span>
              <div className={styles.barTrack}>
                <div 
                  className={styles.barIndicator}
                  style={{ left: `${((userScores[key] + 10) / 20) * 100}%` }}
                />
              </div>
              <span className={styles.rightLabel}>
                {spectrum.right} {spectrum.emoji_right}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.matchesSection}>
        <h3>Partide Apropiate</h3>
        <div className={styles.matchesList}>
          {partyMatches.map((party, index) => (
            <div key={index} className={styles.matchItem}>
              <span className={styles.partyLogo}>{party.logo}</span>
              <div className={styles.matchContent}>
                <h4>{party.name}</h4>
                <p>{party.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.matchesSection}>
        <h3>Politicieni Apropiați</h3>
        <div className={styles.matchesList}>
          {politicianMatches.map((politician, index) => (
            <div key={index} className={styles.matchItem}>
              <div className={styles.matchContent}>
                <h4>{politician.name}</h4>
                <p className={styles.partyTag}>{politician.party}</p>
                <p>{politician.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.shareSection}>
        <h3>Distribuie Rezultatul</h3>
        <div className={styles.shareButtons}>
          <button onClick={shareToFacebook} className={`${styles.shareButton} ${styles.facebook}`}>
            <FaFacebookF /> Facebook
          </button>
          <button onClick={shareToWhatsApp} className={`${styles.shareButton} ${styles.whatsapp}`}>
            <FaWhatsapp /> WhatsApp
          </button>
          <button onClick={shareToTikTok} className={`${styles.shareButton} ${styles.tiktok}`}>
            <FaTiktok /> TikTok
          </button>
        </div>
      </div>

      <button onClick={onRetry} className={styles.retryButton}>
        Încearcă din nou
      </button>
    </div>
  );
} 