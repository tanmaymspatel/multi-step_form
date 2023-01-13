import { createContext } from "react";
import { IMultiStep } from "./multistep";

export const MultiStepFormContext: any = createContext({
    step: null,
    personalInfo: {},
    planInfo: {},
    setPersonalInfo: () => { },
    setSelectedAddons: () => { },
    setPlanInfo: () => { },
    setStep: () => { },
    next: () => { },
    prev: () => { },
    selectedPlanDetails: {},
    selectedAddons: [],
    selectedAddonDetails: []
})