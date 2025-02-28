import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import * as S from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.task)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filteredTasks = itens

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criterion === 'prioridade') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criterion === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    } else {
      return filteredTasks
    }
  }

  const showFilteringResult = (quantity: number) => {
    let message = ''
    const completion =
      term !== undefined && term.length > 0 ? ` e "${term}"` : ''

    if (criterion === 'todas') {
      message = `${quantity} tarefa(s) encontrada(s) como: todas ${completion}`
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como: "${`${criterion} = ${value}`}" ${completion}`
    }

    return message
  }

  const tasks = filterTasks()
  const message = showFilteringResult(tasks.length)

  return (
    <S.Container>
      <S.Result>{message}</S.Result>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <Task
              id={t.id}
              title={t.title}
              description={t.description}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default TodoList
