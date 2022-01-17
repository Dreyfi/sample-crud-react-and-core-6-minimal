import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import PatientTableRow from "./PatientTableRow";

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios.get(
            'https://localhost:7034/patients',

        ).then(({ data }) => {
            setPatients(data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const dataTable = () => {
        return patients.map((res, i) => {
            return <PatientTableRow obj={res} key={i} />;
        });
    }

    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Celphone</th>
                        <th>DateOfBirth</th>
                        <th>Gender</th>
                        <th>Rg</th>
                        <th>Cpf</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Address</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                    </tr>
                </thead>
                <tbody>{dataTable()}</tbody>
            </Table>
        </div>
    );

};

export default PatientList;