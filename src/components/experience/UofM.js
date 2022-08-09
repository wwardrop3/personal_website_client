import { Grid, Typography } from "@mui/material"


export const UofM = () => {



    return (
        <>

            <Grid container height={"70%"} width={"100%"} className={"scroller-two"}>

                <Grid container xs={12} md={4} maxHeight={"100%"} border={"3px solid black"} alignItems={"center"}>


                    <Grid item padding={1}>

                        <Typography variant="h4" margin={2} justifySelf={"flex-start"} fontFamily={"monospace"}>
                            Twin Cities, Minnesota
                        </Typography>

                        <Typography variant="h6">
                            May-August, 2017; May-November, 2018
                        </Typography>

                        <Typography>
                            I spent two summers working full time and part time during my senior year, working as a research assistant for a phD candidate in the Turfgrass department.  I grew my interest in locational data by assisting in the publication of a paper that compared locational data using ArcGIS.
                        </Typography>

                    </Grid>


                </Grid>

                <Grid container md={8} alignContent={"center"} justifyContent={"space-around"}>
                    <Typography>
                        <ul>
                            <li>
                                Co-authored research paper on turf management technology published in Precision Agriculture
                            </li>

                            <li>
                                Managed logistics for trials aimed at treating turf disease and creating precision irrigation systems for golf courses
                            </li>

                            <li>
                                Collected, synthesized, and analyzed spatial data in Microsoft Excel and ArcGIS in order to identify irrigation zones
                                designed to decrease water-use on golf courses and sports fields

                            </li>


                        </ul>


                    </Typography>
                </Grid>

            </Grid>


        </>

    )
}