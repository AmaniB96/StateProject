import './sidePanel.css'

export default function SidePanel({activeNumber}) {

    
    return (   
        <div className='panel'>
            <div className='panelContent'>

                <div className='panelText'>
                    <div className={`chiffre ${activeNumber === "chiffre1" ? "chiffreActif" : ""}`}>
                        1
                        </div>
                    <div className='steps'>
                        <span>STEP 1</span>
                        <p>YOUR INFO</p>
                    </div>
                </div>

                <div className='panelText'>
                    <div className={`chiffre ${activeNumber === "chiffre2" ? "chiffreActif" : ""}`}>
                        2
                        </div>
                    <div className='steps'>
                        <span>STEP 2</span>
                        <p>SELECT PLAN</p>
                    </div>
                </div>

                <div className='panelText'>
                    <div className={`chiffre ${activeNumber === "chiffre3" ? "chiffreActif" : ""}`}>
                        3
                        </div>
                    <div className='steps'>
                        <span>STEP 3</span>
                        <p>ADD-ONS</p>
                    </div>
                </div>

                <div className='panelText'>
                    <div className={`chiffre ${activeNumber === "chiffre4" ? "chiffreActif" : ""}`}>
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