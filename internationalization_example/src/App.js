import './App.css';
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import ReactFlagsSelect from 'react-flags-select';

function App() {
    const {t, i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('GB');

    const handleLanguageClick = (lng) => {
        i18n.changeLanguage(lng).then();
    };

    const handleOnSelectFlag = (countryCode) => {
        switch (countryCode) {
            case 'RO':
                handleLanguageClick('ro');
                setSelectedLanguage('RO');
                break;
            case 'FR':
                handleLanguageClick('fr');
                setSelectedLanguage('FR');
                break;
            case 'DE':
                handleLanguageClick('de');
                setSelectedLanguage('DE');
                break;
            case 'ES':
                handleLanguageClick('es');
                setSelectedLanguage('ES');
                break;
            case 'AR':
                handleLanguageClick('ar');
                setSelectedLanguage('AR');
                break;
            default:
                handleLanguageClick('en');
                setSelectedLanguage('GB');
                break;
        }
    };

    const renderLanguage = () => {
        return (
            <ReactFlagsSelect
                countries={["GB", "RO", "FR", "DE", "ES", "AR"]}
                showOptionLabel={false}
                showSelectedLabel={false}
                defaultCountry="GB"
                selected={selectedLanguage}
                selectedSize={30}
                optionsSize={30}
                onSelect={handleOnSelectFlag}
                selectButtonClassName="language-signup"
            />
        );
    };
    return (
        <div className="App">
            <div id="button-lng" className="button-change-language">
                {renderLanguage()}
            </div>
            <div id="title-page">{t('title')}</div>
            <div id="content">
                <Grid container xs={12} md={10} className="grid">
                    <p id="rose">{t('rose')}</p>
                </Grid>
                <Grid container xs={12} md={10} className="grid">
                    <p id="tulip">{t('tulip')}</p>
                </Grid>
                <Grid container xs={12} md={10} className="grid">
                    <p id="orchid">{t('orchid')}</p>
                   <p id="today-date"> {t('intlDateTime',
                    {
                        val: new Date(),
                        formatParams: {
                        val: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
                    },
                    })}</p>
                </Grid>
            </div>
        </div>
    );
}

export default App;
