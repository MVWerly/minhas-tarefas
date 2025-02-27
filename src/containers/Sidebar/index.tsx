import FilterCard from '../../components/FilterCard'

import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.ResearchField type="text" placeholder="Buscar" />
      <S.Filters>
        <FilterCard subtitle="pendentes" counter={1} />
        <FilterCard subtitle="concluídas" counter={2} />
        <FilterCard subtitle="urgentes" counter={3} />
        <FilterCard subtitle="importantes" counter={3} />
        <FilterCard subtitle="normal" counter={2} />
        <FilterCard subtitle="todas" counter={11} active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default Sidebar
