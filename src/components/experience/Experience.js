import { Grid, List, ListItem } from "@mui/material"

export const Experience = () => {

    return (
        <>

            <Grid container xs={12}>

                <Grid item>
                    <h2>Experience</h2>
                </Grid>

                <Grid container>
                    {/* individual experience container */}
                    <Grid container>
                        <Grid item>
                            <h3>CBRE</h3>
                        </Grid>
                        {/* individual experience summary */}
                        <Grid container>

                            <Grid item>
                                summary
                            </Grid>

                            {/* individual experience bullets */}

                            <List>
                                <ListItem>Underwrote Deals</ListItem>
                                <ListItem>asdf</ListItem>
                                <ListItem>asdf</ListItem>
                            </List>
                        </Grid>




                    </Grid>


                </Grid>


            </Grid>

        </>
    )
}