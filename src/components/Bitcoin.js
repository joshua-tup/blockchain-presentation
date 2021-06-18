import { CSSTransition } from 'react-transition-group';

const Bitcoin = ({slideProgress}) => {
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
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className={"row justify-content-center margin"}>
                    <div className={"col-7 my-box"}>
                        <h1 className='display-3'>Wie funktionieren Konten?</h1>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 2}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row justify-content-center'>
                    <div className='col-7 my-box'>
                        <h1 className='display-3'>Wie funktionieren Transaktionen?</h1>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Bitcoin