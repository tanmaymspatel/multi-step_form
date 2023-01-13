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
    plan: "",
    isYearly: false
}

export const initialAddOnsValues = {
    addons: []
}