import './sidePanel.css'

export default function SidePanel() {
    
    return (   
        <div className='panel'>
            <div className='panelContent'>

                <div className='panelText'>
                    <div className='chiffre'>
                        <p>1</p>
                        </div>
                    <div className='steps'>
                        <span>STEP 1</span>
                        <p>YOUR INFO</p>
                    </div>
                </div>

                <div className='panelText'>
                    <div className='chiffre'>
                        <p>2</p>
                        </div>
                    <div className='steps'>
                        <span>STEP 2</span>
                        <p>SELECT PLAN</p>
                    </div>
                </div>

                <div className='panelText'>
                    <div className='chiffre'>
                        <p>3</p>
                        </div>
                    <div className='steps'>
                        <span>STEP 3</span>
                        <p>ADD-ONS</p>
                    </div>
                </div>

                <div className='panelText'>
                    <div className='chiffre'>
                        <p>4</p>
                        </div>
                    <div className='steps'>
                        <span>STEP 4</span>
                        <p>SUMMARY</p>
                    </div>
                </div>

            </div>
        </div>
    )
}