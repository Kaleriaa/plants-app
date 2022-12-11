import React, { useState } from 'react'
import styled from 'styled-components'
import ToggleButton from '../toggle-button'
import DeletePlantForm from './delete-form'
import CreatePlantForm from './create-plants-form'
import CreateUserForm from './create-users-form'

const FuncForPlant = () => {
    const [deletedPlant, setPlant] = useState(false)
    const [createdUser, setCreatedUser] = useState(false)
    const [createdPlant, setCreatedPlant] = useState(false)

    const onDeletedPlant = () => {
        setPlant((prev) => !prev)
    }
    const onCreatedUser = () => {
        setCreatedUser((prev) => !prev)
    }
    const onCreatedPlant = () => {
        setCreatedPlant((prev) => !prev)
    }
    return (
        <Column>
            <Row>
                <ToggleButton onClick={onCreatedPlant} name='Create plant' />
                <ToggleButton onClick={onCreatedUser} name='Create user' />
                <ToggleButton onClick={onDeletedPlant} name='Delete plant' />
            </Row>
            <Row>
                {createdPlant && <CreatePlantForm />}
                {createdUser && <CreateUserForm />}
            </Row>
            {deletedPlant && <DeletePlantForm />}
        </Column>
    )
}
const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export default FuncForPlant