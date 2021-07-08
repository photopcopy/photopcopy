import { Settings } from "../scripts/settings"

function Post(props: {postId: string}){
    return <div key={props.postId} style={{backgroundColor: Settings.currentState.backgroundColorTertiary, borderRadius: 8, minHeight: 100, display:"flex"}}>
        <div key="contentContainer" style={{minWidth: 300}}>
            <div key="postDataContainer" style={{margin: 6, width: "100%", height: 50, display:"flex"}}>
                <img src="https://storage.googleapis.com/parcel-7d05a.appspot.com/ProfileImages/DefaultProfilePic" style={{paddingRight:"100%", height: "100%"}}/>

            </div>
        </div>
        <div key="chatContainer" style={{width: "100%", margin: 6, backgroundColor: Settings.currentState.backgroundColorSecondary, borderRadius: 8}}>THIS</div>
    </div>
}

export {Post}