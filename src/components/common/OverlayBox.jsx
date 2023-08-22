import React from "react";
import style from "./OverlayBox.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSave } from "@fortawesome/free-solid-svg-icons";

const OverlayBox = ({ children, title = 'TITLE', onClose }) => {
    return (
        <>
            <div className={style['overlay']}>
                <div className={style['overlay-container']}>
                    <div className={style['title-row']}>
                        <div className={style['row']}>
                            <p>{title}</p>
                        </div>
                        <div className={style['row-icons']}>
                            <FontAwesomeIcon icon={faSave} className={style['save-icon']} />
                            <FontAwesomeIcon icon={faClose} className={style['close-icon']} onClick={onClose} />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default OverlayBox;