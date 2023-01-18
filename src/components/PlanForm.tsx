import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from 'yup';

import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"
import { MultiStepFormContext } from "../contexts/multiStepFormContext";

function PlanForm() {
    const { next, prev, planInfo, setPlanInfo } = useContext<any>(MultiStepFormContext);

    const onSubmit = (values: any) => {
        setPlanInfo(values);
        next();
    }

    const planFormValidationSchema = Yup.object().shape({
        plan: Yup.string().required("This Field is required!")
    })
    return (
        <div className="form-container">
            <div className="position-relative">
                <h2 className="form-title text-primary fw-bold"> Select your plan</h2>
                <p className="form-subtitle text-cool-grey">You have the option of monthly or yearly billing.</p>
                <div className="pt-0 pt-md-3">
                    <Formik
                        initialValues={planInfo}
                        onSubmit={onSubmit}
                        validationSchema={planFormValidationSchema}
                        enableReinitialize
                    >
                        {
                            ({ values }: any) => {
                                return (
                                    <Form>
                                        <div className="row my-3 position-relative">
                                            <div className="col-md-4 ">
                                                <Field type="radio" className="d-none radio" name='plan' value="arcade" id="arcade" />
                                                <label role="button" className='w-100' htmlFor="arcade">
                                                    <div className="card my-1 my-md-0 p-3 flex-row flex-md-column">
                                                        <figure className="plan-icon-image">
                                                            <img className="img-fluid" src={arcade} alt="Arcade Plan" />
                                                        </figure>
                                                        <div className="mt-0 mt-md-5 ms-3 ms-md-0">
                                                            <h6 className="text-primary mb-0">Arcade</h6>
                                                            <small className="text-cool-grey mb-0">{values.isYearly ? "$90/yr" : "$9/mo"}</small>
                                                            {values.isYearly ? <p className="text-primary mb-0">2 months free</p> : null}
                                                        </div>
                                                    </div>
                                                </label>

                                            </div>
                                            <div className="col-md-4">
                                                <Field type="radio" className="d-none radio" name='plan' value="advanced" id="advanced" />
                                                <label role="button" className='w-100' htmlFor="advanced">
                                                    <div className="card my-1 my-md-0 p-3 flex-row flex-md-column">
                                                        <figure className="plan-icon-image">
                                                            <img className="img-fluid" src={advanced} alt="Advanced Plan" />
                                                        </figure>
                                                        <div className="mt-0 mt-md-5 ms-3 ms-md-0">
                                                            <h6 className="text-primary mb-0">Advanced</h6>
                                                            <small className="text-cool-grey mb-0">{values.isYearly ? "$120/yr" : "$12/mo"}</small>
                                                            {values.isYearly ? <p className="text-primary mb-0">2 months free</p> : null}
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <Field type="radio" className="d-none radio" name='plan' value="pro" id="pro" />
                                                <label role="button" className='w-100' htmlFor="pro">
                                                    <div className="card my-1 my-md-0 p-3 flex-row flex-md-column">
                                                        <figure className="plan-icon-image">
                                                            <img className="img-fluid" src={pro} alt="Pro Plan" />
                                                        </figure>
                                                        <div className="mt-0 mt-md-5 ms-3 ms-md-0">
                                                            <h6 className="text-primary mb-0">Pro</h6>
                                                            <small className="text-cool-grey mb-0">{values.isYearly ? "$150/yr" : "$15/mo"}</small>
                                                            {values.isYearly ? <p className="text-primary mb-0">2 months free</p> : null}
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <ErrorMessage name='plan'>
                                                {errorMsg => <small className="subsciption-plan-err text-danger fw-bold text-nowrap position-absolute">{errorMsg}</small>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="my-4">
                                            <div className="form-switch d-flex justify-content-center align-items-center bg-magnolia py-3">
                                                <span className={`${values.isYearly ? "text-cool-grey" : "text-primary"} fw-bold`}>Monthly</span>
                                                <Field className="form-check-input mx-3" type="checkbox" role="switch" name="isYearly" />
                                                <span className={`${values.isYearly ? "text-primary" : "text-cool-grey"} fw-bold`}>Yearly</span>
                                            </div>
                                        </div>

                                        <div className="form-btn plan-form-btn d-flex justify-content-between">
                                            <button type="button" className="btn bg-transparent ms-4 ms-md-0" onClick={() => { prev() }}>Go Back</button>
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

export default PlanForm;
