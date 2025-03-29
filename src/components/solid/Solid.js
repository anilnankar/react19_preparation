import React from 'react';
import Srp from './srp/Srp';
import Ocp from './ocp/Ocp';
import Lsp from './lsp/Lsp';
import Isp from './isp/Isp';
import Dip from './dip/Dip';

function Solid() {
    
    return (
        <div className="app-container">
            <Srp />
            <Ocp />
            <Lsp />
            <Isp />
            <Dip />
        </div>
    );
}

export default Solid;