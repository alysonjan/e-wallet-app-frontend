import React, { useEffect, useState } from 'react'
import { Cards } from '../../components'
import axiosInstance from '../../helpers/axios'
import { HomePageContainer, CardsContainer, CardsColContainer } from '../Homepage/Homepage.elements'

const Homepage = () => {

    const [productlist, setProductlist] = useState([])


    useEffect(() => {
        axiosInstance.get('/api/product').then((response) => {
            setProductlist(response.data)
        })
    }, [setProductlist])

    return (
        <>
            <HomePageContainer>
                <CardsContainer>

                    <CardsColContainer>
                        <Cards productData={productlist} />
                    </CardsColContainer>

                </CardsContainer>
            </HomePageContainer>
        </>
    )
}

export default Homepage
