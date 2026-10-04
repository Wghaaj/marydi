export default function RulesPage() {
    return(
        <>
            <main className="py-[30px] md:py-[60px] px-[30px] md:px-[60px]">
                <h1 className="text-md md:text-lg text-strange-pink">How everything works after you place an order?</h1>
                <ul className="mt-[20px]! ml-[15px]!">
                    <li className="list-disc">After you click on "Submit Order" we receive your order details</li>
                    <li className="list-disc">We will contact you within 24 hours to confirm your order and discuss any additional details if needed</li>
                    <li className="list-disc">Once your order is confirmed, we will start working on it immediately and send you payment details via email or a message</li>
                    <li className="list-disc">Once your order is ready, we will notify you and arrange for delivery or pickup</li>
                    <li className="list-disc">If you have any questions or concerns about your order, please do not hesitate to contact us</li>
                </ul>
            </main>
        </>
    );
}