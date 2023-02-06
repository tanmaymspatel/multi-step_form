import thankYouimage from "../assets/images/icon-thank-you.svg"
/**
 * @returns Thank You screen
 */
function ThankYou() {
    return (
        <div className="form-container thank-you-screen-container">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center p-4">
                <figure>
                    <img src={thankYouimage} alt="thank-you-for-subscribing" />
                </figure>
                <h2 className="text-primary fw-bold py-2">Thank you!</h2>
                <p className="text-cool-grey text-center">
                    Thank you for confriming your subscribtion! We hope you have fun using our platform. I cf you ever need support, feel free to email us at support@email.com
                </p>
            </div>
        </div>
    )
};

export default ThankYou;
