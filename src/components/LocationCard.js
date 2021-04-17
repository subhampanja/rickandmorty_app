import React, { useState } from 'react'
import { Grid, Card, CardContent, Typography, Box, Dialog, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Resident from './Resident';
import "./main.css";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));


function LocationCard({ data }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [dataMain, setDataMain] = useState([])


    const locationClick = async (e) => {

        const residentsAll = []

        const residents = await fetch(`https://rickandmortyapi.com/api/location/${e}`)
            .then((res) => { return res.json() })

        residents.residents.map(async (resident) => {
            const residentSingle = await fetch(resident)
                .then((res) => { return res.json() })
            residentsAll.push(residentSingle)
        });
        setDataMain(residentsAll)

        setTimeout(function () { setOpen(true); }, 2000);
    };



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid item xs={3} onClick={() => locationClick(data.id)}  className="locationCard">
                <Box boxShadow={8}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Planet: {data.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>


            <Dialog fullScreen open={open} onClose={handleClose} >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Planet: {data.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={1}>
                    {
                        dataMain.map(dataRes => (

                            <Resident key={dataRes.id} data={dataRes} planet={data} />

                        ))
                    }
                </Grid>
            </Dialog>

        </>
    )
}



export default LocationCard
