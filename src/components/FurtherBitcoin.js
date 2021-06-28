import { CSSTransition } from 'react-transition-group';

const FurtherBitcoin = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className={'margin'}>
                    <h1 className='display-1'>Wo steht Bitcoin heute?</h1>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className={'row justify-content-center'}>
                    <div className={'col-11'}>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <div className={'my-box'}>
                                    <h1 className='display-3'>Vorteile</h1>
                                    <div style={{textAlign: 'left', padding: '20px 20px 0 20px'}}>
                                        <h1 className='display-6'>- dezentrale Verwaltung von Tokens / Geld / digitalen Gütern</h1>
                                        <h1 className='display-6' style={{padding: '20px 0 0 0'}}>- resistent gegen Sybil-Attacken</h1>
                                    </div>
                                </div>
                            </div>
                            <CSSTransition
                                in={slideProgress >= 2}
                                timeout={500}
                                classNames="row-right"
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                <div className={'col-6'}>
                                    <div className={'my-box'}>
                                        <h1 className='display-3'>Nachteile</h1>
                                        <div style={{textAlign: 'left', padding: '20px 20px 0 20px'}}>
                                            <h1 className='display-6' style={{padding: '0 0 0 0'}}>- hoher Energieverbrauch</h1>
                                            <h1 className='display-6' style={{padding: '20px 0 0 0'}}>- hohe Latenz oder hohe Gebühren</h1>
                                            <h1 className='display-6' style={{padding: '20px 0 0 0'}}>- schlechte Skalierung (3-4 TPS / 1 MB)</h1>
                                            <h1 className='display-6' style={{padding: '20px 0 0 40px'}}>-> Hard-Fork: Bitcoin Cash (24-32 TPS / 8 MB)</h1>
                                            <h1 className='display-6' style={{padding: '20px 0 0 0'}}>- Mining Pools</h1>
                                            <h1 className='display-6' style={{padding: '20px 0 0 0'}}>- Interessenskonflikt zwischen Minern und Nutzern</h1>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default FurtherBitcoin