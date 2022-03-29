import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from 'yup';

function Forms() {

    const formInitialSchema = {
        firstName: '',
        email: ''
    }

    const formValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('Name is required'),
        email: Yup.string().required('email is required').email("Please enter valid email")
    })

    const handleFormSubmit = (values: any) => {
        console.log("Submitted values", values)
    }

    return (
        <>

            <Formik initialValues={formInitialSchema}
                validationSchema={formValidationSchema}
                onSubmit={values => handleFormSubmit(values)}>
                <Form>
                    <div>
                        <Field type="text" name="firstName" placeholder="Enter your Name" />
                        <p className="text-danger"><ErrorMessage name="firstName"/></p>
                    </div>
                    <div>
                        <Field type="text" name="email" placeholder="Enter your email" />
                        <p className="text-danger"><ErrorMessage name="email"/></p>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit values</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}

export default Forms