import { Container, Grid } from "@mui/material"
import { Contact } from "../components/contact/Contact"
import { Education } from "../components/education/Education"
import { Experience } from "../components/experience/Experience"
import { Intro } from "../components/intro/Intro"
import { Projects } from "../components/projects/Projects"

export const Homepage = () => {

    return (
        <>

            <Grid container className="scroller">


                <Grid item xs={12} xl={12} className="section-container">
                    <Intro />

                </Grid>


                <Grid item xs={12} xl={12} className="section-container">
                    <Experience />

                </Grid>



                <Grid item xs={12} xl={12} className="section-container">
                    <Education />
                </Grid>


                <Grid item xs={12} xl={12} className="section-container">
                    <Projects />
                </Grid>


                <Grid item xs={12} xl={12} className="section-container">
                    <Contact />
                </Grid>


            </Grid>



        </>
    )
}