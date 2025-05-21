import { useState } from 'react'
import './App.css'
import Addons from './components/Addons'
import Infos from './components/Infos'
import Plan from './components/plan'
import SidePanel from './components/sidePanel'
useState

function App() {

  const [enabled, setEnabled] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <>
    <div className='container'>
      <SidePanel></SidePanel>
      <Infos></Infos>
      <Plan enabled={enabled} setEnabled={setEnabled} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}></Plan>
      <Addons enabled={enabled}></Addons>
    </div>
    </>
  )
}

export default App
