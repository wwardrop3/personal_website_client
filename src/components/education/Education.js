import { Grid, Paper } from "@mui/material"



export const Education = () => {

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <h2>Education</h2>

                </Grid>

                <Grid container xs={12} height={"70vh"} padding={1} justifyContent={"space-around"}>
                    <Grid item xs={12} md={5} >
                        <Paper style={{ height: "90%" }} elevation={10}>


                            <Grid container justifyContent={"center"} alignItems={"center"} height={"100%"}>

                                <Grid container height={"50%"} justifyContent={"center"} alignContent={"center"} >
                                    <img src="https://nashvillesoftwareschool.com/images/NSS-logo-horizontal-small.jpg" />
                                </Grid>


                                <Grid container height={"50%"} justifyContent={"center"} alignContent={"center"}>
                                    <h4>Nashville, Tennessee | January - July, 2022</h4>

                                    <p><i>Certificate, Software</i> Development Bootcamp</p>


                                </Grid>
                            </Grid>











                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={5}>


                        <Paper style={{ height: "90%" }} elevation={10}>

                            <Grid container justifyContent={"center"} alignItems={"center"} height={"100%"}>

                                <Grid container height={"50%"} justifyContent={"center"} alignContent={"center"} >
                                    <img src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/u_of_minnesota-1/standard.png?1548463673" />
                                </Grid>


                                <Grid container height={"50%"} justifyContent={"center"} alignContent={"center"}>
                                    <h4>Twin Cities, Minnesota | December, 2019</h4>

                                    <p><i>Bachelor of Science</i>, Environmental Sciences, Policy and Management, Minor in Applied Economics, GPA 3.6</p>


                                </Grid>




                            </Grid>











                        </Paper>
                    </Grid>
                </Grid>





            </Grid>

        </>
    )
}