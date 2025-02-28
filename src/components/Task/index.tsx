import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

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

  return (
    <S.TaskCard>
      <S.TaskTitle>{title}</S.TaskTitle>
      <S.Tag parameter="prioridade" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
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
            <S.SaveButton
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
            </S.SaveButton>
            <S.CancelRemoveButton onClick={cancelEdit}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
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
