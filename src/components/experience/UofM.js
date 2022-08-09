import { Grid, Typography } from "@mui/material"


export const UofM = () => {



    return (
        <>

            <Grid container height={"70%"} width={"100%"} className={"scroller-two"}>

                <Grid container xs={12} md={4} maxHeight={"100%"} border={"3px solid black"} alignItems={"center"}>


                    <Grid item padding={1}>

                        <Typography variant="h4" margin={2} justifySelf={"flex-start"} fontFamily={"monospace"}>
                            Nashville, Tennessee
                        </Typography>

                        <Typography variant="h6">
                            January-July, 2022
                        </Typography>

                        <Typography>
                            Intensive full-time, six months software development bootcamp focusing on Python/Django
                            development fundamentals and problem solving. The final three months of the program being
                            executed in a simulated company environment with SCRUM methodology.
                        </Typography>

                    </Grid>


                </Grid>

                <Grid container md={8} alignContent={"center"} justifyContent={"space-around"}>
                    <Typography>
                        <ul>
                            <li>
                                Daily hands-on application of OP fundamentals through group and individual projects
                            </li>

                            <li>
                                Created single page applications in JavaScript, as well as in the React framework
                            </li>

                            <li>
                                Project management/tracking with GitHub project boards and issue tracking
                            </li>

                            <li>
                                Source code/version control with Git/GitHub
                            </li>

                            <li>
                                Solution Design: white-boarding and wireframes
                            </li>

                            <li>
                                Leveraged Django for creating and editing server-
                                generated web applications
                            </li>

                            <li>
                                Created RESTful API's with Django REST
                                framework
                            </li>

                            <li>
                                Retrieved and stored database information with
                                SQLite
                            </li>

                            <li>
                                racticed testing with Python's unit test framework
                            </li>

                        </ul>


                    </Typography>
                </Grid>

            </Grid>


        </>

    )
}