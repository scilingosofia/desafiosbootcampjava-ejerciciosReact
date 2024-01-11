import './App.css'
import MiCVComponent from './components/cv/MiCVComponent'
import { data } from './assets/data';

function App() {

  const appData = data;

  return (
    <>
      <MiCVComponent data={appData}/>
    </>
  )
}

export default App
