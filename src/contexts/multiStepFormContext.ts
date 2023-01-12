import { createContext } from "react";
import { IMultiStep } from "./multistep";

export const MultiStepFormContext: any = createContext({
    step: null,
    personalInfo: {},
    planInfo: {},
    setPersonalInfo: () => { },
    setPlanInfo: () => { },
    setStep: () => { },
    next: () => { },
    prev: () => { }
})