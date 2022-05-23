import { Container } from './styles';

interface SummaryProps {
  name: 'Entradas' | 'Saídas' | 'Total';
  icon: string;
}

export function Summary({ name, icon }: SummaryProps) {
  return (
    <Container>
      <div>
        <header>
          <p>{name}</p>
          <img src={icon} alt={`${name} icon`} />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <p>{name}</p>
          <img src={icon} alt={`${name} icon`} />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>{name}</p>
          <img src={icon} alt={`${name} icon`} />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
    </Container>
  );
}
