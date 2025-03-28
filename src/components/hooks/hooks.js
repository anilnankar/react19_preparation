import React, {useState, useEffect} from 'react';
import UseState from './usestate';
import UseEffect from './useeffect';
import UseRef from './useref';
import UseReducer from './usereducer';
import UseMemo from './usememo';
import UseCallback from './usecallback';
import CustomHooks from './customhooks';

function Hooks() {
    return (
        <div className="app-container">
            <UseState />

            <UseEffect />    

            <UseRef />

            <UseReducer />
            
            <UseMemo />

            <UseCallback />

            <CustomHooks />
        </div>
    );
}

export default Hooks;