import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, Input, InputLabel } from "@mui/material"
import { useState } from "react"

export const Contact = () => {

    const [newForm, setNewForm] = useState()

    const form = {
        email: ""
    }



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

            <h1>Contact Me</h1>


            <Grid container>
                <Grid item>

                    <h2>Will Wardrop | 312.505.4104 | wwardrop@gmail.com</h2>
                    <a href="https://www.linkedin.com/in/williamswardrop/">LinkedIn</a>
                </Grid>
            </Grid>







        </>
    )
}