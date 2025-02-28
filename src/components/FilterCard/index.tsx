import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { changeFilter } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

export type Props = {
  subtitle: string
  criterion: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ subtitle, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, task } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const couteringTasks = () => {
    if (criterion === 'todas') return task.itens.length

    if (criterion === 'prioridade') {
      return task.itens.filter((item) => item.priority === value).length
    }

    if (criterion === 'status') {
      return task.itens.filter((item) => item.status === value).length
    }
  }

  const filtering = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const counter = couteringTasks()
  const active = checkIsActive()

  return (
    <S.Card active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default FilterCard
