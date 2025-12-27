import { useContext } from "react"
import { LanguageContext } from "../../contexts/LanguageContext.jsx"
import "./Footer.css"

export default function Footer(){
    const { t } = useContext(LanguageContext);
    
    return(
        <footer>
            <p>{t('footer.copyright')}</p>
        </footer>
    )
}

