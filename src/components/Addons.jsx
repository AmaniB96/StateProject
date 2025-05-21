import './addons.css'

export default function Addons({enabled, prevPage, nextPage}) {

    const addonslist = {
        addonsServices: [{
            onlineMonth: 1,
            onlineYear: 10
        },
        {
            storageMonth:2,
            storageYear:20,
        },{
            customMonth: 2,
            customYear:20
        }

        ]
    }
    
    return (
        <div className='Addons'>
            <div className="infoTitle">
                <h2>Pick Add-ons</h2>
                <span>Add-ons enhance your game experience.</span>
            </div>

            <div className='addChoice'>
                <div>
                    <input type="checkbox" className='checkbox'/>
                    <div className='service'>
                        <p>Online service</p>
                        <span>Access to multiplayer games</span>
                    </div>
                </div>
                <div className='servicePrice'>{!enabled ? "+$" +addonslist.addonsServices[0].onlineMonth + "/Mo" : "+$"+addonslist.addonsServices[0].onlineYear + "/Yr"}</div>
            </div>

            <div className='addChoice'>
                <div>
                    <input type="checkbox" className='checkbox'/>
                    <div className='service'>
                        <p>Larger Storage</p>
                        <span>Extra 1tb of cloud save</span>
                    </div>
                </div>
                <div className='servicePrice'>{!enabled ? "+$" +addonslist.addonsServices[1].storageMonth + "/Mo" : "+$"+addonslist.addonsServices[1].storageYear + "/Yr"}</div>
            </div>

            <div className='addChoice'>
                <div>
                    <input type="checkbox" className='checkbox'/>
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