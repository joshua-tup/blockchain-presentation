import { CSSTransition } from 'react-transition-group';

const Ethereum = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className={'margin'}>
                    <h1 className='display-1'>2. Generation DLT: Ethereum</h1>
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
                        <div className={'row justify-content-center margin'}>
                            <div className={'col-6'}>
                                <div className={'my-box'}>
                                    <h1 className='display-3'>Einführung: Smart Contracts</h1>
                                    <div>
                                        <h1 className='display-6' style={{padding: '20px 0 0 0'}}>Turing vollständig</h1>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px", marginTop: "30px"}}>
                                            <div className="arrow"/>
                                        </div>
                                    </div>
                                    <div className={'col-12'}>
                                        <div className={'my-box'}>
                                            <h1> decentralized-Apps</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-6'}>
                                <div className={'row justify-content-center'}>
                                    <div className={'col-7'}>
                                        <div className={'my-box margin'}>
                                            <h1 className='display-3'>Nodes</h1>
                                        </div>
                                        <div className={'my-box margin'}>
                                            <h1 className='display-6'>Full-Nodes</h1>
                                        </div>
                                        <div className={'my-box margin'}>
                                            <h1 className='display-6'>Lightweight-Nodes</h1>
                                        </div>
                                        <div className={'my-box'}>
                                            <h1 className='display-6'>Miner</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'row justify-content-center my-margin-top'}>
                            <div className={'col-7'}>
                                <div className={'my-box'}>
                                    <h1 className='display-3'>Ethereum 2.0 (Proof-Of-Stake)</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

        </div>
    )
}

export default Ethereum