import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import LocationCard from './LocationCard';
import {Helmet} from "react-helmet-async"

const Home = () => {

    const [allLocation, setAllLocation] = useState([]);

    useEffect(() => {
        const call = async () => {
            const allLocation = [];

            const pages = await fetch("https://rickandmortyapi.com/api/location")
                .then((res) => { return res.json() })
            const pageCount = pages.info.pages + 1;

            for (let i = 1; i < pageCount; i++) {
                const pages = await fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
                    .then((res) => { return res.json() })
                pages.results.map(location => allLocation.push(location))
            }
            setAllLocation(allLocation)
        }
        call()

    }, [])

    return (
        <>
            <Helmet>
                <title>Rick and Marty Application</title>
            </Helmet>
            
            <Grid container spacing={1}>
                {
                    allLocation.map(location => (
                        <LocationCard key={location.id} data={location} />
                    ))
                }
            </Grid>
        </>
    );
}

export default Home;
