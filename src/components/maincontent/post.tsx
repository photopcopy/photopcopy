import { Settings } from "../../modules/settings"
import PostStyle from "../../styles/post.module.css"

function Post(props: {postId: string}){
    return <div key={props.postId} style={{backgroundColor: Settings.currentState.backgroundColorTertiary, borderRadius: 8, minHeight: 100, display:"flex"}}>
        <div key="contentContainer" style={{minWidth: 300, width: "70%", maxWidth: 500}}>
            <div key="postDataContainer" style={{margin: 6, width: "calc(100% - 12px)", borderRadius: 4, padding: 4, boxSizing: "border-box", height: 40, display:"flex", alignItems: "center", backgroundColor: Settings.currentState.backgroundColorSecondary}}>
                <img src="./assets/DefaultProfilePic.svg" style={{height: "100%"}}/>
                <span style={{fontSize:25, marginLeft: 5}}>Developer</span>
            </div>
        </div>
        <div key="chatContainer" className={PostStyle.post} style={{width: "70%", margin: 6, backgroundColor: Settings.currentState.backgroundColorSecondary, borderRadius: 8}}>THIS</div>
    </div>
}

export {Post}