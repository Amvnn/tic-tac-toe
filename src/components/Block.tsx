import React from "react";
import '../App.css';

interface BlockProps {
   value: string;
   onClick?: () => void;
}

const Block: React.FC<BlockProps>=(props)=>{
    return(
        <div onClick={props.onClick} className = "block">
            {props.value}
        </div>
    )
}

export default Block;