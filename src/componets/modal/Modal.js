import React, {useRef} from 'react';

import style from "./modal.module.scss"
import {useOnClickOutside} from "../../hooks/useOnclickOutside";

const Modal = ({ fn, children }) => {

    const refElem = useRef(null);
    useOnClickOutside(refElem, fn);

    return (
        <div ref={refElem} className={style.content}>
            <span onClick={fn}>X</span>
            {children}
        </div>
    );
};

export default Modal;