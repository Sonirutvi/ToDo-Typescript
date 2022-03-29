import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';

function Forms() {



    const formValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('Name is required'),
        email: Yup.string().required('email is required').email("Please enter valid email")
    })

    

    return (
        <>

            <Formik initialValues={{ firstName: "", email: '' }}
                validationSchema={formValidationSchema}
                onSubmit={(values,{setSubmitting, resetForm})=>{
                    setSubmitting(true);

                    setTimeout(() => {
                       alert(JSON.stringify(values,null,2));
                       resetForm();
                       setSubmitting(false)
                    },500);
                }}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <Field type="text" value={values.firstName} onBlur={handleBlur} name="firstName" placeholder="Enter your Name" onChange={handleChange} />
                            <p className="text-danger"><ErrorMessage name="firstName" /></p>
                        </div>
                        <div>
                            <Field type="text" name="email" placeholder="Enter your email" />
                            <p className="text-danger"><ErrorMessage name="email" /></p>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit values</button>
                        </div>
                    </Form>
                )}

            </Formik>

        </>
    )
}

export default Forms