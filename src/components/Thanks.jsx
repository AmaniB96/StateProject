import './thanks.css'
import thankyou from "../assets/img/thankyou.svg"

export default function Thanks() {

    return (
        <div className='thankscontainer'>
            <img src={thankyou} alt="" />
            <h2>Thank You</h2>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please, feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}