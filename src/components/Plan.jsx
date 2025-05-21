import './plan.css'
import arcade from '../assets/img/arcade.svg'
import advanced from '../assets/img/advenced.svg'
import pro from '../assets/img/pro.svg'


export default function Plan({ enabled, setEnabled, selectedPlan, setSelectedPlan }) {

    const pricingData = {
      plans: [
        {
          id: 'arcade',
          name: 'Arcade',
          icon: arcade,
          monthlyPrice: 9,
          yearlyPrice: 90,
        },
        {
          id: 'advanced',
          name: 'Advanced',
          icon: advanced,
          monthlyPrice: 12,
          yearlyPrice: 120,

        },
        {
          id: 'pro',
          name: 'Pro',
          icon: pro,
          monthlyPrice: 15,
          yearlyPrice: 150,

        }
      ]
    };

   const handlePlanSelect = (planId) => {
        setSelectedPlan(planId)
    }


    return (
        <div className="plan">
            <div className="infoTitle">
                <h2>Select your plan</h2>
                <span>You have the option of monthly or yearly billing</span>
            </div>

            <div className='pricing'>
                <div 
                    className={`arcade ${selectedPlan === 'arcade' ? 'active' : ''}`}
                    onClick={() => handlePlanSelect('arcade')}
                >
                    <img src={arcade} alt="" />
                    <p>{pricingData.plans[0].name}</p>
                    <span>${enabled ? pricingData.plans[0].yearlyPrice + '/Yr': pricingData.plans[0].monthlyPrice + '/Mo'}</span>
                </div>
                <div 
                    className={`advanced ${selectedPlan === 'advanced' ? 'active' : ''}`}
                    onClick={() => handlePlanSelect('advanced')}
                >
                    <img src={advanced} alt="" />
                    <p>{pricingData.plans[1].name}</p>
                    <span>${enabled ? pricingData.plans[1].yearlyPrice + '/Yr': pricingData.plans[1].monthlyPrice + '/Mo'}</span>
                </div>
                <div 
                    className={`pro ${selectedPlan === 'pro' ? 'active' : ''}`}
                    onClick={() => handlePlanSelect('pro')}
                >
                    <img src={pro} alt="" />
                    <p>{pricingData.plans[2].name}</p>
                    <span>${enabled ? pricingData.plans[2].yearlyPrice + '/Yr': pricingData.plans[2].monthlyPrice + '/Mo'}</span>
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