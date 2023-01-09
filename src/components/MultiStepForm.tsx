import MainFormContent from "./MainFormContent"
import Sidebar from "./Sidebar"

function multiStepForm() {
    return (
        <div className="multi-stepfom-container d-flex p-3 rounded-4 bg-light">
            <aside id="sidebar">
                <Sidebar />
            </aside>
            <div className="form-container flex-grow-1">
                <MainFormContent />
            </div>
        </div>
    )
};

export default multiStepForm;
