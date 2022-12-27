import Header from '../components/header.js';
import style from '../styles/resume.module.css';
export default function Resume() {
    return (
        <div className={style['resume-container']}>
            <Header/>
            <div className={style['contact-info']}>
                <h3> contact info </h3>
                <ul>
                    <li className={style['contact-item']}><a href="https://www.linkedin.com/in/jacob-williams-2457b595/"> Linkedin </a></li>
                    <li className={style['contact-item']}><a href="https://github.com/jayteedubya"> GitHub </a></li>
                    <li className={style['contact-item']}><a href="https://www.codecademy.com/profiles/rabidpotatoes"> Codecademy </a></li>
                    <li className={style['contact-item']}><a href="https://www.datacamp.com/profile/jayteedubya"> Datacamp</a></li>
                    <li className={style['contact-item']}><a href="mailto:jayteedubya@gmail.com"> Email </a></li>
                </ul>
            </div>
            <iframe className={style['resume-preview']} src="https://docs.google.com/document/d/e/2PACX-1vT_wcNnxewtPaiaWmEBy8z8zEu42v3vv4K4yKFK_cjgmMS26YAIr4cLg4tHCvozUTTRt7ex541OySoG/pub?embedded=true"></iframe>
        </div>
    )
}