import { NavLink } from "react-router"
import { useContext } from "react"
import { LanguageContext } from "../../contexts/LanguageContext.jsx"
import "./Nav.css"

export default function Nav(){
    const { t } = useContext(LanguageContext);

    return(
        <nav>
            <NavLink to={'/'}>{t('nav.home')}</NavLink>
            <NavLink to={'/settings'}>{t('nav.settings')}</NavLink>
            <NavLink to={'/about'}>{t('nav.about')}</NavLink>
        </nav>
    )
}