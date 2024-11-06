import { useContext } from 'react'

import { CyclesContext } from '../../context/CyclesContext'

import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Duração</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount}</td>
                <td>{cycle.startDate.toISOString()}</td>
                <td>{cycle.finishedDate && <Status statusColor="green">Concluído</Status>}</td>
                <td>{cycle.interruptedDate && <Status statusColor="red">Interrompido</Status>}</td>
                <td>
                  {!cycle.finishedDate && !cycle.interruptedDate && <Status statusColor="yellow">Concluído</Status>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
