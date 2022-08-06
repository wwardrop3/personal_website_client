import { Grid, Paper } from "@mui/material"



export const Education = () => {

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <h2>Education</h2>

                </Grid>

                <Grid container xs={12} height={"70vh"} padding={1} justifyContent={"space-around"}>
                    <Grid item xs={12} md={5}>
                        <Paper style={{ height: "100%" }} elevation={10}>
                            NSS
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Paper style={{ height: "100%", objectFit: "center", backgroundImage: "url(https://dlyv80df02r89.cloudfront.net/images/2020/9/10/GS_M_Web.jpg)" }} elevation={10}>
                            University of Minnesota
                        </Paper>
                    </Grid>
                </Grid>





            </Grid>

        </>
    )
}