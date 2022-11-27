import React, { useState } from 'react'
import ToggleButton from '../toggle-button'
import styled from 'styled-components'
import { WrapperColumn, Wrapper } from '../style/wrapper'
import { FormContent } from '../style/card'

const RequestInput = () => {
    const [send, setSend] = useState(false)
    const onSending = () => {
        setSend((prev) => !prev)
    }

    return (
        <WrapperColumn>
            <Wrapper>
                <InputSelect placeholder='Write your request' />
                <ToggleButton onClick={onSending} name='Send' />
            </Wrapper>
            {send && <FormContent/>}
        </WrapperColumn>
    )
}

const InputSelect = styled.input`
    width: 80%;
    height: 38px;
    margin-top: 15px;
    box-shadow: 2px 2px 2px 2px rgba(37, 37, 37, 0.1);
    border-radius: 4px;
    border: none;
    font-size: 16px;
`

export default RequestInput