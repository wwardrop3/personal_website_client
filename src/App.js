import { AppBar, Box, Container, Grid } from "@mui/material"
import { useRef, useState } from "react"
import { ApplicationViews } from "./ApplicationViews"
import { Navbar } from "./components/navbar/Navbar"


export const App = () => {
    const pagesDict = { 'Intro': "intro", 'Experience': "experience", 'Education': "education", 'Projects': "projects", "Contact": "contact" }
    const pages = ["Intro", "Experience", "Education", "Projects"]

    const [scrollId, setScrollId] = useState(document.getElementById("root"))



    return (
        <>
            <Grid container className="content-container" position={"fixed"} width={"100vw"}>



                <AppBar position="sticky" style={{ backgroundColor: "coral" }} >

                    <Navbar setScrollId={setScrollId} scrollId={scrollId} pages={pages} pagesDict={pagesDict} />

                </AppBar>





                <Grid container>
                    <ApplicationViews scrollId={scrollId} pages={pages} pagesDict={pagesDict} />
                </Grid>







            </Grid>
        </>

    )
}