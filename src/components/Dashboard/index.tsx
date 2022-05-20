import { Summary } from '../Summary'
import { Container } from './styles'

import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'

export function Dashboard() {
  return (
    <Container>
      <Summary name='Entradas' icon={incomeIcon} />
      {/* <Summary name='Saídas' icon={outcomeIcon} />
      <Summary name='Total' icon={totalIcon} /> */}
    </Container>
  )
}
