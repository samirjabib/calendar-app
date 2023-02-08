import { useState } from "react";
import { ClipLoader, PropagateLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useEffect } from "react";

export const Spinner = ({status}) => {

    let [ loading, setLoading] = useState(true);


    const override = css`
        display:block;
        margin:0 auto;
        border-color:blue;

    
    `

    useEffect(() => {
        if( status === "checking"){
            setLoading(true);
        } else {
            setLoading(false);
        }
    },[]);

    return(
        <div className="w-full h-screen display flex items-center justify-center">
            <PropagateLoader loading={loading} css={override} size={15}/>
        </div>
    )
}