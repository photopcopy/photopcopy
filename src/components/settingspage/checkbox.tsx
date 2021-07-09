import { useState } from "react";
import { Settings } from "../../modules/settings";

function Checkbox<items extends string[]>(props: {items: items, default: {[k: number]: true}, updated: (current: {[k: number]: boolean})=>void}){
    const map: {[s: number]: boolean} = {};
    props.items.forEach((_, index)=>{
        map[index] = props.default[index] || false;
    })

    const [current, setCurrent] = useState(map);
    const [nonce, update] = useState(0);
    return <div>
        {
            props.items.map((value, index)=>{
                return <div key={index} style={{display: "flex", marginTop: 4}} title={value}>
                    <div onClick={()=>{
                        current[index] = !current[index];
                        props.updated(current)
                        update(nonce+1)
                        
                    }} style={{position:"relative", cursor:"pointer", display: "inline-block", width: 30, height: 30, backgroundColor: Settings.currentState.backgroundColorSecondary}}>
                        <div style={{width: current[index]?"calc(100% - 10px)":"0%", height: current[index]?"calc(100% - 10px)":"0%", opacity: current[index]?1:0 ,left: "50%", top: "50%", transform: "translate(-50%, -50%)", position: "absolute", transition: "opacity .2s, width .2s, height .2s", backgroundColor: Settings.currentState.accentColor}}/>
                    </div>
                    <div style={{width: "100%", position:"relative"}}><div style={{position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", overflow: "hidden", width: "calc(100% - 5px)", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{value}</div></div>
                </div>
            })
        }
    </div>
}

export {Checkbox}