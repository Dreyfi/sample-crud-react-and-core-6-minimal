import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const PatientForm = (props) => {

    const validationSchema = Yup.object().shape({
        id: Yup.number(),
        name: Yup.string().required("Required"),
        celphone: Yup.string().required("Required"),
        dateOfBirth: Yup.string().required("Required"),
        gender: Yup.string().required("Required"),
        rg: Yup.string().required("Required"),
        cpf: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        status: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        updatedAt: Yup.string().required("Required"),
        createdAt: Yup.string().required("Required"),
    });
    
    return (
        <div className="form-wrapper">
         
         <Formik {...props} validationSchema={validationSchema}>
            <Form>
                <FormGroup className="mb-3">
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" placeholder="Name" className="form-control"/>
                    <ErrorMessage 
                        name="name" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <label htmlFor="celphone">Celphone</label>
                    <Field name="celphone" type="text" placeholder="Celphone" className="form-control"/>
                    <ErrorMessage 
                        name="celphone" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <Field name="dateOfBirth" type="text" placeholder="Date Of Birth" className="form-control"/>
                    <ErrorMessage 
                        name="dateOfBirth" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <label htmlFor="gender">Gender</label>
                    <Field name="gender" type="text" placeholder="Gender" className="form-control"/>
                    <ErrorMessage 
                        name="gender" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <label htmlFor="rg">RG</label>
                    <Field name="rg" type="text" placeholder="RG" className="form-control"/>
                    <ErrorMessage 
                        name="rg" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <label htmlFor="cpf">CPF</label>
                    <Field name="cpf" type="text" placeholder="CPF" className="form-control"/>
                    <ErrorMessage 
                        name="cpf" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <label htmlFor="email">E-mail</label>
                    <Field name="email" type="email" placeholder="E-mail" className="form-control"/>
                    <ErrorMessage 
                        name="email" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <label htmlFor="status">Status</label>
                    <Field name="status" type="text" placeholder="Status" className="form-control"/>
                    <ErrorMessage 
                        name="status" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <label htmlFor="address">Address</label>
                    <Field name="address" type="text" placeholder="Address" className="form-control"/>
                    <ErrorMessage 
                        name="address" 
                        className="d-block invalid-feedback"
                        component="span"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <div className="d-grid gap-2">
                        <Button variant="danger" size="lg" type="submit">
                            {props.children}
                        </Button>
                    </div>
                </FormGroup>
            </Form>
         </Formik>

        </div>
    );
  };
 
  export default PatientForm;