import FilterCard from '../../components/FilterCard'

import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.ResearchField type="text" placeholder="Buscar" />
      <S.Filters>
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard ativo />
      </S.Filters>
    </div>
  </S.Aside>
)

export default Sidebar
