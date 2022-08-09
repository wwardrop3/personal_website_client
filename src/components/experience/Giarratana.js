import { Grid, Typography } from "@mui/material"


export const Giarratana = () => {



    return (
        <>

            <Grid container height={"70%"} width={"100%"} className={"scroller-two"}>

                <Grid container xs={12} md={4} maxHeight={"100%"} border={"3px solid black"} alignItems={"center"}>


                    <Grid item padding={1}>

                        <Typography variant="h4" margin={2} justifySelf={"flex-start"} fontFamily={"monospace"}>
                            Nashville, Tennessee
                        </Typography>

                        <Typography variant="h6">
                            May-June, 2019
                        </Typography>

                        <Typography>
                            Was offered an opportunity to work with Nashville's most prolific commercial real estate developer, Tony Giarratana.  I worked in the office as an intern and participated in development meetings.
                        </Typography>

                    </Grid>


                </Grid>

                <Grid container md={8} alignContent={"center"} justifyContent={"space-around"}>
                    <Typography>
                        <ul>
                            <li>
                                Produced regional economic impact reports for two $130+ million high-rise projects
                            </li>

                            <li>
                                Participated in the development process of an urban park, high-rise buildings, and affordable housing projects
                            </li>

                            <li>
                                Developed a condominium occupancy management model in Excel to decrease redundancies and errors
                            </li>

                            <li>
                                Prepared and distributed marketing materials
                            </li>

                            <li>
                                Solution Design: white-boarding and wireframes
                            </li>



                        </ul>


                    </Typography>
                </Grid>

            </Grid>


        </>

    )
}