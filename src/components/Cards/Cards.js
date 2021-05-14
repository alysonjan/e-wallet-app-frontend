import React, { useEffect, useState } from 'react'
import * as c from './Cards.elements';
import { Button } from '../Global/Global'
import axiosInstance from '../../helpers/axios'

const Cards = ({ productData }) => {

    const [bal, setBal] = useState([])

    useEffect(() => {
        axiosInstance.get('/api/wallet').then((response) => {
            let res = response.data[0].balance
            setBal(res)
        })
    },[setBal])


    const buyHandler = (price,bal) => {

        if (price <= bal){
            let newbal = bal-price
            alert('You successfully buy this Item')
            updateBalance(newbal);
        }else{
            alert("Insufficient balance")
        }
    }

    const updateBalance = (nb) => {
        axiosInstance.post('api/wallet/balance', {
            newBalance : nb
        }).then((response) => {
            if (response.status === 200) {
                alert('balance updated!')
                console.log(response.data)
            }else{
                console.log(response)
            }
        })
    }




    return (
        <>
            {productData.map((val) => {
                    return (
                        <c.CardContainer key={val.id}>
                            <c.CardWrapper>
                                <c.Cards>
                                    <c.CardImage src={val.imageurl} />
                                    <c.CardTitle>{val.title}</c.CardTitle>
                                    <c.CardPrice>&#8369;{val.price}</c.CardPrice>
                                    <c.CardDescription>{val.description}</c.CardDescription>

                                    <Button onClick={() => buyHandler(val.price,bal)}>Buy</Button>
                                </c.Cards>
                            </c.CardWrapper>
                        </c.CardContainer>
                    )
                })
            }
        </>
    )
}

export default Cards
