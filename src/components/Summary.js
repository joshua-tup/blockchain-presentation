import { CSSTransition } from 'react-transition-group';

const Summary = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className={'margin'}>
                    <h1 className='display-1'>Summary</h1>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Summary