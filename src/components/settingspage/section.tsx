import { Settings } from "../../scripts/settings"

function Section(props: React.PropsWithChildren<{title: string}>){
    return <div style={{width: "100%", marginTop: 10, padding: 4, boxSizing: "border-box", backgroundColor: Settings.currentState.backgroundColorQuaternary, borderRadius: 8}}>
        <h1 style={{margin: "0px 0px 4px 0px"}}>{props.title}</h1>
        {props.children}
    </div>
}

export {Section}