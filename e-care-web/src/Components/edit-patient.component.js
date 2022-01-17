import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientForm from "./PatientForm";
import { useParams, useNavigate } from "react-router-dom";

const EditPatient = (props) => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [formValues, setFormValues] = useState({
        id: '',
        name: '',
        celphone: '',
        dateOfBirth: '',
        gender: '',
        rg: '',
        cpf: '',
        email: '',
        status: '',
        address: '',
        updatedAt: '',
        createdAt: ''
    });

    const onSubmit = (patientObject) => {
        axios
            .put(
                "https://localhost:7034/patients/"
                + id,
                patientObject
            )
            .then((response) => {
                if(response.status === 200) {
                    alert("Patient successfully updated");
                    navigate("/patient-list");
                } else Promise.reject();
            })
            .catch((error) => alert("Something went wrong"));
    }

    useEffect(() => {
        axios
            .get(
                "https://localhost:7034/patients/"
                + id
            )
            .then((response) => {
                const { 
                    name,
                    celphone,
                    dateOfBirth,
                    gender,
                    rg,
                    cpf,
                    email,
                    status,
                    address,
                    updatedAt,
                    createdAt,
                 } = response.data;
                setFormValues({ 
                    name,
                    celphone,
                    dateOfBirth,
                    gender,
                    rg,
                    cpf,
                    email,
                    status,
                    address,
                    updatedAt,
                    createdAt, });
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <PatientForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Update Patient
        </PatientForm>
    );

}

export default EditPatient;