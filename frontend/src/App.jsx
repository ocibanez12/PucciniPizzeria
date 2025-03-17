import AppInit from './Appinit'
import UserProvider from './store/UserContext'

const App = () => {
  return (
    <UserProvider>
      <AppInit />
    </UserProvider>
  )
}

export default App
