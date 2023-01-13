import { Formik, Form, Field } from "formik";
import { useContext, useState } from "react";
import { MultiStepFormContext } from "../contexts/multiStepFormContext";

import { addonsFormData } from './data'

function AddOns() {
    const { next, prev, selectedAddons, setSelectedAddons, planInfo } = useContext<any>(MultiStepFormContext);
    const { isYearly } = planInfo;
    const [isonlineServicesChecked, setIsOnlineServicesChecked] = useState(false);
    const [isonlargerStorageChecked, setIsLargerStorageChecked] = useState(false);
    const [isCustomProfileChecked, setIsCustomProfileChecked] = useState(false);

    const onCheckClick = (checkString: string) => {
        switch (checkString) {
            case "onlineService":
                setIsOnlineServicesChecked(prev => !prev);
                return;
            case "largerStorage":
                setIsLargerStorageChecked(prev => !prev);
                return;
            case "customizableProfile":
                setIsCustomProfileChecked(prev => !prev);
                return;
            default:
                return;
        }
    }


    const onSubmit = (values: any) => {
        setSelectedAddons(values);
        next();
    }

    return (
        <div>
            <h2 className="form-title text-primary fw-bold"> Pick add-ons</h2>
            <p className="form-subtitle text-cool-grey">Add-ons help enhanhance your gaming experience.</p>
            <div className="pt-3">
                <Formik
                    initialValues={selectedAddons}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    {({ dirty, values }: any) => {
                        return (
                            <Form className="addons-form">
                                <div className={`${dirty && isonlineServicesChecked ? "border-secondary" : null} check-row transition my-3 cursor-pointer rounded-3 p-4`}>
                                    <div role="button" className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field role="button" name="addons" className="form-check-input" type="checkbox" id="onlineServices" value="onlineService" onClick={() => onCheckClick("onlineService")} />
                                        </div>
                                        <label className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="onlineServices">
                                            <div>
                                                <h6 className="mb-1">Online Services</h6>
                                                <small className="text-cool-grey">Access to multiplayer games</small>
                                            </div>
                                            <p className="mb-0">{isYearly ? "+$10/yr" : "+$1/mo"}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className={`${dirty && isonlargerStorageChecked ? "border-secondary" : null} check-row transition my-3 cursor-pointer rounded-3 p-4`}>
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field role="button" name="addons" className="form-check-input" type="checkbox" id="largerStorage" value="largerStorage" onClick={() => onCheckClick("largerStorage")} />
                                        </div>
                                        <label className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="largerStorage">
                                            <div>
                                                <h6 className="mb-1">Larger Storage</h6>
                                                <small className="text-cool-grey">Extra 1Tb of cloud save</small>
                                            </div>
                                            <p className="mb-0">{isYearly ? "+$20/yr" : "+$2/mo"}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className={`${dirty && isCustomProfileChecked ? "border-secondary" : null} check-row transition my-3 cursor-pointer rounded-3 p-4`}>
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <div>
                                            <Field role="button" name="addons" className="form-check-input" type="checkbox" id="customizeProfile" value="customizableProfile" onClick={() => onCheckClick("customizableProfile")} />
                                        </div>
                                        <label className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor="customizeProfile">
                                            <div>
                                                <h6 className="mb-1">Customizable profile</h6>
                                                <small className="text-cool-grey">Custom theme on your profile</small>
                                            </div>
                                            <p className="mb-0">{isYearly ? "+$20/yr" : "+$2/mo"}</p>
                                        </label>
                                    </div>
                                </div>
                                {
                                    // addonsFormData.map(data => {
                                    //     return (
                                    //         <div className="my-3 border rounded-3 p-4" key={data.id}>
                                    //             {/* <div className={`${dirty && isChecked ? "border-secondary" : null} my-3 border rounded-3 p-4`} key={data.id}> */}
                                    //             <div className="form-check d-flex justify-content-between align-items-center">
                                    //                 <div>
                                    //                     <Field name="addons" className="form-check-input" type="checkbox" id={data.id} value={data.id} onClick={() => onCheckClick()} />
                                    //                 </div>
                                    //                 <label role="button" className="form-check-label flex-grow-1 ms-3 d-flex justify-content-between align-items-center" htmlFor={data.id}>
                                    //                     <div>
                                    //                         <h6 className="mb-1">{data.name}</h6>
                                    //                         <small className="text-cool-grey">{data.details}</small>
                                    //                     </div>
                                    //                     <p className="mb-0">{isYearlySubscription ? data.charges[0].yearly : data.charges[0].monthly}</p>
                                    //                 </label>
                                    //             </div>
                                    //         </div>
                                    //     )
                                    // })
                                }
                                <div className="d-flex align-items-center justify-content-between pt-5 mt-3">
                                    <button type="button" className="btn bg-transparent border-0" onClick={() => { prev(); }}>Go Back</button>
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
