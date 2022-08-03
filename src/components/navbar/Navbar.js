import { Button, ButtonGroup, Grid, Tab, Tabs, ToggleButton, ToggleButtonGroup, Box } from "@mui/material"
import "./navbar.css"

export const Navbar = () => {





    return (
        <>

            <Grid container alignItems={"center"}>
                <Grid item md={3} xs={6}>
                    <h1>Will's Personal Website</h1>
                </Grid>


                <Box>

                    <Tabs

                        style={{ alignItems: "space-around" }}
                        scrollButtons
                        aria-label="scrollable auto tabs example">


                        <Tab label="Intro"></Tab>
                        <Tab label="Experience"></Tab>
                        <Tab label="Education"></Tab>
                        <Tab label="Projects"></Tab>
                        <Tab label="Contact"></Tab>
                    </Tabs>

                </Box>



                <Grid item md={2} xs={6}>
                    <ToggleButtonGroup
                        orientation="vertical"

                        exclusive
                    >
                        <ToggleButton value="list" aria-label="list">
                            Timeline Toggle
                        </ToggleButton>

                    </ToggleButtonGroup>
                </Grid>



            </Grid>

        </>
    )
}