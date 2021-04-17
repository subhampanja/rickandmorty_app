import { Grid } from '@material-ui/core'
import React from 'react'
import "./main.css"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

function Resident({ data, planet }) {
    return (
        <>
            <Helmet>
                <title>{planet.name}</title>
            </Helmet>
            <Grid item xs={3}>
                <Link to={`/singleres/${data.id}`}>
                    <img src={data.image} alt={data.name} className="resident" />
                </Link>
                <h4>NAME: {data.name}</h4>
                <h4>STATUS: <span style={{ color: `${data.status === 'Alive' ? 'green' : data.status === 'unknown' ? 'blue' : 'red'}` }}>{data.status}</span></h4>
            </Grid>

        </>
    )
}

export default Resident
