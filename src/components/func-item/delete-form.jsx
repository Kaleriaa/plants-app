import React, { useEffect, useState } from "react"
import { FormHeader } from './create-form-style'
import trash from './recycle-bin.png'
import { api } from "../../lib/api"
import styled from "styled-components"

const DeletePlantForm = () => {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        api.get("/plant").then((d) => setPlants(d.data))
    }, [])
    const onDelete = (id) => {
        api.delete(`/plant/${id}`)
            .then(() => setPlants((prev) => prev.filter(p => p.id !== id)))
    }
    console.log(plants)
    return (
        <DeleteForm>
            <FormHeader>Удалить растение</FormHeader>
            {plants.map(({ id, name, state, dateGrown }) =>
                <Wrapper key={id}>
                    <Plant>
                        {`${name} (${state}: ${new Date(dateGrown)
                            .toLocaleString('ru', {
                                year: 'numeric', month: 'long', day: 'numeric'
                            })})`}
                    </Plant>
                    <Trash width={25} height={25}
                        src={trash} alt="trash"
                        onClick={() => onDelete(id)} />
                </Wrapper>)}
        </DeleteForm>
    )
}
const DeleteForm = styled.div`
    width: 800px;
    min-height: 200px;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(37, 37, 37, 0.1);
    border-radius: 7px;
    padding: 15px 15px;
`
const Plant = styled.span`
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
`
const Trash = styled.img`
    cursor: pointer;
`
const Wrapper = styled.div`
    width: 100%;
    margin: 0px auto;
    margin-top: 10px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    border-radius: 5px;
    border: 2px solid #ebeee7;
`

export default DeletePlantForm