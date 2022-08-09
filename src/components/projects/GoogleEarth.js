import { Button, Grid, Paper, Typography } from "@mui/material"


export const GoogleEarth = () => {


    return (
        <>

            <Grid padding={1} container xs={12} height={"80vh"}>
                <Paper style={{ width: "100%", height: "100%" }} elevation={5}>



                    <Grid container xs={12} justifyContent={"center"}>



                        <Grid item xs={12} md={6}>
                            <img src="https://sat02pap002files.storage.live.com/y4md_zdEV-VGC_j7c5U5RTpN09EWDv0j3tXtPRCTP442Pr_KMcD4hgA-eMfOeUPJaZqyANxxMW9wiVxjgfnLrgMpvQzkq5ypph_Ul9OSpGuCwVsRWnJHc_ve_Hg6yLclFdHIIr1G6y6DGa8q-gOo5v3tbx0Lf7gIgVKkhbuoc7dfjo2WpjJyn9wi7st4wYteGbQ?width=936&height=608&cropmode=none" />
                        </Grid>

                        <Grid item xs={12}>
                            <h3>Google Earth</h3>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography>
                                I created the website you are currently reading.  During development, I learned Material UI on the front end and used Python and Django to manage feedback responses on the backend.
                            </Typography>
                        </Grid>

                        <Grid container xs={12} justifyContent={"space-around"}>

                            <Grid item xs={12} md={4}>
                                <Button>See on Github</Button>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Button>Go to website</Button>
                            </Grid>

                        </Grid>



                    </Grid>



                </Paper>
            </Grid>


        </>
    )
}