import { Button, Grid, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"


export const Hitch = () => {


    // const openInNewTab = url => {
    //     window.open(url, '_blank', 'noopener,noreferrer');
    // };

    return (
        <>

            <Grid container padding={1} xs={12} height={"100%"}>
                <Paper style={{ width: "100%", height: "90%", padding: 5 }} elevation={5}>



                    <Grid container xs={12}>



                        <Grid item xs={12} md={6}>
                            <img src="https://sat02pap002files.storage.live.com/y4mIDQk5BbRtNM9wyC4lNgHtzyo9pKjwZ58KvZUEaam3WzH0dAr04FH-0ZW1qXzBoc4Nu7eF0cZd5LMctiR7hVif_pfr3QKdAysAQLcmianI35KNMkqSFo8lCvO__JQM3ZCp666O60KGlwhB17x7T7uOjh70MLoNE6NXATM2OtTCAX4yoDaTh-yrFLCkKDz5fsA?width=936&height=524&cropmode=none" />
                        </Grid>

                        <Grid container xs={12} md={6} justifyContent={"center"}>
                            <Grid item xs={12} alignContent={"center"}>
                                <h3>Hitch</h3>
                            </Grid>



                            <Grid item xs={12}>
                                <Typography>
                                    I created the website you are currently reading.  During development, I learned Material UI on the front end and used Python and Django to manage feedback responses on the backend.
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    <ul>
                                        <li>Multipage CRUD app allowing users to add, create, modify, and delete trips</li>
                                        <li>Google Maps API used to dynamically view and filter nearby trips by how far driver is willing to detour to pick up passenger</li>
                                    </ul>
                                </Typography>
                            </Grid>

                            <Grid container xs={12} justifyContent={"space-around"}>



                                {/* <Grid item xs={6} md={4}>
                                    <Button
                                        onClick={() => openInNewTab("https://github.com/wwardrop3/hitch_be_capstone_client")}
                                    >Download KML Example</Button>

                                </Grid>

                                <Grid item xs={6} md={4}>
                                    <Button
                                        onClick={() => openInNewTab("https://github.com/wwardrop3/hitch_be_capstone_client")}
                                    >Download KML Example</Button>

                                </Grid> */}

                            </Grid>
                        </Grid>


                    </Grid>



                </Paper>
            </Grid>


        </>
    )
}