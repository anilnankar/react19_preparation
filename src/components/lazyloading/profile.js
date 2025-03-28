import React from 'react';

function Profile() {

    return (
        <div>
            My name is Anil Nankar.
            <br/>
            Current Time: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </div>
    );

}


export default Profile;