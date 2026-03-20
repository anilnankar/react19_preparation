import React from 'react';

function Profile({refreshKey}) {

    return (
        <div>
            My name is Anil Nankar.
            <br/>
            Profile refresh count = {refreshKey}
            <br/>
            Current Time: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </div>
    );

}


export default Profile;