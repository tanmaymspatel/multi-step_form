import { Formik, Form, Field } from "formik";
import { useState } from "react";

function AddOns() {

    const [isYearlySubscription] = useState(false)
    const initialAddOnsValues = {
        addons: []
    }
    const onSubmit = () => {
        console.log("hello");
    }
    return (
        <div>
            <h2 className="form-title text-primary fw-bold"> Pick add-ons</h2>
            <p className="form-subtitle text-cool-grey">Add-ons help enhanhance your gaming experience.</p>
            <div className="pt-3">
                <Formik
                    initialValues={initialAddOnsValues}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    {({ values }: any) => {
                        console.log(values);

                        return (
                            <Form>
                                <div className="my-3 border rounded-3 p-4">
                                    <div role="button" className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field name="addons" className="form-check-input" type="checkbox" id="onlineServices" value="Online service" />
                                        </div>
                                        <label role="button" className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="onlineServices">
                                            <div>
                                                <h6 className="mb-1">Online Services</h6>
                                                <small>Access to multiplayer games</small>
                                            </div>
                                            <p className="mb-0">{isYearlySubscription ? "+$10/yr" : "+$1/mo"}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check my-3 border rounded-3 p-4">
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field name="addons" className="form-check-input" type="checkbox" id="largerStorage" value="Larger storage" />
                                        </div>
                                        <label role="button" className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="largerStorage">
                                            <div>
                                                <h6 className="mb-1">Larger Storage</h6>
                                                <small>Extra 1Tb of cloud save</small>
                                            </div>
                                            <p className="mb-0">{isYearlySubscription ? "+$20/yr" : "+$2/mo"}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check my-3 border rounded-3 p-4">
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field name="addons" className="form-check-input" type="checkbox" id="customizeProfile" value="Customizable profile" />
                                        </div>
                                        <label role="button" className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="customizeProfile">
                                            <div>
                                                <h6 className="mb-1">Customizable profile</h6>
                                                <small>Custom theme on your profile</small>
                                            </div>
                                            <p className="mb-0">{isYearlySubscription ? "+$20/yr" : "+$2/mo"}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between pt-5 mt-3">
                                    <button type="button" className="btn bg-transparent border-0">Go Back</button>
                                    <button type="submit" className="btn btn-primary">Next Step</button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>

            </div>
        </div>
    )
}

export default AddOns
