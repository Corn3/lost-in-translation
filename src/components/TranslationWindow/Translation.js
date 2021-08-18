import { useEffect, useState } from "react";
import { getTextData, postTextData } from "../../api/translation/translationAPI";
import Sign from "./Sign";

const Translation = () => {

    const [words, setWords] = useState("");
    const [symbols, setSymbols] = useState([]);
    const DEFAULT_PATH = `${process.env.PUBLIC_URL}/assets/images/`

    const translateButtonClick = () => {
        if (words.length === 0) {
            alert("Please enter letters, more than 0 and max 40.")
        } else {
            setSymbols(words.split(""));
        }
    }

    const onInputChange = event => {
        setWords(event.target.value)
    }

    return (
        <div className="Translation">
            <div className="field-container">
                <label htmlFor="words">Text to be translated</label>
                <div className="text-field-container">
                    <span className="input-symbol">⌨|</span>
                    <input id="words" className="text-size-m input-text-field" placeholder="Enter a text to be translated (Max 40 letters)" maxLength="40" onChange={onInputChange}></input>
                    <button id="text-button" className="input-button" onClick={translateButtonClick}>GO</button>
                </div>
            </div>
            <div className="translation-field-container">
                <div className="translation-field">
                    {
                        symbols.map((s, i) => <Sign key={i} symbol={DEFAULT_PATH + s + ".png"} />)
                    }
                </div>
                <footer className="translation-field-footer"><div className="translation-field-info">Translation</div></footer>
            </div>
        </div>
    );
}

/**
 * setStorage("user", user);
 * getStorage("user")
 */

export default Translation;