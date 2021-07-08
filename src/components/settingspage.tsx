import React, { createRef, memo, useMemo, useRef, useState } from "react"
import { Settings } from "../scripts/settings"
import { Icon } from "./icon"
import { TabButton } from "./tabbutton"

enum PageTypes {
    Account,
    Appearance,
    Privacy
}

function RadioSelection(props: {items: string[], default: number, updated: (current: number)=>void}){
    const [current, setCurrent] = useState(props.default);
    return <div>
        {
            props.items.map((value, index)=>{
                return <div style={{display: "flex", marginTop: 4}}>
                    <div onClick={()=>{
                        setCurrent(index)
                        props.updated(index)
                    }} style={{position:"relative", cursor:"pointer", display: "inline-block", width: 20, height: 20, padding: 5, backgroundColor: Settings.currentState.backgroundColorSecondary, borderRadius: "100%"}}>
                        <div style={{borderRadius: "100%", width: current===index?"calc(100% - 10px)":"0%", height: current===index?"calc(100% - 10px)":"0%", opacity: current===index?1:0 ,left: "50%", top: "50%", transform: "translate(-50%, -50%)", position: "absolute", transition: "opacity .2s, width .2s, height .2s", backgroundColor: Settings.currentState.accentColor}}/>
                    </div>
                    <div style={{width: "100%", position:"relative"}}><div style={{position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)"}}>{value}</div></div>
                </div>
            })
        }
    </div>
}

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
                return <div style={{display: "flex", marginTop: 4}}>
                    <div onClick={()=>{
                        current[index] = !current[index];
                        props.updated(current)
                        update(nonce+1)
                        
                    }} style={{position:"relative", cursor:"pointer", display: "inline-block", width: 30, height: 30, backgroundColor: Settings.currentState.backgroundColorSecondary}}>
                        <div style={{width: current[index]?"calc(100% - 10px)":"0%", height: current[index]?"calc(100% - 10px)":"0%", opacity: current[index]?1:0 ,left: "50%", top: "50%", transform: "translate(-50%, -50%)", position: "absolute", transition: "opacity .2s, width .2s, height .2s", backgroundColor: Settings.currentState.accentColor}}/>
                    </div>
                    <div style={{width: "100%", position:"relative"}}><div style={{position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)"}}>{value}</div></div>
                </div>
            })
        }
    </div>
}

function Section(props: React.PropsWithChildren<{title: string}>){
    return <div style={{width: "100%", marginTop: 10, padding: 4, boxSizing: "border-box", backgroundColor: Settings.currentState.backgroundColorQuaternary, borderRadius: 8}}>
        <h1 style={{margin: 0}}>{props.title}</h1>
        {props.children}
    </div>
}

function Page(props: React.PropsWithChildren<{self: PageTypes, current: PageTypes}>){
    return  <div style={{display:props.self===props.current?"flex":"none", flexDirection:"column", width: "100%", height: "100%"}}>
        {props.children}
    </div>
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
            </>}
        </div>
        <div key = "contentContainer" className="scroll" style={{width: "100%", height: "100%", padding: 8, boxSizing: "border-box", overflow:"auto"}}>
        <div key="content" style={{width: "100%",  borderRadius: 8, padding: "0px 8px", backgroundColor: Settings.currentState.backgroundColorTertiary, boxSizing: "border-box"}}>
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
                    <Section title="Embeds">
                        <span style={{fontSize: 12, color: Settings.currentState.textColorSecondary}}>Embeds are from 3rd party sites - which could track you or slow down your browser.</span>
                        <Checkbox items={["Embed YouTube Videos", "Embed Twitch Streams", "Embed Twitch Live Chat", "Embed Scratch Games", "Embed code.org Projects"]} default={{0:true,1:true,2:true}} updated={()=>{}}/>
                    </Section>
                </Page>
        </div>
        </div>
    </div>
    <button style={{display:changesMade?"unset":"none", position: "absolute", boxShadow:"0 8px 16px rgba(0,0,0,0.44)", bottom: 10, right: 10, height: 30, fontSize:25, backgroundColor: Settings.currentState.accentColor, borderRadius: 8, border:"none", cursor:"pointer", color:Settings.currentState.textColor}}>
                Save
    </button>
</div>
}

export {SettingsPage, PageTypes}