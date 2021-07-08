import React from "react";
import ReactModal from "react-modal";
import { SettingsPage } from "../components/settingspage/settingspage";

function Popup1(){
    return <ReactModal isOpen = {true} onAfterClose={()=>{}} onRequestClose={()=>{}} style={{content: {position: "absolute", inset: "50% 0% 0% 50%", width: 300, height: 200,  transform: "translate(-50%, -50%)"}, overlay: {position: "fixed", inset: 0, width: "100%", height: "100%"}}}>
            just shutup
    </ReactModal>
}


function PopupTest(){
    const [popups, setPopups] = React.useState<React.ReactElement[]>([])
    function AddPopup(element: React.ReactElement, callback: (close: ()=>void)=>void){
        setPopups([...popups, element])
        callback(()=>{

        })
    }
    return <>
        yes
        <div key="blur" style={{backdropFilter: "blur(5px)"}}></div>
        {popups}
    </>
}

export default PopupTest;