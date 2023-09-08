import React from 'react'
import { Link } from 'react-router-dom'
import Turkey from '../Images/turkeyFlag.png'
import Usa from '../Images/usaFlag.png'
import { withTranslation } from 'react-i18next'
import i18n from './i18n'

function LanguageResuability() {
    return (
        <>
                <ul className='navbar-nav me-3'>
                    <li className='nav-item'>
                        <Link className='nav-link' onClick={() => {i18n.changeLanguage("tr")}}>
                            <img src={Turkey} alt="turkeyFlag" width="40px" />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' onClick={() => {i18n.changeLanguage("en")}}>
                            <img src={Usa} alt="UsaFlag" width="40px" />
                        </Link>
                    </li>
                </ul>
        </>
    )
}

export default withTranslation()(LanguageResuability);
