import React, { useEffect, useState } from "react"
import { CreateForm, FormHeader, Input, Label, Select, InputButton, InputButtonWrapper } from './create-form-style'
import { Wrapper } from "../style/wrapper"
import { formData } from "../../lib/form-data-obj"
import { api } from "../../lib/api"

const CreatePlantForm = () => {
	const [users, setUsers] = useState([]);
	const [sorts, setSorts] = useState([]);
	const onSubmit = (e) => {
		e.preventDefault();
		const formDataObj = formData(e.currentTarget)
		api.post("/plant", formDataObj).then(() => alert("Успешно"));
	};

	useEffect(() => {
		api.get("/plant/employer").then((d) => setUsers(d.data));
		api.get("/plant/sort").then((d) => setSorts(d.data));
	}, []);

	return (
		<CreateForm onSubmit={onSubmit}>
			<FormHeader>Создать растения</FormHeader>
			<Wrapper>
				<Label>Название</Label>
				<Input name="name" type="text" />
			</Wrapper>
			<Wrapper>
				<Label>Сорт</Label>
				<Select name="sortId">
					<option>Выберите сорт</option>
					{sorts.map(({ id, name }) => (
						<option key={id} value={id}>{name}</option>
					))}
				</Select>
			</Wrapper>
			<Wrapper>
				<Label>Дата посадки</Label>
				<Input name="dateGrown" type="date" />
			</Wrapper>
			<Wrapper>
				<Label>Дата полива</Label>
				<Input name="dateWatering" type="date" />
			</Wrapper>
			<Wrapper>
				<Label>Высота</Label>
				<Input name="height" type="number" />
			</Wrapper>
			<Wrapper>
				<Label>Состояние</Label>
				<Input name="state" type="text" />
			</Wrapper>
			<Wrapper>
				<Label>Ответственный</Label>
				<Select name="employerId">
					<option>Выберите сотрудника</option>
					{users.map(({ id, name }) => (
						<option key={id} value={id}>{name}</option>
					))}
				</Select>
			</Wrapper>
			<InputButtonWrapper>
				<InputButton type="reset" value="Очистить" />
				<InputButton type="submit" value="Сохранить" />
			</InputButtonWrapper>
		</CreateForm>
	)
}

export default CreatePlantForm;
