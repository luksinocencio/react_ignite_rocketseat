import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleFormTemp() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <div>
      <h1>Hello World: {activeCycle}</h1>
      <button onClick={() => setActiveCycle(2)}>Alterar ciclo ativo</button>
    </div>
  )
}

function CountdownTemp() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Hello World: {activeCycle}</h1>
}

export function HomeTemp() {
  const [activeCycle, setActiveCycle] = useState(1)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleFormTemp />
        <CountdownTemp />
      </div>
    </CyclesContext.Provider>
  )
}
