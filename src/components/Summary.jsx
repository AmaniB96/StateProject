import './summary.css'

export default function Summary({
    prevPage, 
    nextPage, 
    selectedPlan, 
    selectedAddon, 
    enabled, 
    pricingData, 
    addonslist
}) {
    // Add these console logs at the start
    console.log('Summary Props:', {
        selectedPlan,
        selectedAddon,
        enabled,
        pricingData,
        addonslist
    })
    
    // Find the selected plan details
    const planDetails = pricingData.plans.find(plan => plan.id === selectedPlan)
    
    // Calculate total
    const planPrice = enabled ? planDetails?.yearlyPrice : planDetails?.monthlyPrice
    
    // Calculate addons total
    const addonsTotal = selectedAddon.reduce((total, addonId) => {
        const addon = addonslist.addonsServices.find(a => a.id === addonId)
        return total + (enabled ? addon[`${addonId}Year`] : addon[`${addonId}Month`])
    }, 0)

    const total = planPrice + addonsTotal

    return (
        <div className='summary'>
            <div className="infoTitle">
                <h2>Finishing up</h2>
                <span>Double-check everything looks OK before confirming.</span>
            </div>

            <div className='resume'>
                <div className="item">
                    <p>{planDetails?.name} ({enabled ? 'Yearly' : 'Monthly'})</p>
                    <p>${planPrice}/{enabled ? 'yr' : 'mo'}</p>
                </div>
                <a href="#" onClick={() => prevPage()}>Change</a>
                <hr />
                {selectedAddon.map(addonId => {
                    const addon = addonslist.addonsServices.find(a => a.id === addonId)
                    return (
                        <div key={addonId} className="addon">
                            <p>{addon.id === 'online' ? 'Online service' : 
                               addon.id === 'storage' ? 'Larger storage' : 
                               'Customizable profile'}</p>
                            <p>+${enabled ? addon[`${addonId}Year`] : addon[`${addonId}Month`]}/{enabled ? 'yr' : 'mo'}</p>
                        </div>
                    )
                })}
            </div>
            <div className="total">
                <p>Total ({enabled ? 'per year' : 'per month'})</p>
                <p className="total-amount">${total}/{enabled ? 'yr' : 'mo'}</p>
            </div>

            <div className='navbtnaddons'>
                <button onClick={prevPage} className='prev'>Go Back</button>
                <button onClick={nextPage} className='next'>Confirm</button>
            </div>
        </div>
    )
}