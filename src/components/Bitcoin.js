import { CSSTransition } from 'react-transition-group';

const BlockchainHeader = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <h1 className='display-1 margin'>Bitcoin</h1>
            </CSSTransition>
        </div>
    )
}

export default BlockchainHeader