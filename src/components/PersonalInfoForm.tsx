import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

interface IPersonalInfo {
    name: string,
    emailId: string,
    phoneNumber: string
}

function PersonalInfo() {
    const initialPersonalInfo: IPersonalInfo = {
        name: "",
        emailId: "",
        phoneNumber: ""
    }

    const PersonalInfoValidationSchema = Yup.object().shape({
        name: Yup.string().required("This field is required"),
        emailId: Yup.string().email('Enter correct format').required("This field is required"),
        phoneNumber: Yup.string().required("This field is required")
    });

    const onSubmit = () => {
        console.log("hello");
    }

    return (
        <div>
            <h2 className="form-title text-primary fw-bold"> Personal info</h2>
            <p className="form-subtitle text-cool-grey">Please provide your name, email address, and phone number.</p>
            <div className="pt-3">
                <Formik
                    initialValues={initialPersonalInfo}
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
                                        <Field type="text" className={errors.name && touched.name ? "form-control border border-danger" : "form-control"} id="name" name='name' placeholder="e.g. Stephen King" value={values.name || ""} />
                                        <ErrorMessage name='name' >
                                            {errorMsg => <small className="text-danger fw-bold position-absolute top-0 end-0">{errorMsg}</small>}
                                        </ ErrorMessage>
                                    </div>
                                    <div className="my-3 position-relative">
                                        <label className='text-primary mb-2' htmlFor="emailId">Email Address </label>
                                        <Field type="email" className={errors.emailId && touched.emailId ? "form-control border border-danger" : "form-control"} id="emailId" name='emailId' placeholder="e.g. stephenking@llorem.com" value={values.emailId || ""} />
                                        <ErrorMessage name='emailId'>
                                            {errorMsg => <small className="text-danger fw-bold position-absolute top-0 end-0">{errorMsg}</small>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="my-3 position-relative">
                                        <label className='text-primary mb-2' htmlFor="phoneNumber">Phone Number </label>
                                        <Field type="text" className={errors.phoneNumber && touched.phoneNumber ? "form-control border border-danger" : "form-control"} id="phoneNumber" name='phoneNumber' placeholder="e.g. +1 234 567 890" value={values.phoneNumber || ""} />
                                        <ErrorMessage name='phoneNumber' >
                                            {errorMsg => <small className="text-danger fw-bold position-absolute top-0 end-0">{errorMsg}</small>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-btn text-end">
                                        <button type="submit" className="btn btn-primary">Next Step</button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    )
};

export default PersonalInfo;
