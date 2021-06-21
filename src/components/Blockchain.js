import { CSSTransition } from 'react-transition-group';
import blockchainPNG from '../graphics/blockchain.png';
import coinPNG from "../graphics/coin.png";
import tresorPNG from "../graphics/tresor.png";
import dotsPNG from "../graphics/dots.png";
import blockPNG from "../graphics/block.png";

const Blockchain = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='margin'>
                    <h1 className='display-1 margin'>Blockchain</h1>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <img src={blockchainPNG} alt="blockchain.png" width="750px" />
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row margin justify-content-center'>
                    <div className='col-11'>
                        <div className='row'>
                            <div className='col-6'>
                                <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '30px 0 30px 0', border: '10px solid #26547c', marginBottom: '30px'}}>
                                    <CSSTransition
                                        in={slideProgress >= 6}
                                        timeout={500}
                                        classNames="row-top"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        <div className='row' style={{margin: '-15px 0 20px 0', padding: '0 0 20px 0', borderBottom: '4px solid #26547c'}}>
                                            <div className='col-12'>
                                                <h1 className='display-4'>Vorhergehender Hashwert</h1>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                    <div className='row' style={{margin: '0 0 0 20px'}}>
                                        <div className='col-1'>
                                            <h1 className='display-3'>1.</h1>
                                        </div>
                                        <div className='col-11'>
                                            <h1 className='display-3' style={{textAlign: 'left'}}>
                                                <img src={tresorPNG} alt="tresor.png" height="90" style={{margin: '0 40px 0 0'}} />
                                                <img src={coinPNG} alt="coin.png" height="90" style={{margin: '0 40px 0 0'}} />
                                                <img src={tresorPNG} alt="tresor.png" height="90" />
                                                <div style={{display: 'inline', margin: '0 40px 0 40px'}}>
                                                    <p style={{display: 'inline', fontFamily: 'Signature', margin: '0 20px 0 0', color: '#ef476f'}}>Signature</p>
                                                </div>
                                            </h1>
                                        </div>
                                    </div>
                                    <CSSTransition
                                        in={slideProgress >= 2}
                                        timeout={500}
                                        classNames="row-right"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        <div className='row' style={{margin: '30px 0 0 20px'}}>
                                            <div className='col-1'>
                                                <h1 className='display-3'>2.</h1>
                                            </div>
                                            <div className='col-11'>
                                                <h1 className='display-3' style={{textAlign: 'left'}}>
                                                    <img src={tresorPNG} alt="tresor.png" height="90" style={{margin: '0 40px 0 0'}} />
                                                    <img src={coinPNG} alt="coin.png" height="90" style={{margin: '0 40px 0 0'}} />
                                                    <img src={tresorPNG} alt="tresor.png" height="90" />
                                                    <div style={{display: 'inline', margin: '0 40px 0 40px'}}>
                                                        <p style={{display: 'inline', fontFamily: 'Signature', margin: '0 20px 0 0', color: '#ef476f'}}>Signature</p>
                                                    </div>
                                                </h1>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                    <CSSTransition
                                        in={slideProgress >= 3}
                                        timeout={500}
                                        classNames="row-right"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        <div className='row' style={{margin: '30px 0 0 20px'}}>
                                            <div className='col-1'>
                                                <h1 className='display-3'>3.</h1>
                                            </div>
                                            <div className='col-11'>
                                                <h1 className='display-3' style={{textAlign: 'left'}}>
                                                    <img src={tresorPNG} alt="tresor.png" height="90" style={{margin: '0 40px 0 0'}} />
                                                    <img src={coinPNG} alt="coin.png" height="90" style={{margin: '0 40px 0 0'}} />
                                                    <img src={tresorPNG} alt="tresor.png" height="90" />
                                                    <div style={{display: 'inline', margin: '0 40px 0 40px'}}>
                                                        <p style={{display: 'inline', fontFamily: 'Signature', margin: '0 20px 0 0', color: '#ef476f'}}>Signature</p>
                                                    </div>
                                                </h1>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                    <CSSTransition
                                        in={slideProgress >= 4}
                                        timeout={500}
                                        classNames="row-top"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        <div className='row' style={{margin: '25px 0 0 0'}}>
                                            <div className='col-12'>
                                                <img src={dotsPNG} alt="dots.png" height="50" />
                                            </div>
                                        </div>
                                    </CSSTransition>
                                </div>
                                <CSSTransition
                                    in={slideProgress >= 5}
                                    timeout={500}
                                    classNames="row-top"
                                    mountOnEnter={true}
                                    unmountOnExit={true}>
                                    <div>
                                        <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                                            <div className="arrow"/>
                                        </div>
                                        <div className='my-box'>
                                            <div className='row'>
                                                <div className='col-12 offset-1'>
                                                    <h1 className='display-6' style={{textAlign: 'left'}}>Prüfen auf:</h1>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12 offset-2'>
                                                    <h1 className='display-6' style={{textAlign: 'left'}}> - Korrektheit der Signatur</h1>
                                                </div>
                                                <div className='col-12 offset-2'>
                                                    <h1 className='display-6' style={{textAlign: 'left'}}> - Overspending</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                            <CSSTransition
                                in={slideProgress >= 6}
                                timeout={500}
                                classNames="row-left"
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                <div className="col-6">
                                    <div className="row margin">
                                        <div className="vertical-center col-2">
                                            <div className="icon">
                                                <div className="arrow"/>
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <div className='my-box'>
                                                <h1 className='display-2'>
                                                    Proof-Of-Work
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <CSSTransition
                                        in={slideProgress >= 7}
                                        timeout={500}
                                        classNames="row-top"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        <div className="row margin">
                                            <div className="col-12">
                                                <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                                                    <div className="arrow"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="my-box">
                                                    <h1 className='display-4'>
                                                        SHA-256(
                                                        <img src={blockPNG} alt="block.png" height="80px" style={{margin: '0 25px 0 25px'}}/>
                                                        + Nonce )
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                    <CSSTransition
                                        in={slideProgress >= 8}
                                        timeout={500}
                                        classNames="row-top"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        <div className="row margin">
                                            <div className="col-12">
                                                <div className="my-box">
                                                    <h1 className='display-5'>
                                                        SHA-256(
                                                        <img src={blockPNG} alt="block.png" height="60px" style={{margin: '0 25px 0 25px'}}/>
                                                        + 010110001100101... )
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                    <CSSTransition
                                        in={slideProgress >= 9}
                                        timeout={500}
                                        classNames="row-top"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        <div className="row margin">
                                            <div className="col-12">
                                                <div className="my-box">
                                                    <h1 className='display-5'>
                                                        SHA-256(
                                                        <img src={blockPNG} alt="block.png" height="60px" style={{margin: '0 25px 0 25px'}}/>
                                                        + 1110010100101001... )
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                    <CSSTransition
                                        in={slideProgress >= 9}
                                        timeout={500}
                                        classNames="row-top"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="my-box">
                                                    <h1 className='display-5'>
                                                        SHA-256(
                                                        <img src={blockPNG} alt="block.png" height="60px" style={{margin: '0 25px 0 25px'}}/>
                                                        + 000111100... )
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Blockchain