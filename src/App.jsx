import { useState } from 'react'
import './App.css'
import Addons from './components/Addons'
import Infos from './components/Infos'
import Plan from './components/plan'
import SidePanel from './components/sidePanel'


function App() {

  const Pages = {
  Info: 'info',
  Plan: 'plan',
  Addons: 'addons',
}
  

  const [enabled, setEnabled] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [currentPage,setCurrentPage] = useState(Pages.Info)

  const nextPage = () => {
    switch (currentPage) {
      case Pages.Info:
        setCurrentPage(Pages.Plan)
        break;
    
      case Pages.Plan:
        setCurrentPage(Pages.Addons)
        break;
    }
  }
  
  const prevPage = () => {
    switch (currentPage) {
      case Pages.Plan:
        setCurrentPage(Pages.Info)
        break;
    
      case Pages.Addons:
        setCurrentPage(Pages.Plan)
        break;
    }
  }

  const displayPage = () => {
      switch (currentPage) {
        case Pages.Info:
          return <Infos nextPage={nextPage}></Infos>
        case Pages.Plan:
          return <Plan enabled={enabled} setEnabled={setEnabled} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} prevPage={prevPage} nextPage={nextPage}></Plan>
        case Pages.Addons:
          return <Addons enabled={enabled} prevPage={prevPage} nextPage={nextPage}></Addons>
        default:
          return <Infos nextPage={nextPage} />
      }
  }

  return (
    <>
    <div className='container'>
      <SidePanel></SidePanel>
      {displayPage()}
    </div>
    </>
  )
}

export default App
