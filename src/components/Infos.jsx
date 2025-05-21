import { useState } from 'react'
import './infos.css'

export default function Infos({nextPage}) {

    const [name,SetName] = useState("")
    const [email, SetEmail] = useState("")
    const [phone, SetPhone] = useState("")

    return (
        <div className='infos'>

            <div className="infoTitle">
                <h2>Personal Info</h2>
                <span>Please provide your name, email address, and phone number.</span>
            </div>

            <form className='infoForm' action="">
                <label htmlFor="name">Your name is : {name}</label> <br />
                <input type="text" name="" id="name" placeholder='Vingt-Six' onChange={(e) => SetName(e.target.value)} />

                <label htmlFor="email">Your email is : {email}</label> <br />
                <input type="text" name="" id="name" placeholder='Vingt-Six@email.com' onChange={(e) => SetEmail(e.target.value)}/>

                <label htmlFor="phone">Your phone number is : {phone}</label> <br />
                <input type="text" name="" id="name" placeholder='+32 000 000 000' onChange={(e) => SetPhone(e.target.value)} />

                <button onClick={nextPage} type="button">Next step</button>
            </form>

        </div>
    )
    
}