import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme.jsx';
import { LanguageContext } from '../../contexts/LanguageContext.jsx';
import './About.css';

export default function About(){
    const { theme } = useContext(ThemeContext);
    const { t } = useContext(LanguageContext);

    return (
        <div className={`about-container ${theme}`}>
            <div className="about-card">
                <h1>{t('about.title')}</h1>
                <div className="about-content">
                    <div className="about-section">
                        <h2>{t('about.welcome')}</h2>
                        <p>
                            {t('about.welcomeText1')} <strong>{t('about.funAndExploring')}</strong> {t('about.welcomeText2')}
                        </p>
                        <p>
                            {t('about.welcomeText3')} {t('about.welcomeText4')}
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>{t('about.feedback')}</h2>
                        <p>
                            {t('about.feedbackText1')} {t('about.feedbackText2')}
                        </p>
                        <p className="feedback-note">
                            {t('about.feedbackNote')}
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>{t('about.disclaimer')}</h2>
                        <p>
                            {t('about.disclaimerText')} {t('about.disclaimerText2')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}