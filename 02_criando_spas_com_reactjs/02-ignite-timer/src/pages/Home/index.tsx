import { HandPalm, Play } from '@phosphor-icons/react'
import { useState } from 'react'

import { CyclesContext } from '../../context/CyclesContext'

import { Countdown } from './components/Countdown'
import { NewCycleForm, NewCycleFormData } from './components/NewCycleForm'
import { HomeContainer, StartCountdownButton, StopCountdownButton } from './styles'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle: Cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <CyclesContext.Provider value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <NewCycleForm />
          <Countdown activeCycle={activeCycle} setCycles={setCycles} activeCycleId={activeCycleId} />

          {activeCycle ? (
            <StopCountdownButton onClick={handleInterruptCycle} type="button">
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton disabled={isSubmitDisable} type="submit">
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </form>
      </CyclesContext.Provider>
    </HomeContainer>
  )
}
