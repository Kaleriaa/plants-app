import styled from "styled-components"

export const CreateForm = styled.form`
  width: 380px;
  min-height: 250px;
  margin: 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: 2px 2px 2px 2px rgba(37, 37, 37, 0.1);
  border-radius: 7px;
  padding: 15px 10px;
`
export const FormHeader = styled.h2`
  font-size: 20px;
  margin-top: 0px;
`
export const Input = styled.input`
  width: 70%;
  height: 22px;
  margin-bottom: 8px;
`
export const Label = styled.label`
  font-size: 14px;
`
export const Select = styled.select`
  width: 70%;
  height: 25px;
  margin-bottom: 8px;
`
export const InputButton = styled.input`
  background-color: #84aa86;
  margin-top: 5px;
  color: #fff;
  height: 25px;
  width: 82px;
  border-radius: 5px;
  border: 2px solid #6f9270;
`
export const InputButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 10px;
	justify-content: flex-end;
	align-items: flex-start;
`