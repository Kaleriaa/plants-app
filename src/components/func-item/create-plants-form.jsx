import React, { useEffect, useState } from "react"
import { formData } from "../../lib/form-data-obj"
import { api } from "../../lib/api"
import Form from "../form"
import { getFields } from "./plant-form-config"

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
		<Form onSubmit={onSubmit} title="Создать растение" fields={getFields({ users, sorts })} />
	)
}

export default CreatePlantForm;
