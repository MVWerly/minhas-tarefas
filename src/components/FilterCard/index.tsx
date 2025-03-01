import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

import { RootReducer } from '../../store'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'

import * as S from './styles'

export type Props = {
  subtitle: string
  criterion: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ subtitle, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const filter = useSelector((state: RootReducer) => state.filter)
  const task = useSelector((state: RootReducer) => state.task)

  const checkIsActive = useCallback(() => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }, [filter, criterion, value])

  const countingTasks = useCallback(() => {
    if (criterion === 'todas') return task.itens.length

    if (criterion === 'prioridade') {
      return task.itens.filter((item) => item.priority === value).length
    }

    if (criterion === 'status') {
      return task.itens.filter((item) => item.status === value).length
    }
  }, [criterion, task, value])

  const filtering = useCallback(() => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }, [criterion, value, dispatch])

  const counter = countingTasks()
  const active = checkIsActive()

  return (
    <S.Card $active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default FilterCard
