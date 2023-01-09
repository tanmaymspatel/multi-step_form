function Sidebar() {
    return (
        <div className="sidebar-bg p-4 rounded-3">
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="step">
                        <span className="px-2 py-1 border rounded-circle">1</span>
                    </div>
                    <div className="flex-grow-1 text-light">
                        <small>STEP 1</small>
                        <h6>YOUR INFO</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="step">
                        <span className="px-2 py-1 border rounded-circle">2</span>
                    </div>
                    <div className="flex-grow-1 text-light">
                        <small>STEP 2</small>
                        <h6>SELECT PLAN</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="step">
                        <span className="px-2 py-1 border rounded-circle">
                            3
                        </span>
                    </div>
                    <div className="flex-grow-1 text-light">
                        <small>STEP 3</small>
                        <h6>ADD-ONS</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <div className="step">
                        <span className="px-2 py-1 border rounded-circle">4</span>
                    </div>
                    <div className="flex-grow-1 text-light">
                        <small>STEP 4</small>
                        <h6>SUMMARY</h6>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
