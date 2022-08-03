import { Grid } from "@mui/material"
import "./intro.css"

export const Intro = () => {

    return (
        <>

            <Grid container direction={"column"}>

                <Grid item md={4}>
                    <h2>Intro</h2>
                </Grid>

                <Grid container md={12}>

                    <Grid item md={6}>
                        <img src="https://i1.sndcdn.com/artworks-7XczWOxvZ2LmFBy0-Yw0hyA-t500x500.jpg" />
                    </Grid>

                    <Grid container md={6}>


                        <Grid item md={12} style={{
                            display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"
                        }}>

                            <h1>Will Wardrop</h1>
                            <h4>Software Developer</h4>
                            <h6>Python | Django | JavaScript | React</h6>
                        </Grid>

                    </Grid>

                </Grid>


            </Grid>

        </>
    )
}