export default function FormPage() {
    return(
        <>
            <main className="py-[30px] md:py-[60px] px-[30px] md:px-[60px]">
                <h1 className="text-md md:text-lg">Please fill in the form below to complete your order</h1>
                <a href="#" className="text-sm underline underline-offset-2 text-strange-pink hover:text-red-900">
                    See how everything works before placing an order
                </a>

                <form action="SEND" className="bg-strange-pink/50 rounded-md py-[30px] px-[30px] mt-[30px]! md:mt-[60px]! max-w-[60%]">
                    <div className="flex flex-col md:gap-5 items-center w-fit">
                        <div className="flex flex-col md:flex-row items-center gap-2 w-full" >
                            <label htmlFor="name" className="text-sm text-white md:text-md mr-2">First Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" className="rounded-md bg-white px-2 py-1 text-sm md:text-md max-w-full" required/>
                        </div>
                        <div className="flex flex-col md:flex-row mt-[10px]! md:mt-[unset] items-center gap-2 w-full">
                            <label htmlFor="surname" className="text-sm text-white md:text-md mr-2">Surname:</label>
                            <input type="text" id="surname" name="surname" placeholder="Enter your surname" className="rounded-md bg-white px-2 py-1 text-sm md:text-md max-w-full" required/>
                        </div>
                        <div className="flex flex-col mt-[10px]! md:mt-[unset] md:flex-row items-center gap-2 w-full">
                            <label htmlFor="phone" className="text-sm text-white md:text-md mr-2">Tel:</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="rounded-md bg-white px-2 py-1 text-sm md:text-md max-w-full" required/>
                        </div>
                        <div className="flex flex-col mt-[10px]! md:mt-[unset] md:flex-row items-center gap-2 w-full">
                            <label htmlFor="email" className="text-sm text-white md:text-md mr-2">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" className="rounded-md bg-white px-2 py-1 text-sm md:text-md max-w-full" required/>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
}