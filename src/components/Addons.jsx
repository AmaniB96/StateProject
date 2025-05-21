import './addons.css'

export default function Addons() {
    
    return (
        <div className='Addons'>
            <div className="infoTitle">
                <h2>Pick Add-ons</h2>
                <span>Add-ons enhance your game experience.</span>
            </div>

            <div className='addChoice'>
                <input type="checkbox" className='checkbox'/>
                <div className='service'>
                    <p>Online service</p>
                    <span>Access to multiplayer games</span>
                </div>
                <div className='servicePrice'>{}</div>
            </div>

            <div className='addChoice'>
                <input type="checkbox" className='checkbox'/>
                <div className='service'>
                    <p>Larger Storage</p>
                    <span>Extra 1tb of cloud save</span>
                </div>
                <div className='servicePrice'>{}</div>
            </div>

            <div className='addChoice'>
                <input type="checkbox" className='checkbox'/>
                <div className='service'>
                    <p>Customizable profile</p>
                    <span>Custom theme on your profile</span>
                </div>
                <div className='servicePrice'>{}</div>
            </div>

        </div>
    )
}