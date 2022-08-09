import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, List, ListItem, Typography } from "@mui/material"
import React, { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./experience.css"
import { NSS } from "./NSS";
import { CBRE } from "./CBRE";

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

                <Grid spacing={10} item xs={12} height={"90vh"} justifyContent={"space-between"} alignItems={"center"}>

                    <Accordion hidden={expanded == 'panel2' ? true : expanded == 'panel3' ? true : expanded == 'panel4' ? true : false} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                        <AccordionSummary
                            className="accordian-summary"
                            expandIcon={< ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 1, maxHeight: "10vh", position: "sticky" }}>
                                <h2 className="experience-title">Nashville Software School</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN0f4b9ViDaPLXWS3emYUwLiK7XFsRwsgTQ&usqp=CAU" />
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ height: "80vh" }} className="scroller-two">
                            <NSS />
                        </AccordionDetails>
                    </Accordion>




                    <Accordion hidden={expanded == 'panel1' ? true : expanded == 'panel3' ? true : expanded == 'panel4' ? true : false} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                        <AccordionSummary
                            className="accordian-summary"
                            expandIcon={< ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 1, maxHeight: "10vh", position: "sticky" }}>
                                <h2 className="experience-title">CBRE</h2>
                                <img src="https://www.responsibilityreports.com/HostedData/CompanyHeader/NYSE_CBRE_6fb1dec38b254747a466bf2db0c8b61d.jpg" />
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ height: "100vh" }} className="scroller-two">
                            <CBRE />
                        </AccordionDetails>

                    </Accordion>


                    <Accordion hidden={expanded == 'panel2' ? true : expanded == 'panel1' ? true : expanded == 'panel4' ? true : false} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                        <AccordionSummary
                            className="accordian-summary"
                            expandIcon={< ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 1, maxHeight: "10vh", position: "sticky" }}>
                                <h2 className="experience-title">GIARRATANA</h2>
                                <img src="https://www.e-architect.com/wp-content/uploads/2020/04/alcove-residential-tower-nashville-goettsch-partners-g160420.jpg" />
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ height: "100vh" }} className="scroller-two">

                        </AccordionDetails>

                    </Accordion>


                    <Accordion hidden={expanded == 'panel2' ? true : expanded == 'panel3' ? true : expanded == 'panel1' ? true : false} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                        <AccordionSummary
                            className="accordian-summary"
                            expandIcon={< ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 1, maxHeight: "10vh", position: "sticky" }}>
                                <h2 className="experience-title">University of Minnesota</h2>
                                <img src="https://dlyv80df02r89.cloudfront.net/images/2020/9/10/GS_M_Web.jpg" />
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ height: "100vh" }} className="scroller-two">

                        </AccordionDetails>

                    </Accordion>
                </Grid>




            </Grid>

        </>
    )
}