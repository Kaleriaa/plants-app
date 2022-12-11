import React, { useState, useCallback } from "react"
import ToggleButton from "../toggle-button"
import styled from "styled-components"
import { api } from "../../lib/api"

const RequestInput = () => {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState("")

    const executeQuery = useCallback(async () => {
        const res = (await api.post("/plant/custom", { data: query })).data
        setResult(JSON.stringify(res, null, 4))
    }, [query, setResult])

    return (
        <Column>
            <Row>
                <InputForQuery
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Write your request"
                />
                <ToggleButton onClick={executeQuery} name="Send" />
            </Row>
            {result && <ResultBlock>{result}</ResultBlock>}
        </Column>
    )
}
const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const ResultBlock = styled.pre`
    width: 800px;
    max-height: 300px;
    overflow-y: auto;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(37, 37, 37, 0.1);
    border-radius: 7px;
    padding: 15px 10px;
`
const InputForQuery = styled.input`
    width: 80%;
    height: 38px;
    margin-top: 15px;
    box-shadow: 2px 2px 2px 2px rgba(37, 37, 37, 0.1);
    border-radius: 4px;
    border: none;
    font-size: 16px;
`

// const t = () => <InputSelect className={styledInputSelectClassName} />
// const styledInputSelectClassName = css`
// 	width: 30;
// `

export default RequestInput
