import React, { useState } from 'react'
import { Wrapper, WrapperColumn } from '../style/wrapper'
import ToggleButton from '../toggle-button'
import View from './view'
import Form from './view-create'

const FuncForPlant = () => {
    const [deleted, setDeleted] = useState(false)
    const onDeleted = () => {
        setDeleted((prev) => !prev)
    }
    const [updated, setUpdated] = useState(false)
    const onUpdated = () => {
        setUpdated((prev) => !prev)
    }
    const [created, setCreated] = useState(true)
    const onCreated = () => {
        setCreated((prev) => !prev)
    }
    return (
        <WrapperColumn>
            <Wrapper>
                <ToggleButton onClick={onCreated} name='Create' />
                <ToggleButton onClick={onDeleted} name='Delete' />
                <ToggleButton onClick={onUpdated} name='Update' />
            </Wrapper>
            {created && <Form />}
            {deleted && <View name='Delete'/>}
            {updated && <View name='Update'/>}
        </WrapperColumn>
    )
}

export default FuncForPlant