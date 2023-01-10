import './../../stylesheets/textToSpeech.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faUndo } from '@fortawesome/free-solid-svg-icons';

const TextToSpeech = () => {

    const[message, setMessage] = useState('');
    const msg = new SpeechSynthesisUtterance();

    const speakMessage = () => {
        msg.text = message;
        window.speechSynthesis.speak(msg)
    }

    return (
        <div className='text-to-speech-section'>
            <div className="text-to-speech-components">
                <div className="text-to-speech">
                    <input 
                        value={message}
                        autoFocus
                        placeholder="Enter Message..."
                        id='text-to-speech-input'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="resetButton">
                        <button
                            className="btn"
                            id='reset-btn'
                            title='reset'
                            onClick={() => setMessage('')}
                        >
                            <FontAwesomeIcon icon={faUndo} />
                        </button>
                    </div>
                    <div className="speakingButton">
                        <button
                            className='btn'
                            title='speak up'
                            id='speaking-btn'
                            onClick={() => speakMessage()}
                        >
                            <FontAwesomeIcon id='speaker-icon' icon={faVolumeUp} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextToSpeech;