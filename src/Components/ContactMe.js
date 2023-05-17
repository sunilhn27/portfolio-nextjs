import React, { useState } from 'react'


function ContactMe() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    const submitForm = async () => {
        const res = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = res.json();
        console.log(data);


    }

    return (

        <div id="contact" className='w-fit h-fit bg-cyan-700 mx-auto py-5 px-10 rounded-xl my-5 mt-10'>

            <div className='flex flex-1 flex-col space-y-3 md:flex-row'>

                <div className='text-white font-bold flex flex-col mx-8 space-y-4'>
                    <div className='mb-9'>
                        <h1 className='flex justify-center items-center font-bold text-5xl '>Contact Me</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-4 '>
                        <div className='flex flex-row space-x-1 items-center'>
                            <p>Please do send Message to contact Me </p>
                        </div>
                        <div className='flex flex-row space-x-2 items-center'>
                            <ion-icon name="call-outline"></ion-icon>
                            <span>+91 7411 161 885 </span>
                        </div>
                        <div className='flex flex-row space-x-1 items-center'>
                            <ion-icon name="mail-open-outline"></ion-icon>
                            <span>sunilh.n27@gmail.com </span>
                        </div>
                        <div className='flex flex-row space-x-1 items-center'>
                            <ion-icon name="location-outline"></ion-icon>
                            <span>Bangalore India - 562123 </span>
                        </div>
                        <div className='flex flex-row justify-center  gap-6 py-4  '>
                            <ion-icon className="text-3xl " name="logo-github"></ion-icon>
                            <ion-icon className="text-3xl" name="logo-linkedin"></ion-icon>
                            <ion-icon className="text-3xl" name="logo-twitter"></ion-icon>
                            <ion-icon className="text-3xl" name="logo-instagram"></ion-icon>
                        </div>
                    </div>
                </div>

                <form onSubmit={submitForm} className='flex flex-1 justify-center flex-col bg-white px-8 py-8 text-black font-bold space-y-4 rounded-xl mx-auto '>
                    <label>Your Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} className="rounded-lg px-3 py-1 border-4" placeholder='Name' type="text" required maxLength={10} />
                    <label>Email Address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} className="rounded-lg px-3 py-1 border-4" placeholder='Email' type="email" name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
                    <label>Message</label>
                    <input value={message} onChange={e => setMessage(e.target.value)} required maxLength={30} className="rounded-lg px-3 py-8 border-4" placeholder='Message'></input>
                    <button type="submit" className='bg-orange-400 px-4 py-1 rounded-lg font-bold  text-center mx-auto '>Send Message</button>
                </form>
            </div>

        </div>
    )
}


export default ContactMe
