import React from 'react'
import * as w from './WalletCard.elements';


const WalletCard = ({balance}) => {

    return (
        <>
        {balance.map((val)=> {
            return (
        <w.WalletCard key={val.id}>
            <w.WalletBalance>Balance: &#8369;{val.balance.toFixed(2)}</w.WalletBalance>
        </w.WalletCard>
        )
        })}
        </>
    )
}

export default WalletCard
