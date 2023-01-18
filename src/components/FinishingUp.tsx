import { useContext, useEffect, useState } from "react"

import { MultiStepFormContext } from "../contexts/multiStepFormContext"



function FinishingUp() {

    const { next, prev, selectedPlanDetails, planInfo, setStep, selectedAddonDetails } = useContext<any>(MultiStepFormContext);
    const { planName, price } = selectedPlanDetails;
    const [addonCharges, setaddonCharges] = useState(0);
    const { isYearly } = planInfo;

    console.log(selectedAddonDetails);

    useEffect(() => {
        const charges: any = (selectedAddonDetails.map((ad: any) => ad.charges))
        let addonCharges = 0;
        charges?.forEach((charges: any) => {
            if (isYearly) addonCharges += charges.yearly
            else addonCharges += charges.monthly
        })
        setaddonCharges(addonCharges);
    }, [isYearly, selectedAddonDetails])

    return (
        <div className="form-container">
            <div className="position-relative">
                <h2 className="form-title text-primary fw-bold"> Finishing up</h2>
                <p className="form-subtitle text-cool-grey">Double check everything looks OK before confirming.</p>
                <div className="mt-5">
                    <div className="px-4 py-3 bg-magnolia">
                        <div className='d-flex align-items-center justify-content-between border-bottom border-light-grey pb-2'>
                            <div>
                                <h6 className="text-primary"><span>{planName}</span> <span>{isYearly ? "(Yearly)" : "(Monthly)"}</span></h6>
                                <p role="button" className='change-plan text-decoration-underline transition' onClick={() => setStep(2)}>Change</p>
                            </div>
                            <h6 className="text-primary">{isYearly ? `$${price.yearly}/yr` : `$${price.monthly}/mo`}</h6>
                        </div>
                        <div className="mt-4">
                            {
                                selectedAddonDetails?.map((addon: any) => {
                                    return (
                                        <div className="d-flex align-items-center justify-content-between" key={addon.id}>
                                            <p className="text-cool-grey">{addon.name}</p>
                                            <p className="text-cool-grey">{isYearly ? `+$${addon.charges.yearly}/yr` : `+$${addon.charges.monthly}/mo`}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between m-4">
                        <p className="text-cool-grey">
                            <span>Total </span>
                            <span>(per {isYearly ? "year" : "month"})</span>
                        </p>
                        <h5 className="text-secondary">{isYearly ? `+$${price.yearly + addonCharges}/yr` : `+$${price.monthly + addonCharges}/mo`}</h5>
                    </div>
                </div>
                <div className="form-btn finish-form-btn d-flex justify-content-between">
                    <button type="button" className="btn bg-transparent border-0 ms-4 ms-md-0" onClick={() => prev()}>Go Back</button>
                    <button type="button" className="btn btn-secondary" onClick={() => next()}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default FinishingUp
