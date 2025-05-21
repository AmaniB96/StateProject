import { useState } from 'react'
import './App.css'
import Addons from './components/Addons'
import Infos from './components/Infos'
import Plan from './components/plan'
import SidePanel from './components/sidePanel'
import Summary from './components/Summary'
import Thanks from './components/thanks'

import arcade from './assets/img/arcade.svg'
import advanced from './assets/img/advenced.svg'
import pro from './assets/img/pro.svg'


function App() {
  const Pages = {
    Info: 'info',
    Plan: 'plan',
    Addons: 'addons',
    Summary: "summary",
    ThankYou: "thanks"
  }

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
    }
    
    const addonslist = {
      addonsServices: [{
        id: "online",
        onlineMonth: 1,
        onlineYear: 10
      },
      {   
        id: "storage",
        storageMonth: 2,
        storageYear: 20,
      },
      {
        id: "custom",
        customMonth: 2,
        customYear: 20
      }]
    }


  const [enabled, setEnabled] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [currentPage,setCurrentPage] = useState(Pages.Info)
  const [activeNumber, setActiveNumber]= useState("chiffre1")
  const [selectedAddon, setSelectedAddon] = useState([])

const isPlanValid = () => {
    return selectedPlan !== null
}

  const nextPage = () => {
    switch (currentPage) {
      case Pages.Info:
        
          setCurrentPage(Pages.Plan)
          setActiveNumber("chiffre2")
        
        break;
    
      case Pages.Plan:
        if (isPlanValid()) {
          setCurrentPage(Pages.Addons)
          setActiveNumber("chiffre3")
        } else {
          alert("Please select a plan before continuing")
        }
        break;

      case Pages.Addons:
        setCurrentPage(Pages.Summary)
        setActiveNumber("chiffre4")
        break;
      case Pages.Summary:
        setCurrentPage(Pages.ThankYou)
        break;
    }
  }
  
  const prevPage = () => {
    switch (currentPage) {
      case Pages.Plan:
        setCurrentPage(Pages.Info)
        setActiveNumber("chiffre1")  // Set directly here
        break;
    
      case Pages.Addons:
        setCurrentPage(Pages.Plan)
        setActiveNumber("chiffre2")  // Set directly here
        break;
      case Pages.Summary:
        setCurrentPage(Pages.Addons)
        setActiveNumber('chiffre3')  
    }
  }

  const displayPage = () => {
      switch (currentPage) {
        case Pages.Info:
          return <Infos nextPage={nextPage}></Infos>
        case Pages.Plan:
          return <Plan 
            enabled={enabled} 
            setEnabled={setEnabled} 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan} 
            prevPage={prevPage} 
            nextPage={nextPage}
            pricingData={pricingData}  // Pass pricingData to Plan component
          />
        case Pages.Addons:
          return <Addons 
            enabled={enabled} 
            prevPage={prevPage} 
            nextPage={nextPage} 
            selectedAddon={selectedAddon} 
            setSelectedAddon={setSelectedAddon}
            addonslist={addonslist}  // Pass addonslist to Addons component
          />
        case Pages.Summary:
          return <Summary 
            prevPage={prevPage} 
            nextPage={nextPage}  // Make sure nextPage is passed
            selectedPlan={selectedPlan} 
            selectedAddon={selectedAddon} 
            enabled={enabled} 
            pricingData={pricingData} 
            addonslist={addonslist} 
            setActiveNumber={setActiveNumber}
            setCurrentPage={setCurrentPage}
            Pages={Pages}
          />
        case Pages.ThankYou:
          return <Thanks />
        default:
          return <Infos nextPage={nextPage} />
      }
  }

  return (
    <>
    <div className='container'>
      <SidePanel activeNumber={activeNumber}></SidePanel>
      {displayPage()}
    </div>
    </>
  )
}

export default App
