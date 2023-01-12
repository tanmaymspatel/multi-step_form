function Sidebar() {
    return (
        <div className="sidebar-bg h-100 p-4 rounded-3">
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="step">
                        <span className="active step-circle d-flex align-items-center justify-content-center border rounded-circle fw-bold">1</span>
                    </div>
                    <div className="flex-grow-1">
                        <small className="text-cool-grey">STEP 1</small>
                        <h6 className="step-name text-light">YOUR INFO</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="step">
                        <span className="step-circle d-flex align-items-center justify-content-center border rounded-circle fw-bold">2</span>
                    </div>
                    <div className="flex-grow-1">
                        <small className="text-cool-grey">STEP 2</small>
                        <h6 className="step-name text-light">SELECT PLAN</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="step">
                        <span className="step-circle d-flex align-items-center justify-content-center border rounded-circle fw-bold">
                            3
                        </span>
                    </div>
                    <div className="flex-grow-1">
                        <small className="text-cool-grey">STEP 3</small>
                        <h6 className="step-name text-light">ADD-ONS</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="step">
                        <span className="step-circle d-flex align-items-center justify-content-center border rounded-circle fw-bold">4</span>
                    </div>
                    <div className="flex-grow-1">
                        <small className="text-cool-grey">STEP 4</small>
                        <h6 className="step-name text-light">SUMMARY</h6>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
