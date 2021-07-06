import React from 'react';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageReturnBtn = props => {


    const history = useHistory();

    const id = props.id;
    const name = props.name;
    const type = `${props.type || 'button'}`;
    const className = `app-page-return-btn ${props.className || ''}`;
    const value = props.value;

    const handleClick = evento => {
        if (props.onClick)
            props.onClick(evento);

        history.goBack()
    };

    return (
        <div>
            <button id={id}
                name={name}
                type={type}
                className={className}
                value={value}
                onClick={handleClick}
                style={{
                    color: "white",
                    backgroundColor: "#e84410",
                    padding: "10px",
                    borderRadius: "10%"
                }}
            >
            <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>

    )
}


export default PageReturnBtn;
