import { AppContext } from '../context/provider'
import React, { useContext } from 'react'

function Networks() {
    const { network, changeNetwork } = useContext(AppContext);

    return (
        <div className="network-container flex justify-between">
            <div className="network-wrapper flex flex-col items-center gap-4" >
                <div className={`${network == "mtn" && "active-network"} single-network w-16 h-16 rounded flex justify-center items-center`} onClick={() => changeNetwork("mtn")}>
                </div>
                <label>MTN</label>
            </div>
            <div className="network-wrapper flex flex-col items-center gap-4">
                <div className={`${network == "airtel" && "active-network"} single-network w-16 h-16 rounded flex justify-center items-center`} onClick={() => changeNetwork("airtel")}>
                </div>
                <label>Airtel</label>
            </div>
            <div className="network-wrapper flex flex-col items-center gap-4">
                <div className={`${network == "glo" && "active-network"} single-network w-16 h-16 rounded flex justify-center items-center`} onClick={() => changeNetwork("glo")}>
                </div>
                <label>Glo</label>
            </div>
            <div className="network-wrapper flex flex-col items-center gap-4">
                <div className={`${network == "etisalat" && "active-network"} single-network w-16 h-16 rounded flex justify-center items-center`} onClick={() => changeNetwork("etisalat")}>
                </div>
                <label>Etisalat</label>
            </div>
        </div>
    )
}

export default Networks
