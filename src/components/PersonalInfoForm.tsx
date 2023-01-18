import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from 'yup';

import { MultiStepFormContext } from "../contexts/multiStepFormContext";

const PHONE_NUMBER_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

function PersonalInfo() {

    const { next, personalInfo, setPersonalInfo } = useContext<any>(MultiStepFormContext);

    const PersonalInfoValidationSchema = Yup.object().shape({
        name: Yup.string().required("This field is required"),
        emailId: Yup.string().email('Enter correct format').required("This field is required"),
        phoneNumber: Yup.string().required("This field is required").matches(PHONE_NUMBER_REGEX, "Enter Valid Format")
    });

    const onSubmit = (values: any) => {
        setPersonalInfo(values);
        next();
    }

    return (
        <div className="form-container">
            <div className="position-relative">
                <h2 className="form-title text-primary fw-bold"> Personal info</h2>
                <p className="text-cool-grey">Please provide your name, email address, and phone number.</p>
                <div className="pt-0 pt-md-3">
                    <Formik
                        initialValues={personalInfo}
                        onSubmit={onSubmit}
                        validationSchema={PersonalInfoValidationSchema}
                        enableReinitialize
                    >
                        {
                            ({ errors, touched, values }: any) => {
                                return (
                                    <Form>
                                        <div className="my-3 position-relative">
                                            <label className='text-primary mb-2' htmlFor="name">Name</label>
                                            <Field type="text" className={`${errors.name && touched.name ? " border border-danger" : null} form-control input-row cursor-pointer`} id="name" name='name' placeholder="e.g. Stephen King" value={values.name || ""} />
                                            <ErrorMessage name='name' >
                                                {errorMsg => <small className="text-danger fw-bold position-absolute top-0 end-0">{errorMsg}</small>}
                                            </ ErrorMessage>
                                        </div>
                                        <div className="my-3 position-relative">
                                            <label className='text-primary mb-2' htmlFor="emailId">Email Address </label>
                                            <Field type="email" className={`${errors.emailId && touched.emailId ? " border border-danger" : null} form-control input-row cursor-pointer`} id="emailId" name='emailId' placeholder="e.g. stephenking@llorem.com" value={values.emailId || ""} />
                                            <ErrorMessage name='emailId'>
                                                {errorMsg => <small className="text-danger fw-bold position-absolute top-0 end-0">{errorMsg}</small>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="my-3 position-relative">
                                            <label className='text-primary mb-2' htmlFor="phoneNumber">Phone Number </label>
                                            <Field type="text" className={`${errors.phoneNumber && touched.phoneNumber ? " border border-danger" : null} form-control input-row cursor-pointer`} id="phoneNumber" name='phoneNumber' placeholder="e.g. 9999999999" value={values.phoneNumber || ""} />
                                            <ErrorMessage name='phoneNumber' >
                                                {errorMsg => <small className="text-danger fw-bold position-absolute top-0 end-0">{errorMsg}</small>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="form-btn personal-form-btn text-end">
                                            <button type="submit" className="btn btn-primary">Next Step</button>
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
};

export default PersonalInfo;
