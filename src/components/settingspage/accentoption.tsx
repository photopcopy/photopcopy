import { Settings } from "../../modules/settings"

function AccentOption(props: {color: string}){
    return <button style={{backgroundColor: props.color, width: 30, height: 30, margin: 2, cursor: "pointer"}} onClick={()=>{
        Settings.set("accent", props.color)
    }}></button>
}

export {AccentOption}