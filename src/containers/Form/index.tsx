import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, SaveButton, Title } from '../../styles/index'
import { ResearchField } from '../../styles/index'
import { Form as FormContainer, Options, Option } from './styles'

import * as enums from '../../utils/enums/Task'
import { addTask } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      addTask({
        title,
        priority,
        status: enums.Status.PENDENTE,
        description
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <FormContainer onSubmit={registerTask}>
        <ResearchField
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <ResearchField
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="prioridade"
                type="radio"
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
                onChange={({ target }) =>
                  setPriority(target.value as enums.Priority)
                }
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </FormContainer>
    </MainContainer>
  )
}

export default Form
