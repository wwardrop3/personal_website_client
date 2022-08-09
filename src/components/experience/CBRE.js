import { Grid, Typography } from "@mui/material"


export const CBRE = () => {



    return (
        <>

            <Grid container height={"70%"} width={"100%"} className={"scroller-two"}>

                <Grid container xs={12} md={4} maxHeight={"100%"} border={"3px solid black"} alignItems={"center"}>


                    <Grid item padding={1}>

                        <Typography variant="h4" margin={2} justifySelf={"flex-start"} fontFamily={"monospace"}>
                            Nashville, Tennessee
                        </Typography>

                        <Typography variant="h6">
                            January, 2020 - December, 2021
                        </Typography>

                        <Typography>
                            I worked as a financial analyst for the Multifamily Brokerage Team.  I decided to persue my interest in locational data that took from undergrad and apply it with a business focus.
                        </Typography>

                    </Grid>


                </Grid>

                <Grid container md={8} alignContent={"center"} justifyContent={"space-around"}>
                    <Typography>
                        <ul>
                            <li>
                                Underwrote 20+ multimillion dollar apartment buildings as part of Nashville’s #1 multifamily brokerage team by sales volume
                            </li>

                            <li>
                                Conducted commercial real estate market research to search for trends that could benefit our clients
                                ▪ Utilized advanced Excel functions, ArcGIS, and Python to analyze and track market data in one of the nations most
                                active real estate markets
                            </li>

                            <li>
                                Created a system to dynamically track and monitor Nashville’s development pipeline visually, utilizing Google Sheets,
                                Python, and KML network links
                            </li>

                            <li>
                                Managed the creation of dozens of 90+ page offering memorandums on Nashville’s premier multifamily apartment
                                buildings through virtual collaboration with a graphic designer
                            </li>

                            <li>
                                Utilized Google Earth Studio and Abode After Effects to create virtual market tours during the initial stages of the
                                pandemic when clients were unable to travel
                            </li>

                            <li>
                                Built dozens 3D photo-realistic Collada models of Nashville’s largest developments using Sketchup for use in
                                Google Earth presentations to investors
                            </li>



                        </ul>


                    </Typography>
                </Grid>

            </Grid>


        </>

    )
}