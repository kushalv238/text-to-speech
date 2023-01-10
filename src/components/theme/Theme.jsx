import './../../stylesheets/theme.css';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Theme = () => {
    const[lightTheme, toggleTheme] = useState(true);

    useEffect(
        () => {
            if(!lightTheme) {
                //darktheme
                document.querySelector(":root").style.setProperty('--clr-secondary', 'rgb(19, 19, 22)');
                document.querySelector(":root").style.setProperty('--clr-ternary', 'white');
                document.querySelector(":root").style.setProperty('--clr-shadow', 'rgba(147, 157, 161, 0.281)');
                document.querySelector(":root").style.setProperty('--clr-scheme', 'light');
            }
            else {
                //lighttheme
                document.querySelector(":root").style.setProperty('--clr-secondary', 'white');
                document.querySelector(":root").style.setProperty('--clr-ternary', 'rgb(19, 19, 22)');
                document.querySelector(":root").style.setProperty('--clr-shadow', 'rgba(14, 30, 37, 0.281)');
                document.querySelector(":root").style.setProperty('--clr-scheme', 'dark');

            }
        }, [lightTheme]
    )

    return (
        <div className={`theme${!lightTheme ? ' toRight' : ''}`} onClick={() => toggleTheme(prevTheme => !prevTheme)} title='Toggle Theme' >
            <div className="themeValue">
                <FontAwesomeIcon icon={lightTheme ? faSun : faMoon} />
            </div>
        </div>
    );
};

export default Theme;