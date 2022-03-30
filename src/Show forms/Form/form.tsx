import { ErrorMessage, Field, Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

const FillForm = () => {

    const handleSubmit = ({ values }: any) => {
        console.log(values, "val");
    }

    const formValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('Name is required'),
        lastName: Yup.string().required('Name is required'),
        Country: Yup.string().required("Country Required"),
        State: Yup.string().required("State Required"),
        City: Yup.string().required("City Required"),
        Checked: Yup.array().min(1).required("Required"),
        gender: Yup.string().oneOf(["one", "two"]).required("Required")
    })

    
    return (
        <>
            {/* <form className="main_div">
                <div className="child_div">
                    <div className="fInput">
                        <label className="fname">First Name:</label> <input type="text" onChange={(e) => setFname(e.target.value)} value={fname} placeholder="Enter Your First Name" />
                    </div>
                    <div className="lInput">
                        <label className="lname">Last Name:</label> <input type="text" onChange={(e) => setLname(e.target.value)} value={lname} placeholder="Enter Your Last Name" />
                    </div>
                    <div className="addInput">
                        <label className="add">Address:</label>
                        <select onChange={(e) => setCountry(e.target.value)} value={country}>
                            <option>Country</option>
                            <option>India</option>
                        </select>
                        <select onChange={(e) => setState(e.target.value)} value={state}>
                            <option>State</option>
                            <option>Gujarat</option>
                        </select>
                        <select onChange={(e) => setCity(e.target.value)} value={city}>
                            <option>City</option>
                            <option>Ahmedabad</option>
                        </select>
                    </div>
                    <div className="pInput">
                        <label className="post">Post:</label>
                        <input type="checkbox" onChange={(e) => setPost1(e.target.value)} value="FE" />Frontend(FE)
                        <input type="checkbox" onChange={(e) => setPost2(e.target.value)} value="BE" />Backend(BE)
                        <input type="checkbox" onChange={(e) => setPost3(e.target.value)} value="T" />Tester(T)
                    </div>
                    <div className="gInput">
                        <label className="gender">Gender:</label>
                        <input type="radio" onChange={(e) => setGender(e.target.value)} value="Male" name="gender" />Male
                        <input type="radio" onChange={(e) => setGender(e.target.value)} value="Female" name="gender" />Female
                    </div>

                </div>
            </form>
             */}
            <Formik
                initialValues={{ firstName: '', lastName: '', Country: "", State: "", City: "", Checked: [], gender: '' }}
                validationSchema={formValidationSchema}
                onSubmit={values => handleSubmit(values)}>
                <Form>
                    <div>
                        <Field name="firstName" type="text" placeholder="First Name" />
                        <p className="text-danger"><ErrorMessage name="firstName" /></p>
                    </div>

                    <div>
                        <Field name="lastName" type="text" placeholder="Last Name" />
                        <p className="text-danger"><ErrorMessage name="lastName" /></p>
                    </div>

                    <div>
                        <Field as="select" name="Country" className="form-inline">
                            <option value="Country" >Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                        </Field>
                        <p className="text-danger"><ErrorMessage name="Country" /></p>

                        <Field as="select" name="State" className="form-inline">
                            <option value="State" >State</option>
                            <option value="Gujarat">Gujarat</option>
                        </Field>
                        <p className="text-danger"><ErrorMessage name="State" /></p>

                        <Field as="select" name="City" className="form-inline">
                            <option value="City" >City</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                        </Field>
                        <p className="text-danger"><ErrorMessage name="City" /></p>
                    </div>

                    <div>
                        <label className="form-inline">
                            <Field type="checkbox" name="Checked" value="One" />Frontend(FE)
                            <Field type="checkbox" name="Checked" value="Two" />Backend(BE)
                            <Field type="checkbox" name="Checked" value="Three" />Tester(T)
                            <p className="text-danger"><ErrorMessage name="Checked" /></p>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field type="radio" name="gender" value="one" /> Male
                            <Field type="radio" name="gender" value="two" /> Female
                            <p className="text-danger"><ErrorMessage name="gender" /></p>
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </Form>
            </Formik>
        </>
    )
}
export default FillForm