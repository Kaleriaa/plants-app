import React from "react"
import { FormContent, FormHeader } from '../style/card'

const View = ({name}) => {
    return (
        <FormContent>
            <FormHeader>{name}</FormHeader>
        </FormContent>
    )
}

export default View