import React from 'react'
import { useI8n } from '../../hooks/useI8n'
import {availableLanguages} from '../../i8n/config'
import './LangSwitcher.css'

const LangSwithcer = () =>{
     const {currLanguage, changeLanguage} = useI8n()
    return(
        <div className="language-switcher">
            {availableLanguages.map((lang)=>(
                <button
                key={lang.code}
                onClick={()=>changeLanguage(lang.code)}
                className={`language-button ${currLanguage === lang.code ? 'active' : ''}`}
                title={lang.name}
                >
                <span className="flag">{lang.flag}</span>
                <span className="code">{lang.code.toUpperCase()}</span>
                </button>
            ))};
        </div>
    )
}

export default LangSwithcer;
