import style from './Home.module.css';
import { useTranslation } from "react-i18next";

const Home = () => {
    const{t, i18n} = useTranslation();

    const changeLanguage = (Language) => {
        i18n.changeLanguage(Language);
    }
    return (
        <div>
            <h1 className={`w-full ${style.textColor}`}>{t('welcome')} Página inicial</h1>
            <button onClick={()=> changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('pt')}>Português</button>
        </div>
    );
}

export default Home;