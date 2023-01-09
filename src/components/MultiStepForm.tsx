import MainFormContent from "./MainFormContent"
import Sidebar from "./Sidebar"

function multiStepForm() {
    return (
        <div className="d-flex p-2 rounded-4">
            <div>
                <Sidebar />
            </div>
            <div className="flex-grow-1">
                <MainFormContent />
            </div>
        </div>
    )
}

export default multiStepForm
