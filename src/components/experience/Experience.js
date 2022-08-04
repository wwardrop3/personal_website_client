import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, List, ListItem, Typography } from "@mui/material"
import React, { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./experience.css"

export const Experience = () => {

    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : true)
    }
    return (
        <>

            <Grid container xs={12} overflow={"hidden"} maxHeight={"100vh"}>

                <Grid item xs={12}>

                    <h2>Experience</h2>


                </Grid>

                <Grid item xs={12}>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                        <AccordionSummary

                            style={{ position: "sticky", overflow: "hidden" }}
                            expandIcon={< ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 1, maxHeight: "10vh", position: "sticky" }}>
                                <h2 className="experience-title">Nashville Software School</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN0f4b9ViDaPLXWS3emYUwLiK7XFsRwsgTQ&usqp=CAU" />
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ height: "50vh" }} className="scroller-two">
                            <Typography>


                                <List>
                                    <ListItem>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN0f4b9ViDaPLXWS3emYUwLiK7XFsRwsgTQ&usqp=CAU" />

                                    </ListItem>
                                    <ListItem>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN0f4b9ViDaPLXWS3emYUwLiK7XFsRwsgTQ&usqp=CAU" />

                                    </ListItem>

                                    <ListItem>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN0f4b9ViDaPLXWS3emYUwLiK7XFsRwsgTQ&usqp=CAU" />

                                    </ListItem>
                                </List>



                            </Typography>
                        </AccordionDetails>
                    </Accordion>




                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                        <AccordionSummary
                            style={{ overflow: "hidden" }}
                            expandIcon={< ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 3, maxHeight: "10vh" }}>
                                <h2 className="experience-title">CBRE</h2>
                                <img src="https://www.responsibilityreports.com/HostedData/CompanyHeader/NYSE_CBRE_6fb1dec38b254747a466bf2db0c8b61d.jpg" />
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>


                                <List>
                                    <ListItem>

                                    </ListItem>
                                </List>



                            </Typography>
                        </AccordionDetails>

                    </Accordion>


                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                        <AccordionSummary
                            style={{ overflow: "hidden" }}
                            expandIcon={< ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0, maxHeight: "10vh" }}>
                                <h2 className="experience-title">GIARRATANA</h2>
                                <img src="https://www.e-architect.com/wp-content/uploads/2020/04/alcove-residential-tower-nashville-goettsch-partners-g160420.jpg" />
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>


                                <List>
                                    <ListItem>

                                    </ListItem>
                                </List>



                            </Typography>
                        </AccordionDetails>

                    </Accordion>
                </Grid>




            </Grid>

        </>
    )
}