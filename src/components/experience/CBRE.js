import { Grid } from "@mui/material"


export const CBRE = () => {



    return (
        <>

            <Grid container>

                <Grid container xs={12} justifyContent={"space-between"}>
                    <Grid item xs={5} justifyContent={"center"}>
                        <h2>Nashville, Tennessee</h2>
                    </Grid>

                    <Grid item xs={5}>
                        <h4>January - July, 2022</h4>
                    </Grid>

                </Grid>

                <Grid container xs={12} justifyContent={"space-between"}>

                    <Grid item xs={12} alignItems={"center"}>
                        <h3>Overview</h3>
                    </Grid>

                    <Grid item xs={5} justifyContent={"center"}>
                        <h4>Nashville, Tennessee</h4>
                    </Grid>

                    <Grid item xs={5}>
                        <h4>Tools Used</h4>
                    </Grid>

                </Grid>


            </Grid>


        </>

    )
}