// interface for multiform context
export interface IMultiStep {
    step: number,
    personalInfo: {},
    planInfo: {},
    setPersonalInfo: React.SetStateAction<any>
    setSelectedAddons: React.SetStateAction<any>,
    setPlanInfo: React.SetStateAction<any>,
    setStep: React.SetStateAction<number>,
    prev: () => void,
    next: () => void,
    selectedPlanDetails: {},
    selectedAddons: [],
    selectedAddonDetails: []
}