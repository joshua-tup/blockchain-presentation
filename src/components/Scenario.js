import './Scenario.css';

const Scenario = ({slideProgress}) => {

    return (
        <div id='container'>
            <h1>Gedankenspiel</h1>
            <div className='content'>
                {slideProgress > 0 && <p>• Wir nehmen an es gibt 4 Parteien: Lisa, Tim, Lea, Jonas</p>}
                {slideProgress > 1 && <p className='indent'>- sind misstrauisch</p>}
                {slideProgress > 2 && <p className='indent'>- wollen miteinander handeln</p>}
                {slideProgress > 3 && <p>• Keine physische Währung</p>}
                {slideProgress > 4 && <p>• Kein unparteiischer Dritter</p>}
            </div>
        </div>
    )
}

export default Scenario