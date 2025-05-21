import './addons.css'

export default function Addons({enabled, prevPage, nextPage, selectedAddon, setSelectedAddon}) {

    const addonslist = {
        addonsServices: [{
            id: "online",
            onlineMonth: 1,
            onlineYear: 10
        },
        {   
            id: "storage",
            storageMonth:2,
            storageYear:20,
        },{
            id: "custom",
            customMonth: 2,
            customYear:20
        }

        ]
    }

    const handleAddonSelect = (addonId) => {
        // If addon is already selected, remove it
        if (selectedAddon.includes(addonId)) {
            // Keep all addons EXCEPT the one we clicked
            const newSelection = selectedAddon.filter(addon => addon !== addonId)
            setSelectedAddon(newSelection)
        } else {
            // Add new addon to selection
            setSelectedAddon([...selectedAddon, addonId])
        }
    }
    
    return (
        <div className='Addons'>
            <div className="infoTitle">
                <h2>Pick Add-ons</h2>
                <span>Add-ons enhance your game experience.</span>
            </div>

            <div onClick={() => handleAddonSelect("online")} className='addChoice'>
                <div>
                    <input type="checkbox" className='checkbox' checked={selectedAddon.includes("online")} onChange={() => handleAddonSelect("online")}  
                    />
                    <div className='service'>
                        <p>Online service</p>
                        <span>Access to multiplayer games</span>
                    </div>
                </div>
                <div className='servicePrice'>{!enabled ? "+$" +addonslist.addonsServices[0].onlineMonth + "/Mo" : "+$"+addonslist.addonsServices[0].onlineYear + "/Yr"}</div>
            </div>

            <div onClick={() => handleAddonSelect("storage")} className='addChoice'>
                <div>
                    <input type="checkbox" className='checkbox' checked={selectedAddon.includes("storage")} onChange={() => handleAddonSelect("storage")} />
                    <div className='service'>
                        <p>Larger Storage</p>
                        <span>Extra 1tb of cloud save</span>
                    </div>
                </div>
                <div className='servicePrice'>{!enabled ? "+$" +addonslist.addonsServices[1].storageMonth + "/Mo" : "+$"+addonslist.addonsServices[1].storageYear + "/Yr"}</div>
            </div>

            <div onClick={() => handleAddonSelect("custom")} className='addChoice'>
                <div>
                    <input type="checkbox" className='checkbox' checked={selectedAddon.includes("custom")} onChange={() => handleAddonSelect("custom")}/>
                    <div className='service'>
                        <p>Customizable profile</p>
                        <span>Custom theme on your profile</span>
                    </div>
                </div>
                <div className='servicePrice'>{!enabled ? "+$" +addonslist.addonsServices[2].customMonth + "/Mo" : "+$"+addonslist.addonsServices[2].customYear + "/Yr"}</div>
            </div>

            <div className='navbtnaddons'>
                <button onClick={prevPage} className='prev'>Go Back</button>
                <button onClick={nextPage} className='next'> Next Step</button>
            </div>

        </div>
    )
}