import { Box, Container, Grid, Paper, rgbToHex } from "@mui/material"
import { useEffect } from "react"
import { Contact } from "../components/contact/Contact"
import { Education } from "../components/education/Education"
import { Experience } from "../components/experience/Experience"
import { Intro } from "../components/intro/Intro"
import { Projects } from "../components/projects/Projects"

export const Homepage = ({ scrollId, pages, pagesDict }) => {



    useEffect(
        () => {
            scrollId.scrollIntoView({ behavior: "smooth" })
        }, [scrollId]
    )

    return (
        <>

            <Grid container className="scroller">


                <Grid item xs={12} xl={12} className="section-container">
                    <div id="intro">
                        <Box className="scroller-two">
                            <div id="intro">
                                <Intro />
                            </div>


                        </Box>

                    </div>
                </Grid>


                <Grid item xs={12} xl={12} className="section-container">
                    <Box className="scroller-two">
                        <div id="experience">
                            <Experience />
                        </div>


                    </Box>

                </Grid>



                <Grid item xs={12} xl={12} className="section-container">
                    <Box className="scroller-two">
                        <div id="education">
                            <Education />
                        </div>


                    </Box>
                </Grid>


                <Grid item xs={12} xl={12} className="section-container">
                    <Box className="scroller-two">
                        <div id="projects">
                            <Projects />
                        </div>


                    </Box>
                </Grid>



                <Grid item xs={12} xl={12} className="section-container">
                    <Box className="scroller-two">
                        <div id="contact">
                            <Contact />
                        </div>


                    </Box>
                </Grid>


            </Grid>



        </>
    )
}