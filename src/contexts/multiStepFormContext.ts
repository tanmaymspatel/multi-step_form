import { createContext } from "react";
// context for multistep form
export const MultiStepFormContext = createContext({
    step: 1,
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
});