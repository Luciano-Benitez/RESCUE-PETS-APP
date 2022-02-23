import React, { useState } from "react";

export const AnswerFormView = (element) => {
    const [form, setform] = useState()
    let array = []
    form.element.answers.map(e => Object.entries(e).map(entry => {
        const [key,value] = entry
        array.push({key,value})
    }))
    const handleSetForm = ()=> {
        setform(element)
        console.log(form)
        console.log(array)
    }
    return (<>
    <button onClick={handleSetForm}>ver</button>
    {form? <p>
    {form.element.answers[1].answer}:{form.element.answers[0].idquestion}</p>: null}
    </>
    )
}