import { Button, Grid, Paper, Typography } from "@mui/material"


export const Reaction = () => {


    return (
        <>

            <Grid padding={1} container xs={6} md={6}>
                <Paper style={{ height: "100%", width: "100%" }} elevation={5}>
                    <Grid container>


                        <Grid container xs={12}>



                            <Grid item>
                                <img src="https://sat02pap002files.storage.live.com/y4mIDQk5BbRtNM9wyC4lNgHtzyo9pKjwZ58KvZUEaam3WzH0dAr04FH-0ZW1qXzBoc4Nu7eF0cZd5LMctiR7hVif_pfr3QKdAysAQLcmianI35KNMkqSFo8lCvO__JQM3ZCp666O60KGlwhB17x7T7uOjh70MLoNE6NXATM2OtTCAX4yoDaTh-yrFLCkKDz5fsA?width=936&height=524&cropmode=none" />
                            </Grid>

                            <Grid item xs={12}>
                                <h3>Reaction</h3>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    Hitch reinvents the lost pastime of hitchhiking for the modern world. The app allows drivers with extra room in their car, to connect with passengers seeking inexpensive transportation.
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

                    </Grid>

                </Paper>
            </Grid>


        </>
    )
}