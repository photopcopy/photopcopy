import React, { createRef, useRef, useState } from "react"
import { Settings } from "../scripts/settings"
import { Icon } from "./icon"
import { TabButton } from "./tabbutton"

enum PageTypes {
    Account,
    Appearance,
    Privacy
}

function SettingsPage(){
    const [page, setPage] = useState<PageTypes>(PageTypes.Account)
    const [changesMade, updateChangesmade] = useState(false)
    const [closed, setClosed] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    return <div key="settingsMenu" ref={ref} style={{ opacity: closed?0:1, width: '100%', height: '100%', backgroundColor: Settings.currentState.backgroundColorSecondary, borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'opacity .5s' }}>
    <div key="topbar" style={{ userSelect: 'none', width: '100%', height: 60, display: 'flex', alignItems: 'center', boxSizing: 'border-box', padding: 10, backgroundColor: Settings.currentState.backgroundColorTertiary, borderBottom: `solid ${Settings.currentState.backgroundColorQuaternary}` }}>
        <div style={{ width: '100%', height: '100%', fontSize: 40 }}>Settings</div>
        <div key="topbarRight" style={{ float: 'right' }}><Icon onClick={()=>{
            if (!closed) {
                setClosed(true)
                setTimeout(function(){
                    if (ref.current) {
                        //too lazy lmfao
                        ref.current.style.display = "none";
                    }
                }, 500)
            }
        }} type="close"></Icon></div>
    </div>
    <div key="body" style={{width:'100%', height: '100%', display:"flex"}}>
        <div key="sidebar" style={{ width: 150, height: '100%', backgroundColor: Settings.currentState.backgroundColorTertiary, borderRight: `solid ${Settings.currentState.backgroundColorQuaternary}`}}>
            {<>
                <TabButton self={PageTypes.Account} current={page} onClick={()=>{
                    setPage(PageTypes.Account)
                }}>Account</TabButton>
                <TabButton self={PageTypes.Appearance} current={page} onClick={()=>{
                    setPage(PageTypes.Appearance)
                }}>Appearance</TabButton>
                <TabButton self={PageTypes.Privacy} current={page} onClick={()=>{
                    setPage(PageTypes.Privacy)
                }}>Privacy</TabButton>
            </>}
        </div>
        <div key="content" style={{width: "100%", height: "100%"}}>
                
        </div>
    </div>
    <button style={{display:changesMade?"unset":"none", position: "absolute", boxShadow:"0 8px 16px rgba(0,0,0,0.44)", bottom: 10, right: 10, height: 30, fontSize:25, backgroundColor: Settings.currentState.accentColor, borderRadius: 8, border:"none", cursor:"pointer", color:Settings.currentState.textColor}}>
                Save
    </button>
</div>
}

export {SettingsPage, PageTypes}