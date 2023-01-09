import MainFormContent from "./MainFormContent"
import Sidebar from "./Sidebar"

function multiStepForm() {
    return (
        <div className="d-flex p-3 rounded-4 w-75 bg-light">
            <aside id="sidebar">
                <Sidebar />
            </aside>
            <div className="flex-grow-1 px-5 py-3">
                <MainFormContent />
            </div>
        </div>
    )
};

export default multiStepForm;
