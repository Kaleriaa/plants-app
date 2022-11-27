import styled from "styled-components";

const FormContent = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export const Wrapper = styled.div`
  min-width: 370px;
  min-height: 250px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: 2px 2px 2px 2px rgba(37, 37, 37, 0.1);
  border-radius: 7px;
  padding: 15px 10px;
`;

const FormHeader = styled.h2`
  font-size: 18px;
  margin-top: 0px;
`;
export { FormContent, FormHeader };
