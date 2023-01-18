import MainFormContent from "./MainFormContent"
import Sidebar from "./Sidebar"

function multiStepForm() {
    return (
        <div className="multi-stepfom-container d-flex flex-column flex-md-row p-md-3 rounded-4 bg-light">
            <aside id="sidebar">
                <Sidebar />
            </aside>
            <div className="flex-grow-1 overflow-hidden">
                <MainFormContent />
            </div>
        </div>
    )
};

export default multiStepForm;
