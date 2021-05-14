import React, {useState,useEffect} from 'react'
import * as w from './WalletPage.elements';
import axiosInstance from '../../helpers/axios'
import { WalletCard } from '../../components';



const WalletPage = () => {

    const [balance, setBalance] = useState([])


    useEffect(() => {
        axiosInstance.get('/api/wallet').then((response) => {
            setBalance(response.data)
        })
    },[setBalance])


    return (
        <>
        <w.WalletContainer>
            <w.WalletWrapper>
                <WalletCard balance={balance} />
            </w.WalletWrapper>
        </w.WalletContainer>  
        </>
    )
}

export default WalletPage

