import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Container } from './styles'
import store from './store/index'
import Home from './pages/Home'
import Cadastre from './pages/Cadastre'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastre />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
