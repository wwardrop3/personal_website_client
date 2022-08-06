import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, Input, InputLabel } from "@mui/material"
import { useState } from "react"

export const Form = () => {

    const bulletList = ["Underwrote 20+ multimillion dollar apartment buildings as part of Nashville’s #1 multifamily brokerage team by sales volume",
        "Conducted commercial real estate market research to search for trends that could benefit our clients",
        "Utilized advanced Excel functions, ArcGIS, and Python to analyze and track market data in one of the nations most active real estate markets",
        "Created a system to dynamically track and monitor Nashville’s development pipeline visually, utilizing Google Sheets, Python, and KML network links"
        , "Managed the creation of dozens of 90+ page offering memorandums on Nashville’s premier multifamily apartment buildings through virtual collaboration with a graphic designer"
        , "Utilized Google Earth Studio and Abode After Effects to create virtual market tours during the initial stages of the pandemic when clients were unable to travel"
        , "Built dozens 3D photo-realistic Collada models of Nashville’s largest developments using Sketchup for use in Google Earth presentations to investors"
    ]

    const skillList = ["Python", "Django", "ORM", "Javascript", "React", "Material UI", "ArcGIS", "Google Earth", "Google Earth Studio", "Adobe After Effects", "XML", "Collada Modeling", "Sketchup", "Microsoft Excel (advanced)", "Google Suite", "Microsoft Office", "GIT"]
    const skillDict = {
        "Python": "python", "Django": "django", "ORM": "orm", "Javascript": "javascript", "React": "react", "Material UI": "material_ui", "ArcGIS": "arc_gis", "Google Earth": "google_earth", "Google Earth Studio": "google_earth_studio", "Adobe After Effects": "adobe_after_effects", "XML": "xml", "Collada Modeling": "collada_modeling", "Sketchup": "sketchup", "Microsoft Excel": "microsoft_excel", "Google Suite": "google_suite", "Microsoft Office": "microsoft_office", "GIT": "git"

    }


    const [newForm, setNewForm] = useState(
        {
            name: "",
            email: "",
            industry: "",
            experience_wanted: "",
            wanted_skills: {
                python: false,
                django: false,
                orm: false,
                javascript: false,
                react: false,
                git: false,
                material_ui: false,
                arc_gis: false,
                google_earth: false,
                google_earth_studio: false,
                adobe_after_effects: false,
                xml: false,
                collada_modeling: false,
                sketchup: false,
                microsoft_excel: false,
                google_suite: false,
                microsoft_office: false


            }
        }
    )

    const handleSkills = (skill) => {
        const copy = { ...newForm }
        copy.wanted_skills[skill] = !copy.wanted_skills[skill]
        setNewForm(copy)
    }

    const handleChange = (id, value) => {
        const copy = { ...newForm }
        copy[id] = value
        setNewForm(copy)
    }

    return (
        <>

            <h1>Feedback</h1>


            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input name="name" id="name" area-aria-describedby="my-helper-text"
                onChange={(e) => handleChange(e.target.id, e.target.value)} />



            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input name="email" id="email" area-aria-describedby="my-helper-text"
                onChange={(e) => handleChange(e.target.id, e.target.value)} />
            <FormHelperText id="my-helper-text">Enter email if you would like to connect</FormHelperText>


            <Input name="industry" id="industry" area-aria-describedby="my-helper-text"
                onChange={(e) => handleChange(e.target.id, e.target.value)} />



            {/* for bullets */}
            {/* <FormGroup>
                    {bulletList.map(bullet => {
                        return <FormControlLabel control={<Checkbox />} label={bullet} />
                    })}

                </FormGroup> */}

            <FormGroup>
                <Grid className="scroller-two" container overflow={"visible"}>
                    {skillList.map(skill => {
                        return (

                            <Grid item>
                                <FormControlLabel control={<Checkbox />} label={skill} onChange={() => handleSkills(skillDict[skill])} />
                            </Grid>
                        )

                    })}
                </Grid>
            </FormGroup>

            <Button

                onClick={
                    () => {
                        console.log(newForm)
                    }
                }

            >Submit</Button>


        </>
    )
}