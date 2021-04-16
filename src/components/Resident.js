import { Grid } from '@material-ui/core'
import React from 'react'

function Resident({ data }) {
    return (
        <>
            <Grid item xs={3}>
                <img src={data.image} alt={data.name} />
                <h4>NAME: {data.name}</h4>
                <h4>SPECIES: {data.species}</h4>
                <h4>GENDER: {data.gender}</h4>
                <h4>LOCATION: {data.location.name}</h4>
                <h4>NAME: {data.name}</h4>
                <h4>STATUS: <span style={{color: `${data.status === 'Alive' ? 'green' : data.status === 'unknown' ? 'blue' : 'red'}`}}>{data.status}</span></h4>
            </Grid>

        </>
    )
}

export default Resident
