import { CSSTransition } from 'react-transition-group';
import tresorPNG from "../graphics/tresor.png";
import keyPNG from "../graphics/key.png";
import coinPNG from "../graphics/coin.png";
import mailPNG from "../graphics/mail.png";

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
                             <div className={"row"}>
                                 <div className={"col-12"}>
                                     <div className={"my-box"}>
                                         <h1 className='display-5'>
                                             Transaktion:
                                             <img src={tresorPNG} alt="tresor.png" height="100" style={{margin: '0 40px 0 40px'}} />
                                             <img src={coinPNG} alt="coin.png" height="100" style={{margin: '0 40px 0 0'}} />
                                             <img src={tresorPNG} alt="tresor.png" height="100" />
                                             <CSSTransition
                                                 in={slideProgress === 5}
                                                 timeout={500}
                                                 classNames="row-right"
                                                 mountOnEnter={true}
                                                 unmountOnExit={true}>
                                                <img src={keyPNG} alt="key.png" height="100" style={{margin: '0 0 0 40px'}} />
                                             </CSSTransition>
                                         </h1>
                                     </div>
                                 </div>
                             </div>
                         </CSSTransition>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Transactions