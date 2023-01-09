import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

interface IPersonalInfo {
    name: string,
    emailId: string,
    phoneNumber: number | null
}

function PersonalInfo() {
    const initialPersonalInfo: IPersonalInfo = {
        name: "",
        emailId: "",
        phoneNumber: null
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("This field is required"),
        emailId: Yup.string().email('Enter correct format').required("This field is required"),
        phoneNumber: Yup.number().required("This field is required").typeError('Enter correct format')
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
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    <Form>
                        <div className="my-3"> {/* first name */}
                            <label className='text-primary mb-2' htmlFor="name">Name</label>
                            <Field type="text" className="form-control" id="name" name='name' placeholder="e.g. Stephen King" />
                            <ErrorMessage name='name' >
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ ErrorMessage>
                        </div>
                        <div className="my-3">{/* email */}
                            <label className='text-primary mb-2' htmlFor="emailId">Email Address </label>
                            <Field type="email" className="form-control" id="emailId" name='emailId' placeholder="e.g. stephenking@llorem.com" />
                            <ErrorMessage name='emailId'>
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ErrorMessage>
                        </div>
                        <div className="my-3">{/* last name */}
                            <label className='text-primary mb-2' htmlFor="phoneNumber">Phone Number </label>
                            <Field type="text" className="form-control" id="phoneNumber" name='phoneNumber' placeholder="e.g. +1 234 567 890" />
                            <ErrorMessage name='phoneNumber' >
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ErrorMessage>
                        </div>
                        <div className="form-btn text-end">
                            <button className="btn btn-primary">Next Step</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
};

export default PersonalInfo;
