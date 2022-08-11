import { Box, Container, Grid, Paper, rgbToHex, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import { useEffect } from "react"
import { Contact } from "../components/contact/Contact"
import { Education } from "../components/education/Education"
import { Experience } from "../components/experience/Experience"
import { Form } from "../components/form/Form"
import { Intro } from "../components/intro/Intro"
import { Projects } from "../components/projects/Projects"
import PlaygroundSpeedDial from "../components/speedDial"
import EditIcon from '@mui/icons-material/Edit';


// DO A BACKGROUND IMAGE SCROLL ON INTRO SECTION TO SHOW DIFFERENT PICS


export const Homepage = ({ scrollId, pages, pagesDict, hideFeedback, setHideFeedback }) => {




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
                        <div id="projects">
                            <Projects />
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
                        <div id="contact">
                            <Contact />
                        </div>


                    </Box>
                </Grid>

                <Grid item display={hideFeedback ? "none" : ""} xs={12} xl={12} className="section-container" overflow={"scroll"} height={"100vh"}>
                    <div id="feedback">

                        <Form />


                    </div>



                </Grid>

            </Grid>




        </>
    )
}