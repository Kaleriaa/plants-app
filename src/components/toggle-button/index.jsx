import React from 'react'
import styled from 'styled-components'

const ToggleButton = (props) => {
    return (
        <ToggledButton {...props}>{props.name}</ToggledButton>
    )
}
const ToggledButton = styled.button`
    cursor: pointer;
	margin-top: 15px;
	background-color: #2f9f51;
	width: 135px;
	height: 40px;
	border-radius: 5px;
	color: #fff;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export default ToggleButton