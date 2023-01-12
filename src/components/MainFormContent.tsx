import { useContext } from 'react';
import { MultiStepFormContext } from '../contexts/multiStepFormContext';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';
import PersonalInfoForm from './PersonalInfoForm'
import PlanForm from './PlanForm';
import ThankYou from './ThankYou';
function MainFormContent() {

    const { step } = useContext<any>(MultiStepFormContext)

    const renderStep = (step: number) => {
        switch (step) {
            case 1:
                return <PersonalInfoForm />;
            case 2:
                return <PlanForm />;
            case 3:
                return <AddOns />;
            case 4:
                return <FinishingUp />
            case 5:
                return <ThankYou />
            default:
                return null;
        }
    }

    return (
        <div className='h-100'>
            {/* <PersonalInfoForm /> */}
            {/* <PlanForm /> */}
            {/* <AddOns /> */}
            {/* <FinishingUp /> */}
            {/* <ThankYou /> */}
            {renderStep(step)}
        </div>
    )
};

export default MainFormContent;
