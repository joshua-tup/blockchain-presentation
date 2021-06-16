import { CSSTransition } from 'react-transition-group';
import blockchainPNG from '../graphics/blockchain.png';
import tanglePNG from '../graphics/tangle.png';
import scmJPG from '../graphics/scm.jpg';
/*<h1 className='display-1 margin' style={slideProgress <= 0 ? {color: "transparent"} : {}}>Distributed-Ledger-Technology</h1>*/

const BlockchainHeader = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <h1 className='display-1 margin'>Distributed-Ledger-Technology</h1>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
            <div className='row margin justify-content-center'>
                <div className='col-10 my-box'>
                    <div className='row'>
                        <div className='vertical-center col-3'>
                            <h1 className='display-3'>Blockchain</h1>
                        </div>
                        <div className='col-auto'>
                            <img src={blockchainPNG} alt="blockchain.png" />
                        </div>
                    </div>
                </div>
            </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 2}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row margin justify-content-center'>
                    <div className='col-10 my-box'>
                        <div className='row'>
                            <div className='vertical-center col-3'>
                                <h1 className='display-3'>TDAG / blockDAG</h1>
                            </div>
                            <div className='col-auto'>
                                <img src={tanglePNG} alt="tangle.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 3}
                timeout={500}
                classNames="row-top"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row margin justify-content-center'>
                    <div className='col-12'>
                        <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                            <div className="arrow"/>
                        </div>
                    </div>
                    <div className='col-10 my-box'>
                        <div className='row'>
                            <div className='col-12'>
                                <h1 className='display-4'>Distributed-Ledger-Technology im Supply-Chain-Management</h1>
                            </div>
                            <div className='col-12'>
                                <img src={scmJPG} alt="scm.jpg" width="1400px" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default BlockchainHeader