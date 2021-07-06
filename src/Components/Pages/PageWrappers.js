import React from 'react';
import PageReturnBtn from './PageReturnBtn'

export const PageWrapperLG = props => {

    const id = props.id;
    const name = props.name;
    const className = `app-page-wrapper ${props.className || ''}`;

    return (
        <div id={id}
            name={name}
            className={className}>
            <div className="app-page-content app-page-content-size-large">
                <PageReturnBtn></PageReturnBtn>
                <hr />
                <h5>{props.PageTitle}</h5>
                {props.children}
            </div>
        </div>
    )
}

export const PageWrapperMD = props => {

    const id = props.id;
    const name = props.name;
    const className = `app-page-wrapper ${props.className || ''}`;

    return (


        <div id={id}
            name={name}
            className={className}>
            <div className="app-page-content app-page-content-size-medium">
                <PageReturnBtn></PageReturnBtn>                
                {props.children}
            </div>
        </div>


    )
}

export const PageWrapperSM = props => {

    const id = props.id;
    const name = props.name;
    const className = `app-page-wrapper ${props.className || ''}`;

    return (

        <div id={id}
            name={name}
            className={className}>
            <div className="app-page-content app-page-content-size-small">
                <PageReturnBtn></PageReturnBtn>
                {props.children}
            </div>
        </div>


    )
}

export default { PageWrapperSM, PageWrapperMD, PageWrapperLG };
