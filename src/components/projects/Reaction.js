import { Button, Grid, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"


export const Reaction = () => {


    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>

            <Grid container padding={1} xs={12} height={"100%"}>
                <Paper style={{ width: "100%", height: "90%", padding: 5 }} elevation={5}>



                    <Grid container xs={12}>



                        <Grid item xs={12} md={6}>
                            <img src="https://sat02pap002files.storage.live.com/y4mhwsHA_DluTrsnguHxST34OatqRaTzluDl9xFqdmUXrbRmkpKUiez4UKzOQQYVg8a1SCdFYdaAKv94I7mVekzK_5sJTt2tPL5aSNcYCI4q3zGkaa76uAmq8Pk_azi1thf6dm-yb14Vve1BJTdd9I9E_RxKPNu_6AD386sK7bPXFa5W9iCyHRBWEFOUZffV78K?width=936&height=526&cropmode=none" />
                        </Grid>

                        <Grid container xs={12} md={6} justifyContent={"center"}>
                            <Grid item xs={12} alignContent={"center"}>
                                <h3>Reaction</h3>
                            </Grid>



                            <Grid item xs={12}>
                                <Typography>
                                    Managing real estate pipelines can be a hassle for real estate professionals. Reaction allows users to manage pipeline data and visualize projects geographically
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    <ul>
                                        <li>Multipage CRUD app allowing users to add, create, modify, and delete multifamily, office, and industrial properties</li>
                                        <li>Google Maps API and Charts.js used to dynamically view and filter properties and data by attributes</li>
                                    </ul>
                                </Typography>
                            </Grid>

                            <Grid container xs={12} justifyContent={"space-around"}>



                                <Grid item xs={6} md={4}>
                                    <Button
                                        onClick={() => openInNewTab("https://reaction-client.herokuapp.com/login")}
                                    >Website (use "wilbur@wilbur.com" as username)</Button>

                                </Grid>

                                <Grid item xs={6} md={4}>
                                    <Button
                                        onClick={() => openInNewTab("https://github.com/wwardrop3/capstone-reaction")}
                                    >GitHub</Button>

                                </Grid>

                            </Grid>
                        </Grid>


                    </Grid>



                </Paper>
            </Grid>


        </>
    )
}