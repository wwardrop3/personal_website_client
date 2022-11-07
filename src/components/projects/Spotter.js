import { Button, Grid, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"


export const Spotter = () => {


    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>

            <Grid container padding={1} xs={12} height={"100%"}>
                <Paper style={{ width: "100%", height: "90%", padding: 5 }} elevation={5}>



                    <Grid container xs={12}>



                        <Grid item xs={12} md={6}>
                            <img src="https://academics.otc.edu/media/uploads/sites/49/2022/06/page-under-construction-icon.jpg" />
                        </Grid>

                        <Grid container xs={12} md={6} justifyContent={"center"}>
                            <Grid item xs={12} alignContent={"center"}>
                                <h3>Spotter (under construction)</h3>
                            </Grid>



                            <Grid item xs={12}>
                                <Typography>
                                    I am currently working on a workout application that allows users to create and store workout plans with exercises specifically tailored to the equipment available. Users can save individual workout session stats and share workout plans with other users.
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    <ul>
                                        <li>Filter exercises by the equipment the user has available</li>
                                        <li>Search other user workout plans if the other user has made their plan public</li>
                                        <li>Store session and exercise stats to view later to see progress over time</li>
                                    </ul>
                                </Typography>
                            </Grid>

                            <Grid container xs={12} justifyContent={"space-around"}>



                                <Grid item xs={6} md={4}>
                                    <Button
                                        onClick={() => openInNewTab("https://github.com/wwardrop3/spotter_client")}
                                    >GitHub - Client</Button>
                                </Grid>

                                <Grid item xs={6} md={4}>
                                    <Button
                                        onClick={() => openInNewTab("https://github.com/wwardrop3/spotter_server")}
                                    >GitHub - Server</Button>
                                </Grid>

                            </Grid>
                        </Grid>


                    </Grid>



                </Paper>
            </Grid>


        </>
    )
}