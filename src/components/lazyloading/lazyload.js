import {useState, Suspense, lazy} from "react";
import ContentSection from "../utils/contentsection";

const Profile = lazy(() => import("./profile")); // Lazy load profile
const Video = lazy(() => import("./video")); // Lazy Load video

function LazyLoad() {

    const [showProfile, setShowProfile] = useState(false);
    const [refreshCount, setRefreshCount] = useState(0); // Key to force re-render
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <div className="app-container">
            <ContentSection title="Lazy Load Profile" tooltip="">
                <button onClick={()=>setShowProfile(true)} className="">Load Profile</button>
                <br/>
                <br/>
                {showProfile && (
                    <>
                        <Suspense fallback={<h2>Profile is loading...</h2>}>
                            <Profile refreshKey={refreshCount} />
                        </Suspense>
                        <button onClick={() => setRefreshCount(prevCount => prevCount + 1)} className="secondary">
                            Refresh Profile
                        </button>
                    </>
                    )
                }
            </ContentSection>

            <ContentSection title="Lazy Loading ReactPlayer" tooltip="">
                <button onClick={() => setShowPlayer(true)}>Load Video</button>
                <br/>
                <br/>
                {showPlayer && (
                    <Suspense fallback={<h2>Loading Video...</h2>}>
                        <Video />
                    </Suspense>
                )}
            </ContentSection>
        </div>
    );

}

export default LazyLoad;