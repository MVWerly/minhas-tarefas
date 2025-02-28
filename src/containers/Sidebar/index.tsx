import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.ResearchField
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={({ target }) => dispatch(changeTerm(target.value))}
        />
        <S.Filters>
          <FilterCard
            value={enums.Status.PENDENTE}
            criterion="status"
            subtitle="pendentes"
          />
          <FilterCard
            value={enums.Status.CONCLUIDA}
            criterion="status"
            subtitle="concluídas"
          />
          <FilterCard
            value={enums.Priority.URGENTE}
            criterion="prioridade"
            subtitle="urgentes"
          />
          <FilterCard
            value={enums.Priority.IMPORTANTE}
            criterion="prioridade"
            subtitle="importantes"
          />
          <FilterCard
            value={enums.Priority.NORMAL}
            criterion="prioridade"
            subtitle="normal"
          />
          <FilterCard criterion="todas" subtitle="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
