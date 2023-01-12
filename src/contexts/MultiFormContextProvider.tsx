import React, { useEffect, useState } from "react"
import AddOns from "../components/AddOns";
import FinishingUp from "../components/FinishingUp";
import { initialPersonalInfo, initialPlanFormDetails } from "../components/initialValues";
import PersonalInfoForm from "../components/PersonalInfoForm";
import PlanForm from "../components/PlanForm";
import { MultiStepFormContext } from "./multiStepFormContext"

interface Props {
    children: React.ReactNode
}

function MultiFormContextProvider({ children }: Props) {

    const [step, setStep] = useState(1);
    const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
    const [planInfo, setPlanInfo] = useState(initialPlanFormDetails);

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
        setPlanInfo
    }

    useEffect(() =>
        console.log({ personalInfo }, { planInfo })
        , [personalInfo, planInfo]);

    return (
        <MultiStepFormContext.Provider value={ctx}>
            {children}
        </MultiStepFormContext.Provider>
    )
}

export default MultiFormContextProvider
