import { Button, Card, Grid, Paper, Typography } from "@mui/material"
import ProjectDrawer from "./ProjectDrawer"

export const Projects = ({ projectName, setProjectName }) => {

    return (
        <>

            <Grid container xs={12} height={"90vh"}>
                <Grid item>
                    <ProjectDrawer projectName={"Google Earth"} />
                </Grid>
                <Grid item xs={12}>
                    <h2>Projects</h2>
                </Grid>


                <Grid container padding={1} xs={12} height={"80vh"}>
















                    {/* Personal Website */}
                    <Grid item xs={6} padding={1} >


                        <Card style={{ height: "100%", backgroundImage: "url(https://sat02pap002files.storage.live.com/y4md_zdEV-VGC_j7c5U5RTpN09EWDv0j3tXtPRCTP442Pr_KMcD4hgA-eMfOeUPJaZqyANxxMW9wiVxjgfnLrgMpvQzkq5ypph_Ul9OSpGuCwVsRWnJHc_ve_Hg6yLclFdHIIr1G6y6DGa8q-gOo5v3tbx0Lf7gIgVKkhbuoc7dfjo2WpjJyn9wi7st4wYteGbQ?width=936&height=608&cropmode=none)" }}>
                            <h1>asdfa</h1>

                        </Card>

                    </Grid>

                    {/* Hitch */}
                    <Grid item xs={6} padding={1}>
                        <Card style={{ height: "100%", backgroundImage: "url(https://sat02pap002files.storage.live.com/y4md_zdEV-VGC_j7c5U5RTpN09EWDv0j3tXtPRCTP442Pr_KMcD4hgA-eMfOeUPJaZqyANxxMW9wiVxjgfnLrgMpvQzkq5ypph_Ul9OSpGuCwVsRWnJHc_ve_Hg6yLclFdHIIr1G6y6DGa8q-gOo5v3tbx0Lf7gIgVKkhbuoc7dfjo2WpjJyn9wi7st4wYteGbQ?width=936&height=608&cropmode=none)" }}>
                            <h1>asdfa</h1>

                        </Card>

                    </Grid>

                    {/* Reaction */}

                    <Grid item xs={6} padding={1}>
                        <Card style={{ height: "100%", backgroundImage: "url(https://sat02pap002files.storage.live.com/y4md_zdEV-VGC_j7c5U5RTpN09EWDv0j3tXtPRCTP442Pr_KMcD4hgA-eMfOeUPJaZqyANxxMW9wiVxjgfnLrgMpvQzkq5ypph_Ul9OSpGuCwVsRWnJHc_ve_Hg6yLclFdHIIr1G6y6DGa8q-gOo5v3tbx0Lf7gIgVKkhbuoc7dfjo2WpjJyn9wi7st4wYteGbQ?width=936&height=608&cropmode=none)" }}>
                            <h1>asdfa</h1>

                        </Card>

                    </Grid>

                    {/* GE Project */}



                    <Grid item xs={6} padding={1}>
                        <Card style={{ height: "100%", backgroundImage: "url(https://sat02pap002files.storage.live.com/y4md_zdEV-VGC_j7c5U5RTpN09EWDv0j3tXtPRCTP442Pr_KMcD4hgA-eMfOeUPJaZqyANxxMW9wiVxjgfnLrgMpvQzkq5ypph_Ul9OSpGuCwVsRWnJHc_ve_Hg6yLclFdHIIr1G6y6DGa8q-gOo5v3tbx0Lf7gIgVKkhbuoc7dfjo2WpjJyn9wi7st4wYteGbQ?width=936&height=608&cropmode=none)" }}>
                            <h1>asdfa</h1>

                        </Card>

                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}