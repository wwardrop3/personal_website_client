import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, Input, InputLabel } from "@mui/material"
import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { useState } from "react"
import { submitForm } from "../../ApiManager"

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
            first_name: "",
            email: "",
            industry: "",
            ok_to_contact: false,
            hiring: false,
            company: "",
            last_name: "",
            skills: {
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
        copy.skills[skill] = !copy.skills[skill]
        setNewForm(copy)
    }

    const handleChange = (id, value) => {
        const copy = { ...newForm }
        copy[id] = value
        setNewForm(copy)
    }

    const handleChecks = (id) => {
        const copy = { ...newForm }

        copy[id] = !copy[id]
        console.log(copy[id])
        console.log(id)
        setNewForm(copy)
    }



    return (
        <>

            <h1>Feedback</h1>


            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input name="first_name" id="first_name" area-aria-describedby="my-helper-text"
                onChange={(e) => handleChange(e.target.id, e.target.value)} />


            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input name="last_name" id="last_name" area-aria-describedby="my-helper-text"
                onChange={(e) => handleChange(e.target.id, e.target.value)} />


            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input name="email" id="email" area-aria-describedby="my-helper-text"
                onChange={(e) => handleChange(e.target.id, e.target.value)} />

            <InputLabel htmlFor="my-input">Company Name</InputLabel>
            <Input name="company" id="company" area-aria-describedby="my-helper-text"
                onChange={(e) => handleChange(e.target.id, e.target.value)} />


            <div style={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel control={<Checkbox />} name="ok_to_contact" label="Ok to contact?" onChange={(e) => handleChecks(e.target.name)} />
                <FormControlLabel control={<Checkbox />} name="hiring" label="Hiring?" onChange={(e) => handleChecks(e.target.name)} />

            </div>


            <h4>Select all skills that would be most helpful in your company</h4>
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




            {/* submit button */}
            <Button

                onClick={
                    () => {
                        console.log(newForm)
                        submitForm(newForm)
                    }
                }

            >Submit</Button>


        </>
    )
}