import React from 'react'
import styled from 'styled-components'
import AppHeader from '../app-header'
import TableList from '../view-tables'
import RequestInput from '../request'
import { Wrapper } from '../style/wrapper'
import FuncForPlant from '../func-item'

const App = () => {
    return (
        <>
            <Container>
                <AppHeader />
            </Container>
            <Container>
                <RequestInput />
            </Container>
            <Container>
                <Wrapper>
                    <TableList />
                </Wrapper>
            </Container>
            <Container>
                <FuncForPlant />
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 800px;
    margin: 0 auto;
`

export default App