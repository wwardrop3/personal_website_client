import { Close } from "@mui/icons-material"
import { Box, Button, Card, Drawer, Grid, Paper, Typography } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import { GoogleEarth } from "./GoogleEarth"
import { Hitch } from "./Hitch"
import { PersonalWebsite } from "./PersonalWebsite"
import { Reaction } from "./Reaction"
import { Spotter } from "./Spotter"

export const Projects = () => {


    const [projectName, setProjectName] = useState("")



    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (name, anchor, open) => (event) => {
        setProjectName(name)
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            style={{ backgroundColor: "transparent" }}
            sx={{ width: '100%', height: "100%", }}
            role="presentation"



        >
            <Close
                fontSize='large'
                style={{ position: "absolute", right: "5%", top: "2%" }}

                onClick={toggleDrawer("", "bottom", false)} />

            <div hidden={projectName != "Spotter" ? "none" : ""}>
                <Spotter />
            </div>

            <div hidden={projectName != "Personal Website" ? "none" : ""}>
                <PersonalWebsite />
            </div>

            <div hidden={projectName != "Hitch" ? "none" : ""}>
                <Hitch />
            </div>

            <div hidden={projectName != "Reaction" ? "none" : ""}>
                <Reaction />
            </div>


            <div className="project-container" hidden={projectName != "Google Earth" ? "none" : ""}>
                <GoogleEarth />
            </div>






        </Box>
    );



    return (
        <>




            <Grid container xs={12} xl={12} height={"80vh"}>



                <Grid item xs={12}>
                    <h2>Projects</h2>
                </Grid>


                <Grid container padding={1} xs={12} height={"70vh"}>

                    <Drawer

                        PaperProps={{
                            sx: { width: "100%", height: "90%", justifyContent: "center", backgroundColor: "transparent" },
                        }}
                        anchor={"bottom"}
                        open={state["bottom"]}
                        onClose={toggleDrawer("asdfads", "bottom", false)}
                    >


                        {list("bottom")}

                    </Drawer>


                    {/* Spotter */}
                    <Grid item xs={12} padding={1} >

                        <Card style={{ height: "100%" }}>

                            <Button

                                onClick={toggleDrawer("Spotter", "bottom", true)}


                                style={{ height: "100%", width: "100%", backgroundImage: "url(https://academics.otc.edu/media/uploads/sites/49/2022/06/page-under-construction-icon.jpg)" }}>

                                <div className="project-title">
                                    <Typography fontSize={12} >
                                        <h1>Spotter</h1>
                                    </Typography>

                                </div>


                            </Button>



                        </Card>

                    </Grid>




                    {/* Personal Website */}
                    <Grid item xs={12} padding={1} >

                        <Card style={{ height: "100%" }}>

                            <Button

                                onClick={toggleDrawer("Personal Website", "bottom", true)}


                                style={{ height: "100%", width: "100%", backgroundImage: "url(https://sat02pap002files.storage.live.com/y4mcFD950Mtd0DPsmaI7QdGGBBxBTNp6eipJNQkMh2XywiA1TGYN48h1Vgr7xH5BeFYZGqtm5w5CsDXdB9eS-fDvXn8tQMHMVR8rLJYMyFMYmNKWBWSdkicgSg6rff15OwMVx4GsWxLJlgRxw2PxbJBnboYUzMNDYHHg6MvyT0k0lkjzHCfvwk--TvNrgUVwJ_o?width=936&height=530&cropmode=none)" }}>

                                <div className="project-title">
                                    <Typography fontSize={12} >
                                        <h1>Personal Website</h1>
                                    </Typography>

                                </div>


                            </Button>



                        </Card>

                    </Grid>

                    {/* Hitch */}
                    <Grid item xs={12} padding={1} >
                        <Card style={{ height: "100%" }}>

                            <Button

                                onClick={toggleDrawer("Hitch", "bottom", true)}


                                style={{ height: "100%", width: "100%", backgroundImage: "url(https://sat02pap002files.storage.live.com/y4mIDQk5BbRtNM9wyC4lNgHtzyo9pKjwZ58KvZUEaam3WzH0dAr04FH-0ZW1qXzBoc4Nu7eF0cZd5LMctiR7hVif_pfr3QKdAysAQLcmianI35KNMkqSFo8lCvO__JQM3ZCp666O60KGlwhB17x7T7uOjh70MLoNE6NXATM2OtTCAX4yoDaTh-yrFLCkKDz5fsA?width=936&height=524&cropmode=none)" }}>

                                <div className="project-title">
                                    <h1>Hitch</h1>

                                </div>


                            </Button>



                        </Card>

                    </Grid>

                    {/* Reaction */}

                    <Grid item xs={12} padding={1} >
                        <Card style={{ height: "100%" }}>

                            <Button

                                onClick={toggleDrawer("Reaction", "bottom", true)}


                                style={{ height: "100%", width: "100%", backgroundImage: "url(https://sat02pap002files.storage.live.com/y4mhwsHA_DluTrsnguHxST34OatqRaTzluDl9xFqdmUXrbRmkpKUiez4UKzOQQYVg8a1SCdFYdaAKv94I7mVekzK_5sJTt2tPL5aSNcYCI4q3zGkaa76uAmq8Pk_azi1thf6dm-yb14Vve1BJTdd9I9E_RxKPNu_6AD386sK7bPXFa5W9iCyHRBWEFOUZffV78K?width=936&height=526&cropmode=none)" }}>

                                <div className="project-title">
                                    <h1>Reaction</h1>

                                </div>


                            </Button>



                        </Card>

                    </Grid>

                    {/* GE Project */}



                    <Grid item xs={12} padding={1} >
                        <Card style={{ height: "100%" }}>

                            <Button

                                onClick={toggleDrawer("Google Earth", "bottom", true)}


                                style={{ height: "100%", width: "100%", backgroundImage: "url(https://sat02pap002files.storage.live.com/y4md_zdEV-VGC_j7c5U5RTpN09EWDv0j3tXtPRCTP442Pr_KMcD4hgA-eMfOeUPJaZqyANxxMW9wiVxjgfnLrgMpvQzkq5ypph_Ul9OSpGuCwVsRWnJHc_ve_Hg6yLclFdHIIr1G6y6DGa8q-gOo5v3tbx0Lf7gIgVKkhbuoc7dfjo2WpjJyn9wi7st4wYteGbQ?width=936&height=608&cropmode=none)" }}>

                                <div className="project-title">
                                    <h1>Google Earth</h1>

                                </div>


                            </Button>



                        </Card>

                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}