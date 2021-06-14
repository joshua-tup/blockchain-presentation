import './BlockchainHeader.css';
import { CSSTransition } from 'react-transition-group';
import blockchainPNG from '../graphics/blockchain.png';
import tanglePNG from '../graphics/tangle.png';
import scmJPG from '../graphics/scm.jpg';
import arrowPNG from '../graphics/arrow.png';

const BlockchainHeader = ({slideProgress}) => {
    return (
        <div id='container'>
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <h1 className='display-1 margin'>Distributed-Ledger-Technology</h1>
            </CSSTransition>
            <div className='row margin'>
                <div className='vertical-center col-3'>
                    <h1 className='display-3'>Blockchain</h1>
                </div>
                <div className='col-auto'>
                    <img src={blockchainPNG} alt="blockchain.png" />
                </div>
            </div>
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row margin'>
                    <div className='vertical-center col-3'>
                        <h1 className='display-3'>Tangle</h1>
                    </div>
                    <div className='col-auto'>
                        <img src={tanglePNG} alt="tangle.png" />
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 2}
                timeout={500}
                classNames="row-top"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row'>
                    <div className='col-12'>
                        <img src={arrowPNG} alt="arrow.png" />
                    </div>
                    <div className='col-12'>
                        <h1 className='display-3'>Distributed-Ledger-Technology im Supply-Chain-Management</h1>
                    </div>
                    <div className='col-12'>
                        <img src={scmJPG} alt="scm.jpg" />
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default BlockchainHeader