import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, List, ListItem, Paper, Typography } from "@mui/material"
import React, { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./experience.css"
import { NSS } from "./NSS";
import { CBRE } from "./CBRE";
import { UofM } from "./UofM";
import { Giarratana } from "./Giarratana";

export const Experience = () => {

    const [expanded, setExpanded] = useState(false)


    const handleChange = (panel) => (event, isExpanded) => {

        setExpanded(isExpanded ? panel : true)





    }





    return (
        <>

            <Grid container xs={12} height={"90vh"}>

                <Grid item xs={12}>

                    <h2>Experience</h2>


                </Grid>

                <Grid item xs={12} padding={1} height={"90%"}>
                    <Paper elevation={10} style={{ margin: 5 }} >
                        <Accordion hidden={expanded == 'panel2' ? true : expanded == 'panel3' ? true : expanded == 'panel4' ? true : false} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                            <AccordionSummary
                                className="accordian-summary"
                                expandIcon={< ExpandMoreIcon style={{ color: "white" }} />}

                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                style={{
                                    "backgroundColor": "darkorange",
                                    // "backgroundImage": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN0f4b9ViDaPLXWS3emYUwLiK7XFsRwsgTQ&usqp=CAU)"
                                }}
                            >
                                <Typography sx={{ width: '100%', flexShrink: 1, height: "10vh", position: "sticky" }}>
                                    <div style={{ width: "100%", alignItems: "center", justifyContent: "space-between", display: "flex", color: "white" }}>
                                        <h2>Nashville Software School</h2>
                                        <h5>Apprentice</h5>

                                    </div>
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{ height: "100%" }}>
                                <NSS />
                            </AccordionDetails>

                        </Accordion>

                    </Paper>

                    <Paper elevation={10} style={{ margin: 5 }} >
                        <Accordion hidden={expanded == 'panel1' ? true : expanded == 'panel3' ? true : expanded == 'panel4' ? true : false} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                            <AccordionSummary
                                className="accordian-summary"
                                expandIcon={< ExpandMoreIcon style={{ color: "white" }} />}

                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                style={{
                                    backgroundColor: "green"
                                }}
                            >
                                <Typography sx={{ width: '100%', flexShrink: 1, height: "10vh", position: "sticky" }}>
                                    <div style={{ width: "100%", alignItems: "center", justifyContent: "space-between", display: "flex", color: "white" }}>
                                        <h2>CBRE</h2>
                                        <h5>Financial Analyst</h5>

                                    </div>
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{ height: "100%" }}>
                                <CBRE />
                            </AccordionDetails>

                        </Accordion>

                    </Paper>

                    <Paper elevation={10} style={{ margin: 5 }} >
                        <Accordion hidden={expanded == 'panel2' ? true : expanded == 'panel1' ? true : expanded == 'panel4' ? true : false} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                            <AccordionSummary
                                className="accordian-summary"
                                expandIcon={< ExpandMoreIcon style={{ color: "white" }} />}

                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                                style={{ "backgroundImage": "url(https://www.e-architect.com/wp-content/uploads/2020/04/alcove-residential-tower-nashville-goettsch-partners-g160420.jpg)" }}
                            >
                                <Typography sx={{ width: '100%', flexShrink: 1, height: "10vh", position: "sticky" }}>
                                    <div style={{ width: "100%", alignItems: "center", justifyContent: "space-between", display: "flex", color: "white" }}>
                                        <h2>Giarratana</h2>
                                        <h5>Intern</h5>

                                    </div>
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{ height: "100%" }}>
                                <Giarratana />
                            </AccordionDetails>

                        </Accordion>

                    </Paper>


                    <Paper elevation={10} style={{ margin: 5 }} >
                        <Accordion hidden={expanded == 'panel2' ? true : expanded == 'panel3' ? true : expanded == 'panel1' ? true : false} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                            <AccordionSummary
                                className="accordian-summary"
                                expandIcon={< ExpandMoreIcon style={{ color: "white" }} />}

                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                style={{ "backgroundImage": "url(https://dlyv80df02r89.cloudfront.net/images/2020/9/10/GS_M_Web.jpg)" }}
                            >
                                <Typography sx={{ width: '100%', flexShrink: 1, height: "10vh", position: "sticky" }}>
                                    <div style={{ width: "100%", alignItems: "center", justifyContent: "space-between", display: "flex", color: "white" }}>
                                        <h2>University of Minnesota</h2>
                                        <h5>Research Assistant</h5>

                                    </div>
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{ height: "100%" }}>
                                <UofM />

                            </AccordionDetails>

                        </Accordion>

                    </Paper>
                </Grid >




            </Grid >

        </>
    )
}






