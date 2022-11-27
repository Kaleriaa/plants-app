import React from "react"
import styled from 'styled-components'
import { FormContent, FormHeader } from "../style/card"
import { Wrapper } from "../style/wrapper"

const Form = () => {
	return (
		<FormCreated>
			<FormHeader>Создание растения</FormHeader>
			<Wrapper>
				<Label>Название</Label>
				<Input type='text' />
			</Wrapper>
			<Wrapper>
				<Label>Сорт</Label>
				<Select>
					<option>Выберите сорт</option>
					<option>Абрикос</option>
					<option>Вишня</option>
				</Select>
			</Wrapper>
			<Wrapper>
				<Label>Дата посадки</Label>
				<Input type='date' />
			</Wrapper>
			<Wrapper>
				<Label>Дата полива</Label>
				<Input type='date' />
			</Wrapper>
			<Wrapper>
				<Label>Высота</Label>
				<Input type='number' />
			</Wrapper>
			<Wrapper>
				<Label>Состояние</Label>
				<Input type='text' />
			</Wrapper>
			<Wrapper>
				<Label>Ответственный</Label>
				<Select>
					<option>Выберите сотрудника</option>
					<option>Абрикос</option>
					<option>Вишня</option>
				</Select>
			</Wrapper>
			<Wrapper>
				<Label>Питомник</Label>
				<Select>
					<option>Выберите питомник</option>
					<option>Абрикос</option>
					<option>Вишня</option>
				</Select>
			</Wrapper>
			<Wrapper>
				<InputButton type='reset' value='Очистить'/>
				<InputButton type='submit'value='Сохранить'/>
			</Wrapper>
		</FormCreated>
	)
}
const FormCreated = styled.form`
	width: 62%;
	min-height: 250px;
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(37, 37, 37, 0.1);
    border-radius: 7px;
    padding: 15px 10px;
`
const Input = styled.input`
	width: 70%;
	height: 22px;
	margin-bottom: 8px;
`
const Label = styled.label`
	font-size: 14px;
`
const Select = styled.select`
	width: 70%;
	height: 25px;
	margin-bottom: 8px;
`
const InputButton = styled.input`
	background-color: #b5e6b7;
	height: 25px;
	min-width: 70px;
	border-radius: 5px;
`
export default Form