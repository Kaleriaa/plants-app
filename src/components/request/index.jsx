import React, { useState } from "react";
import ToggleButton from "../toggle-button";
import styled from "styled-components";
import { WrapperColumn, Wrapper } from "../style/wrapper";
import { FormContent } from "../style/card";
import { api } from "../../lib/api";

const RequestInput = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const executeQuery = async () => {
    const res = (await api.post("/plant/custom", { data: query })).data;
    setResult(JSON.stringify(res));
  };

  return (
    <WrapperColumn>
      <Wrapper>
        <InputSelect
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Write your request"
        />
        <ToggleButton onClick={executeQuery} name="Send" />
      </Wrapper>
      {result && <FormContent text={result} />}
    </WrapperColumn>
  );
};

const InputSelect = styled.input`
  width: 80%;
  height: 38px;
  margin-top: 15px;
  box-shadow: 2px 2px 2px 2px rgba(37, 37, 37, 0.1);
  border-radius: 4px;
  border: none;
  font-size: 16px;
`;

export default RequestInput;
