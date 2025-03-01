import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Button, SaveButton } from '../../styles'

import { remove, edit, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type Props = TaskClass

const Task = ({
  title,
  priority,
  status,
  description: originalDescription,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEdit() {
    setIsEditing(false)
    setDescription(originalDescription)
  }

  function changeStatustask(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        id,
        finalized: event.target.checked
      })
    )
  }

  return (
    <S.TaskCard>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={changeStatustask}
        />
        <S.TaskTitle>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.TaskTitle>
      </label>
      <S.Tag $parameter="prioridade" $priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag $parameter="status" $status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <S.ActionsBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    title,
                    priority,
                    status,
                    description,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelRemoveButton onClick={cancelEdit}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionsBar>
    </S.TaskCard>
  )
}

export default Task
