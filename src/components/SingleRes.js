import React, { useEffect, useState } from 'react';
import "./main.css";
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardActionArea, CardContent, Tooltip } from '@material-ui/core';
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom'
import { ArrowBackIos } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        maxWidth: 445,
    },
    media: {
        height: 5000,
    },
});

function SingleRes({ data }) {

    const classes = useStyles();
    let { id } = useParams();

    const [singleResData, setSingleResData] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const data = async () => {
            const singleRes = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then((res) => { return res.json() })

            setSingleResData(singleRes);
            setLoading(false);

        }

        data()
    }, [id])


    return (
        <>
            <Tooltip title="Back to Home">
                <Link to="/">
                    <ArrowBackIos />
                </Link>
            </Tooltip>
            <br />
            {
                loading ?
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                    :
                    <Grid container spacing={0}
                        direction="column"
                        alignItems="center"
                        style={{ minHeight: '100vh' }}>
                        <Grid item xs={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <img src={singleResData.image} alt={singleResData.name} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Name: {singleResData.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2" color={singleResData.status === 'Alive' ? 'Primary' : 'Secondary'}>
                                            Status: {singleResData.status}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Pecies: {singleResData.species}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Gender: {singleResData.gender}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Location: {singleResData.origin.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
            }
        </>
    )
}

export default SingleRes
