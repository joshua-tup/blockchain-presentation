import './BlockchainHeader.css';
import blockchainPNG from '../graphics/blockchain.png';

const BlockchainHeader = ({slideProgress}) => {
    return (
        <div id='container'>
            {slideProgress === 1 && <h1 className='display-1'>Distributed-Ledger-Technology</h1>}
            {slideProgress >= 0 &&
            <div className='row'>
                <div className='vertical-center col-3'>
                    <h1 className='display-3'>Blockchain</h1>
                </div>
                <div className='col-auto'>
                    <img src={blockchainPNG} alt="blockchain.png" />
                </div>
            </div>}
            {slideProgress === 2 && <h1>Distributed-Ledger-Technology im Supply-Chain-Management</h1>}
            {/*
            <div className="blockchain">
                {slideProgress > 0 && <div className="block" style={{color: '#26547c'}}/>}
                {slideProgress > 1 &&  <div className="block" style={{color: '#ef476f'}}/>}
                {slideProgress > 2 &&  <div className="block" style={{color: '#FFA62B'}}/>}
                {slideProgress > 3 &&  <div className="block" style={{color: '#06d6a0'}}/>}
            </div>
            */}
        </div>
    )
}

export default BlockchainHeader