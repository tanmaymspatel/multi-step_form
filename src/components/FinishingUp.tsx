function FinishingUp() {
    return (
        <div>
            <h2 className="form-title text-primary fw-bold"> Finishing up</h2>
            <p className="form-subtitle text-cool-grey">Double check everything looks OK before confirming.</p>
            <div className="mt-5">
                <div className="px-4 py-3 bg-magnolia">
                    <div className='d-flex align-items-center justify-content-between border-bottom border-light-grey pb-2'>
                        <div>
                            <h6 className="text-primary">Arcade (Monthly)</h6>
                            <p role="button" className='text-decoration-underline text-cool-grey' onClick={() => console.log("clicked")}>Change</p>
                        </div>
                        <h6 className="text-primary">$9/mo</h6>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="text-cool-grey">Online service</p>
                            <p className="text-cool-grey">+$1/mo</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="text-cool-grey">Larger storage</p>
                            <p className="text-cool-grey">+$2/mo</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between m-4">
                    <p>Total (per month)</p>
                    <h5 className="text-secondary">+$12/mo</h5>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between pt-5 mt-3">
                <button type="button" className="btn bg-transparent border-0">Go Back</button>
                <button type="submit" className="btn btn-primary">Next Step</button>
            </div>
        </div>
    )
}

export default FinishingUp
