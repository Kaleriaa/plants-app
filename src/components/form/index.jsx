import React from 'react';
import { CreateForm, FormHeader, Input, InputButton, InputButtonWrapper, Label, Select } from '../func-item/create-form-style';
import { Wrapper } from '../style/wrapper';

// type: text, select (has catalog), number, date
const Form = ({ onSubmit, title, fields }) => {
    return (
        <CreateForm onSubmit={onSubmit}>
            <FormHeader>{title}</FormHeader>
            {fields.map(({ title, name, type = 'text', catalog, catalogName }) => {
                let input = <Input name={name} type={type} />

                if (type === 'select') {
                    input = <Select name={name}>
                        <option>{catalogName}</option>
                        {catalog.map(({ id, name }) => (
                            <option key={id} value={id}>{name}</option>
                        ))}
                    </Select>
                }

                return (
                    <Wrapper key={name}>
                        <Label>{title}</Label>
                        {input}
                    </Wrapper>
                )
            })}
            <InputButtonWrapper>
                <InputButton type="reset" value="Очистить" />
                <InputButton type="submit" value="Сохранить" />
            </InputButtonWrapper>
        </CreateForm>
    );
};

export default Form;