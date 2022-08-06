import { AppBar, Box, Container, Grid } from "@mui/material"
import { useRef, useState } from "react"
import { ApplicationViews } from "./ApplicationViews"
import { Navbar } from "./components/navbar/Navbar"
import ProjectDrawer from "./components/projects/ProjectDrawer"


export const App = () => {
    const pagesDict = { 'Intro': "intro", 'Experience': "experience", 'Education': "education", 'Projects': "projects", "Contact": "contact", "Feedback": "feedback" }
    const pages = ["Intro", "Experience", "Education", "Projects", "Contact"]

    const [scrollId, setScrollId] = useState(document.getElementById("root"))
    const [hideFeedback, setHideFeedback] = useState(true)
    const [projectName, setProjectName] = useState("")


    return (
        <>
            <Grid container disable className="content-container" position={"fixed"} width={"100vw"}>





                <AppBar position="sticky" style={{ backgroundColor: '#2E3B55' }}>

                    <Navbar setScrollId={setScrollId} scrollId={scrollId} pages={pages} pagesDict={pagesDict} hideFeedback={hideFeedback} setHideFeedback={setHideFeedback} />

                </AppBar>





                <Grid container>
                    <ApplicationViews scrollId={scrollId} pages={pages} pagesDict={pagesDict} hideFeedback={hideFeedback} setHideFeedback={setHideFeedback} projectName={projectName} setProjectName={setProjectName} />
                </Grid>







            </Grid>
        </>

    )
}