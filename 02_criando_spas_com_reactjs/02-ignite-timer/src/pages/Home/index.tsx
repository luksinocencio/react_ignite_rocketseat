import * as zod from 'zod'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

/**
 * @description Home page component
 * @remarks
 * - controlled
 *  - useState
 *  - facilidade para manipular o estado
 *  - quando temos complexidade dificulta gerando varias renderizações
 * - uncontrolled
 *  - handleSubmit
 *   - e.preventDefault()
 *   - e.target.task.value
 * */

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O intervalo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O intervalo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  // register = add um input ao form
  // handleSubmit = executa uma função quando o form é submetido
  // watch = observa um input
  // formState = estado do form
  // reset = reseta o form para os valores iniciais
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  // console.log(formState.errors)
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  console.log(activeCycle)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list={'task-suggestion'}
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />
          <datalist id="task-suggestion">
            <option value="Projeto 1" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
