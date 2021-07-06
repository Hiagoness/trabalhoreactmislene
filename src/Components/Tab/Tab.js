import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimaryFocusXS from '../../Components/Buttons/BtnPrimaryFocusXS';

export const Tab = props => {

    const id = props.id;
    const name = props.name;
    const className = `app-tab-wrapper ${props.className || ''}`;

    return (

        <div
            id={id}
            name={name}
            className={className}>
            {props.children}
        </div>
    )
}


export const TabLink = props => {

    const className = `app-tab app-tab-link ${props.className || ''}`;
    const linkTo = props.to;

    return (

        <Link className={className} to={linkTo}>
            {props.children}
        </Link>
    )
}

export const TabButton = props => {

    const id = props.id;
    const name = props.name;
    console.log(id,name);
    const className = `app-tab app-tab-btn ${props.className || ''}`;
    const linkTo = props.linkTo;

    return (

        <Link className={className} to={linkTo}>
            {props.children}
        </Link>
    )
}


export const TabActionButton = props => {

    const id = props.id;
    const name = props.name;
    console.log(id,name);
    const className = ` ${props.className || ''}`;
    const linkTo = props.linkTo;
    const handleClick = props.onClick;
    const objTransfer = props.objTransfer; 
     

    return (
        <Link to={{
            pathname: linkTo,
            search: "",
            hash: "",
            state: undefined, 
            objTransfer: objTransfer || ""
        }}        
        className="app-tab app-tab-btn-action" tabIndex="-1">
            <BtnPrimaryFocusXS className={className} onClick={handleClick}>
                {props.children}
            </BtnPrimaryFocusXS>
        </Link>
    )
}


export default { Tab, TabLink, TabButton, TabActionButton };
