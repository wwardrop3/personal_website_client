import { AppBar, Container, Grid } from "@mui/material"
import { ApplicationViews } from "./ApplicationViews"
import { Navbar } from "./components/navbar/Navbar"


export const App = () => {


    return (
        <>
            <Grid container disableGutters={true} xs={12} xl={8}>

                <AppBar position="sticky" style={{ backgroundColor: "coral" }}>

                    <Navbar />

                </AppBar>





                <Grid container>
                    <ApplicationViews />
                </Grid>











            </Grid>
            {/* Navbar */}

            {/* Content */}

            {/*  */}

            {/* ApplicationViews */}


        </>
    )
}