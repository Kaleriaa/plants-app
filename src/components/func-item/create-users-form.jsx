import React, { useEffect, useState } from "react"
import { api } from "../../lib/api"
import styled from "styled-components"
import { formData } from "../../lib/form-data-obj"
import Form from "../form"
import { getUserFields } from "./user-form-config"

const CreateUserForm = () => {
    const [nursery, setNursery] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        const formDataObj = formData(e.currentTarget)
        api.post("/plant/employer", formDataObj).then(() => alert("Успешно"))
    }

    useEffect(() => {
        api.get("/plant/nursery").then((d) => setNursery(d.data));
    }, [])

    return (
        <Form onSubmit={onSubmit} title='Создать сотрудника' fields={getUserFields({ nursery })} />
    )
}
const RadioButton = styled.input`
    width: 20px;
    margin-bottom: 20px;
`
export default CreateUserForm
