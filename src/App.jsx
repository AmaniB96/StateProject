import './App.css'
import Infos from './components/Infos'
import Plan from './components/plan'
import SidePanel from './components/sidePanel'

function App() {

  return (
    <>
    <div className='container'>
      <SidePanel></SidePanel>
      <Infos></Infos>
      <Plan></Plan>
    </div>
    </>
  )
}

export default App
