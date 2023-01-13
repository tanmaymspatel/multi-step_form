export interface IMultiStep {
    step: number,
    setStep: React.SetStateAction<number>,
    prev: () => void,
    next: () => void
}