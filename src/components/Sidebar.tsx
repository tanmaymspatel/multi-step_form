import { useContext } from "react";
import { MultiStepFormContext } from "../contexts/multiStepFormContext";

function Sidebar() {

    const { step } = useContext<any>(MultiStepFormContext);

    return (
        <div className="sidebar-bg h-100 p-4">
            <div className="d-flex flex-md-column justify-content-center my-3">
                <div className="d-flex align-items-center justify-content-between my-2 px-3 px-md-0">
                    <div className="step">
                        <span className={`${step === 1 ? "active" : null} step-circle d-flex align-items-center justify-content-center border rounded-circle fw-bold`}>1</span>
                    </div>
                    <div className="flex-grow-1 d-none d-md-block">
                        <small className="text-cool-grey">STEP 1</small>
                        <h6 className="step-name text-light">YOUR INFO</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2 px-3 px-md-0">
                    <div className="step">
                        <span className={`${step === 2 ? "active" : null} step-circle d-flex align-items-center justify-content-center border rounded-circle fw-bold`}>2</span>
                    </div>
                    <div className="flex-grow-1 d-none d-md-block">
                        <small className="text-cool-grey">STEP 2</small>
                        <h6 className="step-name text-light">SELECT PLAN</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2 px-3 px-md-0">
                    <div className="step">
                        <span className={`${step === 3 ? "active" : null} step-circle d-flex align-items-center justify-content-center border rounded-circle fw-bold`}>
                            3
                        </span>
                    </div>
                    <div className="flex-grow-1 d-none d-md-block">
                        <small className="text-cool-grey">STEP 3</small>
                        <h6 className="step-name text-light">ADD-ONS</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2 px-3 px-md-0">
                    <div className="step">
                        <span className={`${step === 4 || step === 5 ? "active" : null} step-circle d-flex align-items-center justify-content-center border rounded-circle fw-bold`}>4</span>
                    </div>
                    <div className="flex-grow-1 d-none d-md-block">
                        <small className="text-cool-grey">STEP 4</small>
                        <h6 className="step-name text-light">SUMMARY</h6>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
