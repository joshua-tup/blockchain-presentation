import { CSSTransition } from 'react-transition-group';
import tresorPNG from "../graphics/tresor.png";
import keyPNG from "../graphics/key.png";
import coinPNG from "../graphics/coin.png";
import transactionPNG from "../graphics/transaction.png";

const Transactions = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className={'margin'}>
                    <h1 className='display-1'>Wie funktionieren Transaktionen?</h1>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className={"row justify-content-center"}>
                    <div className={"col-10"}>
                         <div className={"row margin"}>
                             <div className={"col-4"}>
                                 <div className={"my-box"}>
                                     <h1 className='display-5'>
                                         <img src={tresorPNG} alt="tresor.png" height="100" style={{margin: '0 20px 0 0'}} />
                                         = Public Key
                                     </h1>
                                 </div>
                             </div>
                             <CSSTransition
                                 in={slideProgress >= 2}
                                 timeout={500}
                                 classNames="row-right"
                                 mountOnEnter={true}
                                 unmountOnExit={true}>
                                 <div className={"col-3"}>
                                     <div className={"my-box"}>
                                         <h1 className='display-5'>
                                             <img src={coinPNG} alt="coin.png" height="100" style={{margin: '0 20px 0 0'}} />
                                             = Betrag
                                         </h1>
                                     </div>
                                 </div>
                             </CSSTransition>
                             <CSSTransition
                                 in={slideProgress >= 4}
                                 timeout={500}
                                 classNames="row-right"
                                 mountOnEnter={true}
                                 unmountOnExit={true}>
                                 <div className={"col-5"}>
                                     <div className={"my-box"}>
                                         <h1 className='display-5'>
                                             <img src={keyPNG} alt="key.png" height="100" style={{margin: '0 20px 0 0'}} />
                                             = Private Key
                                         </h1>
                                     </div>
                                 </div>
                             </CSSTransition>
                         </div>
                         <CSSTransition
                             in={slideProgress >= 3}
                             timeout={500}
                             classNames="row-right"
                             mountOnEnter={true}
                             unmountOnExit={true}>
                             <div className={"row margin"}>
                                 <div className={"col-12"}>
                                     <div className={"my-box"}>
                                         <h1 className='display-5'>
                                             Transaktion:
                                             <CSSTransition
                                                 in={slideProgress >= 16}
                                                 timeout={500}
                                                 classNames="row-top"
                                                 mountOnEnter={true}
                                                 unmountOnExit={true}>
                                                 <p style={{display: 'inline', fontStyle: 'italic', fontWeight: '600', margin: '0 0 0 20px'}}> i</p>
                                             </CSSTransition>
                                             <img src={transactionPNG} alt="transaction.png" height="100" style={{margin: '-30px 0 0 40px'}} />
                                             <CSSTransition
                                                 in={slideProgress === 5}
                                                 timeout={500}
                                                 classNames="row-right"
                                                 mountOnEnter={true}
                                                 unmountOnExit={true}>
                                                <img src={keyPNG} alt="key.png" height="100" style={{margin: '0 0 0 40px'}} />
                                             </CSSTransition>
                                             <CSSTransition
                                                 in={slideProgress >= 11}
                                                 timeout={500}
                                                 classNames="row-right"
                                                 mountOnEnter={true}
                                                 unmountOnExit={true}>
                                                 <div style={{display: 'inline', margin: '0 0 0 40px'}}>
                                                     <p style={{display: 'inline', fontFamily: 'Signature', margin: '0 0 0 0', color: '#ef476f'}}>Signature</p>
                                                 </div>
                                             </CSSTransition>
                                         </h1>
                                     </div>
                                 </div>
                             </div>
                         </CSSTransition>
                        <CSSTransition
                            in={slideProgress >= 7}
                            timeout={500}
                            classNames="row-top"
                            mountOnEnter={true}
                            unmountOnExit={true}>
                            <div className={"row margin"}>
                                <div className={"col-12"}>
                                    <div className={"my-box"}>
                                        <h1 className={'display-5'}>
                                            Signieren(
                                            <CSSTransition
                                                in={slideProgress >= 16}
                                                timeout={500}
                                                classNames="row-top"
                                                mountOnEnter={true}
                                                unmountOnExit={true}>
                                                <p style={{display: 'inline', fontStyle: 'italic', fontWeight: '600', margin: '0 0 0 20px'}}> i</p>
                                            </CSSTransition>
                                            <CSSTransition
                                                in={slideProgress >= 8}
                                                timeout={500}
                                                classNames="row-top"
                                                mountOnEnter={true}
                                                unmountOnExit={true}>
                                                <img src={transactionPNG} alt="transaction.png" height="100" style={{margin: '-40px 40px 0 40px'}} />
                                            </CSSTransition>
                                            <CSSTransition
                                                in={slideProgress >= 9}
                                                timeout={500}
                                                classNames="row-top"
                                                mountOnEnter={true}
                                                unmountOnExit={true}>
                                                <div style={{display: 'inline'}}>
                                                    <img src={keyPNG} alt="key.png" height="100" style={{margin: '0 40px 0 0'}} />
                                                </div>
                                            </CSSTransition>
                                            )
                                            <CSSTransition
                                                in={slideProgress >= 10}
                                                timeout={500}
                                                classNames="row-top"
                                                mountOnEnter={true}
                                                unmountOnExit={true}>
                                                <div style={{display: 'inline', margin: '0 0 0 40px'}}>
                                                    = <p style={{display: 'inline', fontFamily: 'Signature', margin: '0 0 0 20px', color: '#ef476f'}}>Signature</p>
                                                </div>
                                            </CSSTransition>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={slideProgress >= 12}
                            timeout={500}
                            classNames="row-top"
                            mountOnEnter={true}
                            unmountOnExit={true}>
                            <div className={"row margin"}>
                                <div className={"col-12"}>
                                    <div className={"my-box"}>
                                        <h1 className={'display-5'}>
                                            Verifizieren(
                                            <CSSTransition
                                                in={slideProgress >= 16}
                                                timeout={500}
                                                classNames="row-top"
                                                mountOnEnter={true}
                                                unmountOnExit={true}>
                                                <p style={{display: 'inline', fontStyle: 'italic', fontWeight: '600', margin: '0 0 0 20px'}}> i</p>
                                            </CSSTransition>
                                            <CSSTransition
                                                in={slideProgress >= 13}
                                                timeout={500}
                                                classNames="row-top"
                                                mountOnEnter={true}
                                                unmountOnExit={true}>
                                                <img src={transactionPNG} alt="transaction.png" height="100" style={{margin: '-40px 40px 0 40px'}} />
                                            </CSSTransition>
                                            <CSSTransition
                                                in={slideProgress >= 14}
                                                timeout={500}
                                                classNames="row-top"
                                                mountOnEnter={true}
                                                unmountOnExit={true}>
                                                <div style={{display: 'inline', margin: '0 0 0 0'}}>
                                                    <p style={{display: 'inline', fontFamily: 'Signature', margin: '0 20px 0 0', color: '#ef476f'}}>Signature</p>
                                                </div>
                                            </CSSTransition>
                                            )
                                            <CSSTransition
                                                in={slideProgress >= 15}
                                                timeout={500}
                                                classNames="row-top"
                                                mountOnEnter={true}
                                                unmountOnExit={true}>
                                                <div style={{display: 'inline', margin: '0 0 0 40px'}}>
                                                    = <p style={{display: 'inline', margin: '0 0 0 20px'}}> T / F </p>
                                                </div>
                                            </CSSTransition>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                        <div className={"row"}>
                            <CSSTransition
                                in={slideProgress >= 17}
                                timeout={500}
                                classNames="row-top"
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                <div className={"col-6"}>
                                    <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                                        <div className="arrow"/>
                                    </div>
                                </div>
                            </CSSTransition>
                            <CSSTransition
                                in={slideProgress >= 18}
                                timeout={500}
                                classNames="row-top"
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                <div className={"col-6"}>
                                    <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                                        <div className="arrow"/>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                        <div className={"row"}>
                            <CSSTransition
                                in={slideProgress >= 17}
                                timeout={500}
                                classNames="row-top"
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                <div className={"col-6 margin"}>
                                    <div className={"my-box"} style={{backgroundColor: '#C9FFC9'}}>
                                        <h1>
                                            Authorisierung einer Transaktion ist nachprüfbar
                                        </h1>
                                    </div>
                                </div>
                            </CSSTransition>
                            <CSSTransition
                                in={slideProgress >= 18}
                                timeout={500}
                                classNames="row-top"
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                <div className={"col-6 margin"}>
                                    <div className={"my-box"} style={{backgroundColor: '#FFBFBF'}}>
                                        <h1>
                                            Overspending
                                        </h1>
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

export default Transactions