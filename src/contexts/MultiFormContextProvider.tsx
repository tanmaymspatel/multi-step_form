import React, { useEffect, useState } from "react"

import { subsciptionPlanData, addonsFormData } from "../components/data";
import { initialAddOnsValues, initialPersonalInfo, initialPlanFormDetails } from "../components/initialValues";
import { MultiStepFormContext } from "./multiStepFormContext"


interface Props {
    children: React.ReactNode
}

function MultiFormContextProvider({ children }: Props) {

    const [step, setStep] = useState(1);
    const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
    const [planInfo, setPlanInfo] = useState(initialPlanFormDetails);
    const [selectedPlanDetails, setSelectedPlanDetails] = useState({});
    const [selectedAddons, setSelectedAddons] = useState(initialAddOnsValues);
    const [selectedAddonDetails, setSelectedAddonDetails] = useState([]);
    const { plan } = planInfo;
    const { addons } = selectedAddons;

    const next = () => {
        setStep(prev => prev + 1)
    }
    const prev = () => {
        setStep(prev => prev - 1)
    }

    const ctx = {
        step,
        setStep,
        next,
        prev,
        personalInfo,
        setPersonalInfo,
        planInfo,
        setPlanInfo,
        selectedPlanDetails,
        setSelectedAddons,
        selectedAddons,
        selectedAddonDetails
    }

    useEffect(() => {
        const data = (subsciptionPlanData.filter(data => data.id === plan))
        setSelectedPlanDetails(data[0]);
    }, [plan, planInfo, selectedPlanDetails]);

    useEffect(() => {
        const result: any = addonsFormData.filter(ad =>
            addons.some(fd => fd === ad.id));
        setSelectedAddonDetails(result);
    }, [selectedAddons, addons]);

    return (
        <MultiStepFormContext.Provider value={ctx}>
            {children}
        </MultiStepFormContext.Provider>
    )
}

export default MultiFormContextProvider
