interface IPersonalInfo {
    name: string,
    emailId: string,
    phoneNumber: string
}
interface IPlanInfo {
    plan: string,
    isYearly: boolean
}
interface IAddonInfo {
    addons: string[]
}
export const initialPersonalInfo: IPersonalInfo = {
    name: "",
    emailId: "",
    phoneNumber: ""
}

export const initialPlanFormDetails: IPlanInfo = {
    plan: "",
    isYearly: false
}

export const initialAddOnsValues: IAddonInfo = {
    addons: []
}