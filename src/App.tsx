import { Provider } from 'react-redux'
import Sidebar from './containers/Sidebar'
import TodoList from './containers/TodoList'
import GlobalStyle, { Container } from './styles'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App
