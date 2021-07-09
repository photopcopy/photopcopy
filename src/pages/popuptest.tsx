import React from "react";
import ReactModal from "react-modal";

function Popup1(props: {onRequestClose: ()=>void}){
    return <ReactModal isOpen = {true} onAfterClose={()=>{}} onRequestClose={()=>{}} style={{content: {position: "absolute", inset: "50% 0% 0% 50%", width: 300, height: 200,  transform: "translate(-50%, -50%)"}, overlay: {position: "fixed", inset: 0, width: "100%", height: "100%"}}}>
            <button onClick={()=>{
                props.onRequestClose();
            }}>Close</button>
    </ReactModal>
}


function PopupTest(){
    const [popups, setPopups] = React.useState<React.ReactElement[]>([
        <Popup1 onRequestClose={()=>{}}/>
    ])
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