import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FormContent, FormHeader } from "../style/card";
import { Wrapper } from "../style/wrapper";
import { API_URL } from "../../lib/api-url";
import axios from "axios";
import { api } from "../../lib/api";

const Form = () => {
  const [users, setUsers] = useState([]);
  const [sorts, setSorts] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formDataObj = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    api.post("/plant", formDataObj).then(() => alert("Успешно"));
  };

  useEffect(() => {
    api.get("/plant/employer").then((d) => setUsers(d.data));
    api.get("/plant/sort").then((d) => setSorts(d.data));
  }, []);

  console.log({ users, sorts });

  return (
    <FormCreated onSubmit={onSubmit}>
      <FormHeader>Создание растения</FormHeader>
      <Wrapper>
        <Label>Название</Label>
        <Input name="name" type="text" />
      </Wrapper>
      <Wrapper>
        <Label>Сорт</Label>
        <Select name="sortId">
          <option>Выберите сорт</option>
          {sorts.map(({ id, name }) => (
            <option value={id}>{name}</option>
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
            <option value={id}>{name}</option>
          ))}
        </Select>
      </Wrapper>
      <Wrapper>
        <InputButton type="reset" value="Очистить" />
        <InputButton type="submit" value="Сохранить" />
      </Wrapper>
    </FormCreated>
  );
};
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
`;
const Input = styled.input`
  width: 70%;
  height: 22px;
  margin-bottom: 8px;
`;
const Label = styled.label`
  font-size: 14px;
`;
const Select = styled.select`
  width: 70%;
  height: 25px;
  margin-bottom: 8px;
`;
const InputButton = styled.input`
  background-color: #b5e6b7;
  height: 25px;
  min-width: 70px;
  border-radius: 5px;
`;
export default Form;
