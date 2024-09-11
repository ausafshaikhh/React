import React from "react";
import './Block.css';
interface items{
   value: string;
   OnClick?: ()=>void;
}
const Block: React.FC<items> =(props) => {
    return <>
       <div onClick={props.OnClick} className="col">{props.value}</div>
    </>
};

export default Block;