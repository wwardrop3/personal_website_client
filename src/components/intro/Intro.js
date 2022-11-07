import { Box, Grid } from "@mui/material"
import "./intro.css"

export const Intro = () => {

    return (
        <>





            <Grid container margin={0} spacing={1} padding={3} md={12} justifyContent="center" alignItems={"center"} >

                <Grid item xs={6} sm={6} md={6} >
                    <img style={{ borderRadius: "50%" }} src="https://i1.sndcdn.com/artworks-7XczWOxvZ2LmFBy0-Yw0hyA-t500x500.jpg" />
                </Grid>

                <Grid container md={6} justifyContent="center" alignItems={"center"}>


                    <Grid item md={12} style={{
                        display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"
                    }}>

                        <h1>Will Wardrop</h1>
                        <h4>Software Developer</h4>
                        <h6>Python | Django | JavaScript | React</h6>
                    </Grid>
                    <Grid item>
                        <h5>My Mission Statement</h5>
                        <p>I am a truth seeker who utilizes technology to better understand the world around me. I look for solutions to problems by writing code to analyze, display, and organize geospatial and other types of data.</p>

                    </Grid>

                </Grid>

            </Grid>



        </>
    )
}