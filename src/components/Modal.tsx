import React, {FC, useRef} from 'react';

import './Modal.scss'
import {CSSTransition} from "react-transition-group";
import {workDemoPath} from "../utils/path";
import {myWorksData} from "../data/myWorksData";


interface ModalProps {
    workId: number;
    show: boolean;
    setModalId: (workId: number) => void;
}

const Modal: FC<ModalProps> = ({workId, show, setModalId}) => {
    const nodeRef = useRef(null)
    const work = myWorksData.filter(work => work.id === workId)[0]

    return (
        <>
            <div className="modal-cover"
                 hidden={!show}
                 onClick={() => setModalId(0)}
            ></div>
                <CSSTransition classNames="modal"
                               unmountOnExit
                               in={show}
                               timeout={500} ref={nodeRef}>
                    <div className="modal" ref={nodeRef}>
                        <div className="modal-header">
                            <div className="header-content">
                                <div className="header-name">{work?.title}</div>
                                <div className="header-close"
                                     onClick={() => setModalId(0)}
                                ><i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="modal-divider"></div>
                        </div>
                        <div className="modal-content">
                            <iframe title="123" width="100%" height="100%" src={workDemoPath(workId)}/>
                        </div>
                        <div className="modal-footer">
                            <div className="modal-divider"></div>

                        </div>
                    </div>
                </CSSTransition>
        </>
    );
};

export default Modal;