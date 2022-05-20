import { useState } from 'react'
import { Container } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Black ops 3</td>
            <td className='deposit'>R$ 250, 00</td>
            <td>Jogos</td>
            <td>12/12/2015</td>
          </tr>
          <tr>
            <td>Black ops 4</td>
            <td className='withdraw'>- R$ 350, 00</td>
            <td>Jogos</td>
            <td>12/12/2018</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
