interface IPersonalInfo {
    name: string,
    emailId: string,
    phoneNumber: string
}

export const initialPersonalInfo: IPersonalInfo = {
    name: "",
    emailId: "",
    phoneNumber: ""
}

export const initialPlanFormDetails = {
    plans: "",
    isYearly: false
}