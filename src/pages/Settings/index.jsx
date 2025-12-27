import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme.jsx';
import { LanguageContext } from '../../contexts/LanguageContext.jsx';
import './Settings.css';

export default function Settings(){
    const { theme, setTheme } = useContext(ThemeContext);
    const { language, setLanguage, t } = useContext(LanguageContext);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className={`settings-container ${theme}`}>
            <div className="settings-card">
                <h1>{t('settings.title')}</h1>
                <div className="settings-content">
                    <div className="setting-item">
                        <div className="setting-info">
                            <h2>{t('settings.theme')}</h2>
                            <p>{t('settings.themeDescription')}</p>
                        </div>
                        <div className="setting-control">
                            <span className="toggle-label">{theme === 'dark' ? t('settings.dark') : t('settings.light')}</span>
                            <label className="theme-toggle">
                                <input 
                                    type="checkbox" 
                                    checked={theme === 'dark'}
                                    onChange={toggleTheme}
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h2>{t('settings.language')}</h2>
                            <p>{t('settings.languageDescription')}</p>
                        </div>
                        <div className="setting-control">
                            <select 
                                value={language} 
                                onChange={handleLanguageChange}
                                className="language-select"
                            >
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}