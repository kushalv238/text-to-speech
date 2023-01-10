import './stylesheets/app.css';

import Theme from './components/theme/Theme';
import TextToSpeech from './components/text-to-speech/TextToSpeech';

export default function App() {
    return(
        <>
            <Theme />
            <TextToSpeech />
        </>
    );
}