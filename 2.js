export default function Widget() {
    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8">Online Payment Fraud Detection</h1>
        <div className="max-w-md bg-card p-6 rounded-lg shadow-lg">
            <img src="https://www.clearlypayments.com/wp-content/uploads/2023/03/fraud-detection-payments-1024x683.jpg" alt="security" className="w-24 h-24 mx-auto mb-4" />
            <p className="text-center text-card-foreground mb-4">Your online payments are secure with us!</p>
            
            <form className="flex flex-col space-y-4">
                <input type="text" placeholder="Card Number" className="p-2 rounded-lg bg-input text-input border border-primary focus:ring ring-primary" />
                <input type="text" placeholder="Name on Card" className="p-2 rounded-lg bg-input text-input border border-primary focus:ring ring-primary" />
                <div className="flex space-x-2">
                    <input type="text" placeholder="MM/YY" className="p-2 flex-1 rounded-lg bg-input text-input border border-primary focus:ring ring-primary" />
                    <input type="text" placeholder="CVV" className="p-2 w-20 rounded-lg bg-input text-input border border-primary focus:ring ring-primary" />
                </div>
                <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded-lg">Submit Payment</button>
            </form>
        </div>
        </div>
    )
}