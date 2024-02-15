import { Play } from "phosphor-react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles"
import { useEffect, useState } from "react"
import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = z.object({
    task: z.string().min(1, 'Please specify the task'),
    minutesAmount: z.number().min(5, 'Minimum is 5min').max(60, 'Max is 60min'),
})

type TNewCycleFormValidationSchema = z.infer<typeof newCycleFormValidationSchema>

type TCycle = {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date
}

function Home() {
    const [cycles, setCycles] = useState<TCycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { register, handleSubmit, watch, reset } = useForm<TNewCycleFormValidationSchema>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    const handleCreateNewCycle = (data: TNewCycleFormValidationSchema) => {
        const newCycle: TCycle = {
            id: new Date().getTime().toString(), // timestamp
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        setCycles(prev => [...prev, newCycle])
        setActiveCycleId(newCycle.id)

        reset()
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmountToShow = Math.floor(currentSeconds / 60)
    const secondsAmountToShow = currentSeconds % 60

    const minutes = String(minutesAmountToShow).padStart(2, '0')
    const seconds = String(secondsAmountToShow).padStart(2, '0')

    const task = watch('task')
    const isSubmitDisabled = !task

    useEffect(() => {
        if (activeCycle) {
            setInterval(() => {
                setAmountSecondsPassed(differenceInSeconds(new Date(), activeCycle.startDate))
            }, 1000)
        }
    }, [activeCycle])

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Will work on</label>
                    <TaskInput
                        id="task"
                        list="task-suggestions"
                        placeholder="Give your project a name"
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="My website" />
                        <option value="Studying" />
                        <option value="My self" />
                    </datalist>

                    <label htmlFor="minutesAmount">for</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutes.</span>
                </FormContainer>


                <CountDownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountDownContainer>


                <StartCountDownButton
                    type="submit"
                    disabled={isSubmitDisabled}
                >
                    <Play size={24} />
                    Begin
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}

export { Home }
