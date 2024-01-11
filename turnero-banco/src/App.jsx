import { Provider } from 'react-redux'
import './App.css'
import { AppRouter } from './AppRouter'
import TurnosStore from './redux/store'

function App() {

  return (
    <Provider store={TurnosStore}>
      <AppRouter />
    </Provider>
  )
}

export default App
