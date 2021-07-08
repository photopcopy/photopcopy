import React, { useRef, useState } from "react"
import { Settings } from "../../scripts/settings"
import { Icon } from "../icon"
import { AccentOption } from "./accentoption"
import { Checkbox } from "./checkbox"
import { Page } from "./page"
import { RadioSelection } from "./radioselection"
import { Section } from "./section"
import { TabButton } from "./tabbutton"

enum PageTypes {
    Account,
    Appearance,
    Privacy,
    Sessions
}


function SettingsPage(props:{ getClosedSetter:(callback: (value: boolean)=>void)=>void, onClosed: ()=>void}) {

    const [page, setPage] = useState<PageTypes>(PageTypes.Account)
    const [changesMade, updateChangesmade] = useState(false)
    const [closed, setClosed] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    props.getClosedSetter((value)=>{
        setClosed(value)
    })

    return <div key="settingsMenu"  style={{ opacity: closed?0:1, position: "absolute", transform: "translate(-50%, -50%)", left: "50%", top: "50%", width: '500px', height: '400px', backgroundColor: Settings.currentState.backgroundColorSecondary, borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'opacity .5s' }}>
    <div key="topbar" style={{ userSelect: 'none', width: '100%', height: 60, display: 'flex', alignItems: 'center', boxSizing: 'border-box', padding: 10, backgroundColor: Settings.currentState.backgroundColorTertiary, borderBottom: `solid ${Settings.currentState.backgroundColorQuaternary}` }}>
        <div style={{ width: '100%', height: '100%', fontSize: 40 }}>Settings</div>
        <div key="topbarRight" style={{ float: 'right' }}><Icon onClick={()=>{
            if (!closed) {
                props.onClosed();
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
    <div key="body" style={{width:'100%', height: '100%', display:"flex", overflow:"hidden"}}>
        <div key="sidebar" style={{ minWidth: 150, width: 150, padding: 5, borderTopRightRadius: 8, height: '100%', backgroundColor: Settings.currentState.backgroundColorQuaternary, borderRight: `solid ${Settings.currentState.backgroundColor}`}}>
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
                <TabButton self={PageTypes.Sessions} current={page} onClick={()=>{
                    setPage(PageTypes.Sessions)
                }}>Sessions</TabButton>
            </>}
        </div>
        <div key = "contentContainer" style={{position:"relative", width: "100%", height: "100%"}}>
                <Page self={PageTypes.Account} current={page}>
                   <Section title="Account">
                        <div style={{display:"flex"}}><span>Username:</span><span style={{margin: "0px 5px", display: "inline-block", overflow:"hidden", maxWidth: 120, textOverflow: "ellipsis"}}>Photopcopy</span>
                        <button style={{float: "right", margin: 0, border: "none", cursor:"pointer", color: Settings.currentState.textColor, backgroundColor: Settings.currentState.accentColor}}>Edit</button></div>
                        Password
                   </Section>
                </Page>
                <Page self={PageTypes.Appearance} current={page}>
                    <Section title="Theme">
                        <RadioSelection items={["Light Mode", "Dark Mode"]} default={1} updated={(value)=>{
                            switch (value){
                                case 0:
                                    Settings.set("theme", "lightMode"); break;
                                case 1:
                                    Settings.set("theme", "darkMode"); break;
                            }
                        }}/>
                    </Section>
                    <Section title="Accent Color">
                        <AccentOption color="red"/>
                        <AccentOption color="orange"/>
                        <AccentOption color="yellow"/>
                        <AccentOption color="#00FF00"/>
                        <AccentOption color="#5ab7fa"/>
                        <AccentOption color="purple"/>
                    </Section>
                    <Section title="Embeds">
                        <span style={{fontSize: 12, color: Settings.currentState.textColorSecondary}}>Embeds are from 3rd party sites - which could track you or slow down your browser.</span>
                        <Checkbox items={["Embed YouTube Videos", "Embed Twitch Streams", "Embed Twitch Live Chat", "Embed Scratch Games", "Embed code.org Projects"]} default={{0:true,1:true,2:true}} updated={()=>{}}/>
                    </Section>
                </Page>
                <Page self={PageTypes.Privacy} current={page}>
                    <Section title="Blocked Users">
                        To be added
                    </Section>

                </Page>
                <Page self={PageTypes.Sessions} current={page}>
                    <Section title="Active Sessions">
                        <button style={{borderRadius: 4, backgroundColor: Settings.currentState.accentColor, width: "100%", padding: 4, boxSizing: "border-box", border:"none", cursor: "pointer", color:Settings.currentState.textColor}}>Sign Out Of All Sessions</button>
                    </Section>
                </Page>
        </div>
    </div>
    <button style={{display:changesMade?"unset":"none", position: "absolute", boxShadow:"0 8px 16px rgba(0,0,0,0.44)", bottom: 10, right: 10, height: 30, fontSize:25, backgroundColor: Settings.currentState.accentColor, borderRadius: 8, border:"none", cursor:"pointer", color:Settings.currentState.textColor}}>
                Save
    </button>
</div>
}

export {SettingsPage, PageTypes}