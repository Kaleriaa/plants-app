import React, { useEffect, useState } from "react";
import { CreateForm, FormHeader, Input, Label, Select, InputButton, InputButtonWrapper } from './create-form-style'
import { Wrapper } from "../style/wrapper";
import { api } from "../../lib/api";
import styled from "styled-components";
import { formData } from "../../lib/form-data-obj";

const CreateUserForm = () => {
    const [nursery, setNursery] = useState([]);
    const [checked, setChecked] = useState(true);
    const onChecked = (event) => {
        setChecked(event.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formDataObj = formData(e.currentTarget)
        api.post("/plant/employer", formDataObj).then(() => alert("Успешно"));
    };

    useEffect(() => {
        api.get("/plant/nursery").then((d) => setNursery(d.data));
    }, []);

    return (
        <CreateForm onSubmit={onSubmit}>
            <FormHeader>Создание сотрудника</FormHeader>
            <Wrapper>
                <Label>ФИО</Label>
                <Input name="name" type="text" />
            </Wrapper>
            <Wrapper>
                <Label>Должность</Label>
                <Input name="post" type="text" />
            </Wrapper>
            <Wrapper>
                <Label>Пол</Label>
                <div>
                    <Label for='male'>М</Label>
                    <RadioButton id="male" name="sex" type="radio" value="1"
                        checked={checked == '1' ? true : false} onChange={onChecked} />
                    <Label for='female'>Ж</Label>
                    <RadioButton id="female" name="sex" type="radio" value="0"
                        checked={checked == '0' ? true : false} onChange={onChecked} />
                </div>
            </Wrapper>
            <Wrapper>
                <Label>Стаж работы</Label>
                <Input name="experience" type="number" />
            </Wrapper>
            <Wrapper>
                <Label>Возраст</Label>
                <Input name="age" type="number" />
            </Wrapper>
            <Wrapper>
                <Label>Место работы</Label>
                <Select name="nurseryId">
                    <option>Выберите питомник</option>
                    {nursery.map(({ id, address }) => (
                        <option key={id} value={id}>{address}</option>
                    ))}
                </Select>
            </Wrapper>
            <InputButtonWrapper>
                <InputButton type="reset" value="Очистить" />
                <InputButton type="submit" value="Сохранить" />
            </InputButtonWrapper>
        </CreateForm>
    );
};
const RadioButton = styled.input`
    width: 20px;
    margin-bottom: 20px;
`
export default CreateUserForm;
