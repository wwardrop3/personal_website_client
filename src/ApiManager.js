import { host } from "."


export const submitForm = (form) => {
    return fetch(`${host}/newform`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)


        })
}



export const getFormCount = () => {
    return fetch(`${host}/forms`)
        .then(res => res.json)
}