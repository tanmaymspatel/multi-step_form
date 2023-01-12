import { Formik, Form, Field } from "formik";
import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"
import { useContext } from "react";
import { MultiStepFormContext } from "../contexts/multiStepFormContext";
import { initialPlanFormDetails } from "./initialValues";

function PlanForm() {
    const { next, prev, planInfo, setPlanInfo } = useContext<any>(MultiStepFormContext);


    const onSubmit = (values: any) => {
        setPlanInfo(values);
        next();

    }

    return (
        <div>
            <h2 className="form-title text-primary fw-bold"> Select your plan</h2>
            <p className="form-subtitle text-cool-grey">You have the option of monthly or yearly billing.</p>
            <div className="pt-3">
                <Formik
                    initialValues={planInfo}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    {
                        ({ values }: any) => {
                            return (
                                <Form>
                                    <div className="row my-3">
                                        <div className="col-4">
                                            <Field type="radio" className="d-none radio" name='plans' value="arcade" id="arcade" />
                                            <label role="button" className='w-100' htmlFor="arcade">
                                                <div className="card p-3">
                                                    <figure className="plan-icon-image">
                                                        <img src={arcade} alt="Arcade Plan" />
                                                    </figure>
                                                    <div className="mt-5">
                                                        <h6 className="text-primary mb-0">Arcade</h6>
                                                        <small className="text-cool-grey mb-0">{values.isYearly ? "$90/yr" : "$9/mo"}</small>
                                                        {values.isYearly ? <p className="text-primary mb-0">2 months free</p> : null}
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <Field type="radio" className="d-none radio" name='plans' value="advanced" id="advanced" />
                                            <label role="button" className='w-100' htmlFor="advanced">
                                                <div className="card p-3">
                                                    <figure className="plan-icon-image">
                                                        <img src={advanced} alt="Advanced Plan" />
                                                    </figure>
                                                    <div className="mt-5">
                                                        <h6 className="text-primary mb-0">Advanced</h6>
                                                        <small className="text-cool-grey mb-0">{values.isYearly ? "$120/yr" : "$12/mo"}</small>
                                                        {values.isYearly ? <p className="text-primary mb-0">2 months free</p> : null}
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <Field type="radio" className="d-none radio" name='plans' value="pro" id="pro" />
                                            <label role="button" className='w-100' htmlFor="pro">
                                                <div className="card p-3">
                                                    <figure className="plan-icon-image">
                                                        <img src={pro} alt="Pro Plan" />
                                                    </figure>
                                                    <div className="mt-5">
                                                        <h6 className="text-primary mb-0">Pro</h6>
                                                        <small className="text-cool-grey mb-0">{values.isYearly ? "$150/yr" : "$15/mo"}</small>
                                                        {values.isYearly ? <p className="text-primary mb-0">2 months free</p> : null}
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <div className="form-switch d-flex justify-content-center align-items-center bg-magnolia py-3">
                                            <span className={`${values.isYearly ? "text-cool-grey" : "text-primary"} fw-bold`}>Monthly</span>
                                            <Field className="form-check-input mx-3" type="checkbox" role="switch" name="isYearly" />
                                            <span className={`${values.isYearly ? "text-primary" : "text-cool-grey"} fw-bold`}>Yearly</span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between pt-5 mt-5">
                                        <button type="button" className="btn bg-transparent" onClick={() => { prev() }}>Go Back</button>
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

export default PlanForm;
