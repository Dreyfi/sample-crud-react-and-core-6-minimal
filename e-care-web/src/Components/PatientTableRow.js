
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const PatientTableRow = (props) => {

    const { 
        id,
        name,
        celphone,
        dateOfBirth,
        gender,
        rg,
        cpf,
        email,
        status,
        address,
        createdAt,
        updatedAt } = props.obj;

    const deletePatient = () => {
        console.log(id)
        axios.delete(
            'https://localhost:7034/patients/' + id
        ).then((response) => {
            if(response.status === 200) {
                alert('Patient successfully deleted');
                window.location.reload();
            } else {
                Promise.reject();
            }
        }).catch((err) => alert('Something went wrong'));
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{celphone}</td>
            <td>{dateOfBirth}</td>
            <td>{gender}</td>
            <td>{rg}</td>
            <td>{cpf}</td>
            <td>{email}</td>
            <td>{status}</td>
            <td>{address}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
            <td>
                <Link className="edit-link" to={"/edit-patient/" + id}>
                    Edit
                </Link>
                <Button onClick={deletePatient} size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );

}

export default PatientTableRow;