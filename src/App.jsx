import './App.css'
import Addons from './components/Addons'
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
      <Addons></Addons>
    </div>
    </>
  )
}

export default App
