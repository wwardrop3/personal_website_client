import { Button, Grid, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"


export const GoogleEarth = () => {


    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>

            <Grid container padding={1} xs={12} height={"100%"}>
                <Paper style={{ width: "100%", height: "90%", padding: 5 }} elevation={5}>



                    <Grid container xs={12}>



                        <Grid item xs={12} md={6}>
                            <img src="https://sat02pap002files.storage.live.com/y4md_zdEV-VGC_j7c5U5RTpN09EWDv0j3tXtPRCTP442Pr_KMcD4hgA-eMfOeUPJaZqyANxxMW9wiVxjgfnLrgMpvQzkq5ypph_Ul9OSpGuCwVsRWnJHc_ve_Hg6yLclFdHIIr1G6y6DGa8q-gOo5v3tbx0Lf7gIgVKkhbuoc7dfjo2WpjJyn9wi7st4wYteGbQ?width=936&height=608&cropmode=none" />
                        </Grid>

                        <Grid container xs={12} md={6} justifyContent={"center"}>
                            <Grid item xs={12} alignContent={"center"}>
                                <h3>Google Earth</h3>
                            </Grid>



                            <Grid item xs={12}>
                                <Typography>
                                    I created the website you are currently reading.  During development, I learned Material UI on the front end and used Python and Django to manage feedback responses on the backend.
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    <ul>
                                        <li>Auto updating KML link to track Nashville Developments</li>
                                        <li>Created 3D realistic Collada models of future buildings</li>
                                        <li>Utilized HTML and CSS to create dynamic labels with information from Google Sheet</li>
                                    </ul>
                                </Typography>
                            </Grid>


                        </Grid>


                    </Grid>



                </Paper>
            </Grid>


        </>
    )
}