import React from 'react';
import { BeatLoader} from 'react-spinners';

import {css} from '@emotion/react';

const classLoaderNormal = css`
    margin-top: 10px;
    margin-bottom: 10px;
`
const classLoaderCenter = css`
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const LoadingPage = props  =>  {
 
    const css = props.css === undefined ? classLoaderNormal : props.css === "classLoaderCenter" ? classLoaderCenter : classLoaderNormal;
    const color = props.color === undefined ? "#59534C" : props.color;
    const size  = props.size === undefined ? 20 : props.size;
   
    return(
        <div>                            
            <BeatLoader 
                css={css}
                size={size}
                color={color} 
                loading   
            />                            
        </div>
    );
}

export default LoadingPage;