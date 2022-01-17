import React, { useState, useEffect } from "react";
import axios from 'axios';
import PatientForm from "./PatientForm";

const CreatePatient = () => {
    const [formValues, setFormValues] 
        = useState({ 
            name: '',
            celphone: '',
            dateOfBirth: '',
            gender: '',
            rg: '',
            cpf: '',
            email: '',
            status: '',
            address: '', 
        });

    const onSubmit = patientObject => {
        axios.post(
            'https://localhost:7034/patients',
                patientObject
        ).then(response => {
            if(response.status === 200) {
                alert('Patient successfully created');
            } else {
                Promise.reject()
            }
        }).catch(err => alert('Something went wrong'));
    }

    return (
        <PatientForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Patient
        </PatientForm>
    );
}

export default CreatePatient;