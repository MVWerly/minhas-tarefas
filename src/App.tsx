import Sidebar from './containers/Sidebar'
import TodoList from './containers/TodoList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <TodoList />
      </Container>
    </>
  )
}

export default App
