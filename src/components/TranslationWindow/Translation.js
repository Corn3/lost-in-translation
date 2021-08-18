import { useEffect, useState } from "react";
import { getTextData, postTextData } from "../../api/translation/translationAPI";
import Sign from "./Sign";
import { MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from "react-router-dom";

const Translation = () => {

    const [words, setWords] = useState("");
    const [symbols, setSymbols] = useState([]);
    const DEFAULT_PATH = `${process.env.PUBLIC_URL}/assets/images/`

    const translateButtonClick = () => {
        setSymbols(words.split(""));
    }

    const onInputChange = event => {
        setWords(event.target.value)
    }
    // ---------
    const username = localStorage.getItem('username');
    return (
        <div className="Translation">
            <Link to="Profile">
              <div id="username">
              <p> <MDBIcon icon="user" className="mr-2" /> {username}</p>
            </div>
            </Link>
            <label htmlFor="words">Text to be translated</label>
            <div className="text-field-container">
                <span className="input-symbol">⌨|</span>
                <input id="words" className="text-size-m input-text-field" placeholder="Enter a text to be translated (Max 40 letters)" maxLength="40" onChange={onInputChange}></input>
                <button id="text-button" className="input-button" onClick={translateButtonClick}>GO</button>
            </div>
            <div className="translation-field-container">
                {
                    symbols.map((s) => <Sign symbol={DEFAULT_PATH + s + ".png"} />)
                }
            </div>
        </div>
    );
}

/**
 * setStorage("user", user);
 * getStorage("user")
 */

export default Translation;