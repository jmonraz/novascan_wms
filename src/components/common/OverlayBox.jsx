import React from "react";
import style from "./OverlayBox.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const OverlayBox = ({ children, title = 'TITLE', onClose }) => {
    return (
        <>
            <div className={style['overlay']}>
                <div className={style['overlay-container']}>
                    <div className={style['title-row']}>
                        <p>{title}</p>
                        <FontAwesomeIcon icon={faClose} className={style['close-icon']} onClick={onClose} />
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default OverlayBox;