import { Formik, Form, Field } from "formik";
import { useState } from "react";

import { addonsFormData } from './data'

function AddOns() {

    const [isChecked, setIsChecked] = useState(false);

    const onCheckClick = () => {
        setIsChecked(prev => !prev)
    }

    const [isYearlySubscription] = useState(false);
    const initialAddOnsValues = {
        addons: []
    }
    const onSubmit = (values: any) => {
        console.log(values);
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
                    {({ dirty, values }: any) => {
                        return (
                            <Form className="addons-form">
                                {/* <div className={`${dirty ? "border-secondary" : null} my-3 border rounded-3 p-4`}>
                                    <div role="button" className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field name="addons" className="form-check-input" type="checkbox" id="onlineServices" value="Online service" />
                                        </div>
                                        <label role="button" className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="onlineServices">
                                            <div>
                                                <h6 className="mb-1">Online Services</h6>
                                                <small className="text-cool-grey">Access to multiplayer games</small>
                                            </div>
                                            <p className="mb-0">{isYearlySubscription ? "+$10/yr" : "+$1/mo"}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="my-3 border rounded-3 p-4">
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field name="addons" className="form-check-input" type="checkbox" id="largerStorage" value="Larger storage" />
                                        </div>
                                        <label role="button" className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="largerStorage">
                                            <div>
                                                <h6 className="mb-1">Larger Storage</h6>
                                                <small className="text-cool-grey">Extra 1Tb of cloud save</small>
                                            </div>
                                            <p className="mb-0">{isYearlySubscription ? "+$20/yr" : "+$2/mo"}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="my-3 border rounded-3 p-4">
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field name="addons" className="form-check-input" type="checkbox" id="customizeProfile" value="Customizable profile" />
                                        </div>
                                        <label role="button" className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="customizeProfile">
                                            <div>
                                                <h6 className="mb-1">Customizable profile</h6>
                                                <small className="text-cool-grey">Custom theme on your profile</small>
                                            </div>
                                            <p className="mb-0">{isYearlySubscription ? "+$20/yr" : "+$2/mo"}</p>
                                        </label>
                                    </div>
                                </div> */}
                                {addonsFormData.map(data => {
                                    return (
                                        <div className="my-3 border rounded-3 p-4" key={data.id}>
                                            {/* <div className={`${dirty && isChecked ? "border-secondary" : null} my-3 border rounded-3 p-4`} key={data.id}> */}
                                            <div className="form-check d-flex justify-content-between align-items-center">
                                                <div>
                                                    <Field name="addons" className="form-check-input" type="checkbox" id={data.id} value={JSON.stringify(data)} onClick={() => onCheckClick()} />
                                                </div>
                                                <label role="button" className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor={data.id}>
                                                    <div>
                                                        <h6 className="mb-1">{data.name}</h6>
                                                        <small className="text-cool-grey">{data.details}</small>
                                                    </div>
                                                    <p className="mb-0">{isYearlySubscription ? data.charges[0].yearly : data.charges[0].monthly}</p>
                                                </label>
                                            </div>
                                        </div>
                                    )
                                })}
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
