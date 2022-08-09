import { Button, Grid, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"


export const PersonalWebsite = () => {


    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>

            <Grid container padding={1} xs={12} height={"100%"}>
                <Paper style={{ width: "100%", height: "90%", padding: 5 }} elevation={5}>



                    <Grid container xs={12}>



                        <Grid item xs={12} md={6}>
                            <img src="https://sat02pap002files.storage.live.com/y4mcFD950Mtd0DPsmaI7QdGGBBxBTNp6eipJNQkMh2XywiA1TGYN48h1Vgr7xH5BeFYZGqtm5w5CsDXdB9eS-fDvXn8tQMHMVR8rLJYMyFMYmNKWBWSdkicgSg6rff15OwMVx4GsWxLJlgRxw2PxbJBnboYUzMNDYHHg6MvyT0k0lkjzHCfvwk--TvNrgUVwJ_o?width=936&height=530&cropmode=none" />
                        </Grid>

                        <Grid container xs={12} md={6} justifyContent={"center"}>
                            <Grid item xs={12} alignContent={"center"}>
                                <h3>Personal Website</h3>
                            </Grid>



                            <Grid item xs={12}>
                                <Typography>
                                    I created the website you are currently reading.  During development, I learned Material UI on the front end and used Python and Django to manage feedback responses on the backend.
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    <ul>
                                        <li>Utilized Material UI to develop front end to be accessible on mobile</li>
                                        <li>Used Python on the backend to keep track of feedback form submissions</li>
                                    </ul>
                                </Typography>
                            </Grid>

                            <Grid container xs={12} justifyContent={"space-around"}>



                                <Grid item xs={6} md={4}>
                                    <Button
                                        onClick={() => openInNewTab("https://github.com/wwardrop3/hitch_be_capstone_client")}
                                    >Download KML Example</Button>

                                </Grid>

                                <Grid item xs={6} md={4}>
                                    <Button
                                        onClick={() => openInNewTab("https://github.com/wwardrop3/hitch_be_capstone_client")}
                                    >Download KML Example</Button>

                                </Grid>

                            </Grid>
                        </Grid>


                    </Grid>



                </Paper>
            </Grid>


        </>
    )
}