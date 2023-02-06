import { useContext } from 'react';

import { MultiStepFormContext } from '../contexts/multiStepFormContext';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';
import PersonalInfoForm from './PersonalInfoForm'
import PlanForm from './PlanForm';
import ThankYou from './ThankYou';
/**
 * @returns Main Form entry component
 */
function MainFormContent() {

    const { step } = useContext<any>(MultiStepFormContext)
    /**
     * @name renderStep
     * @param step number od current step
     * @returns form according to the current step
     */
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
        <div className='h-100 container-bg'>
            {renderStep(step)}
        </div>
    )
};

export default MainFormContent;
