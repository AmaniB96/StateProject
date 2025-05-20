import './plan.css'
import arcade from '../assets/img/arcade.svg'
import advanced from '../assets/img/advenced.svg'
import pro from '../assets/img/pro.svg'
import { useState } from 'react'
import { Switch } from '@headlessui/react'


export default function Plan() {

    const [enabled, setEnabled] = useState(false)

    const pricingData = {
      plans: [
        {
          id: 'arcade',
          name: 'Arcade',
          icon: arcade,
          monthlyPrice: 9,
          yearlyPrice: 90,
          yearlyPromo: '2 months free'
        },
        {
          id: 'advanced',
          name: 'Advanced',
          icon: advanced,
          monthlyPrice: 12,
          yearlyPrice: 120,
          yearlyPromo: '2 months free'
        },
        {
          id: 'pro',
          name: 'Pro',
          icon: pro,
          monthlyPrice: 15,
          yearlyPrice: 150,
          yearlyPromo: '2 months free'
        }
      ]
    };

    return (
        <div className="plan">

            <div className="infoTitle">
                <h2>Select your plan</h2>
                <span>You have the option of monthly or yearly billing</span>
            </div>

            <div className='pricing'>
                <div className='arcade'>
                    <img src={arcade} alt="" />
                    <p></p>
                    <span></span>
                </div>
                <div className='advanced'>
                    <img src={advanced} alt="" />
                    <p></p>
                    <span></span>
                </div>
                <div className='pro'>
                    <img src={pro} alt="" />
                    <p></p>
                    <span></span>
                </div>

                <div className='month'>
                <span className={!enabled ? 'text-active' : 'text-inactive'}>Monthly</span>
                
                <div className="toggle-switch">
                    <input
                        type="checkbox"
                        id="toggle"
                        className="toggle-checkbox"
                        checked={enabled}
                        onChange={() => setEnabled(!enabled)}
                    />
                    <label htmlFor="toggle" className="toggle-label">
                        <span className="toggle-inner"></span>
                        <span className="toggle-switch-circle"></span>
                    </label>
                </div>
                
                <span className={enabled ? 'text-active' : 'text-inactive'}>Yearly</span>
            </div>
            </div>

             <div className='navbtn'>
                <button className='prev'>Go Back</button>
                <button className='next'> Next Step</button>
            </div>

        </div>
    )
}