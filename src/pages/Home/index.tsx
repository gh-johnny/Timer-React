import { HandPalm, Play } from "phosphor-react"
import { HomeContainer } from "./styles"
import { createContext, useState } from "react"
import { CountDown } from "./CountDown"
import { NewCycleForm } from "./NewCycleForm"
import { StartCountDownButton, StopCountDownButton } from "./CountDown/styles"
import { z } from "zod"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

type TCycle = {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date,
}

interface ICyclesContext {
    activeCycle: TCycle | undefined
    activeCycleId: string | null,
    amountSecondsPassed: number,
    setSecondsPasses: (seconds: number) => void,
    markCurrentCycleAsFinished: () => void,
}

const newCycleFormValidationSchema = z.object({
    task: z.string().min(1, 'Please specify the task'),
    minutesAmount: z.number().min(1, 'Minimum is 5min').max(60, 'Max is 60min'),
})
type TNewCycleFormValidationSchema = z.infer<typeof newCycleFormValidationSchema>

export const CyclesContext = createContext({} as ICyclesContext)

function Home() {
    const [cycles, setCycles] = useState<TCycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const cycleForm = useForm<TNewCycleFormValidationSchema>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })
    const { handleSubmit, reset, watch } = cycleForm

    const handleCreateNewCycle = (data: TNewCycleFormValidationSchema) => {
        const newCycle: TCycle = {
            id: new Date().getTime().toString(), // timestamp
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        setCycles(prev => [...prev, newCycle])
        setActiveCycleId(newCycle.id)
        setAmountSecondsPassed(0)

        reset()
    }

    const handleInterruptCycle = () => {
        setCycles(prev => prev.map(cycle => cycle.id === activeCycleId ? { ...cycle, interruptedDate: new Date() } : cycle))
        setActiveCycleId(null)
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    function setSecondsPasses(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function markCurrentCycleAsFinished() {
        setCycles(prev => prev.map(cycle => cycle.id === activeCycleId ? { ...cycle, finishedDate: new Date() } : cycle));
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form
                onSubmit={handleSubmit(handleCreateNewCycle)}
                action=""
            >
                <CyclesContext.Provider
                    value={{
                        activeCycle,
                        activeCycleId,
                        markCurrentCycleAsFinished,
                        amountSecondsPassed,
                        setSecondsPasses
                    }}
                >
                    <FormProvider {...cycleForm}>
                        <NewCycleForm />
                    </FormProvider>
                    <CountDown />
                </CyclesContext.Provider>

                {
                    activeCycle ?
                        <StopCountDownButton
                            type="button"
                            onClick={handleInterruptCycle}
                        >
                            <HandPalm size={24} />
                            Stop
                        </StopCountDownButton>
                        :
                        <StartCountDownButton
                            type="submit"
                            disabled={isSubmitDisabled}
                        >
                            <Play size={24} />
                            Start
                        </StartCountDownButton>
                }
            </form>
        </HomeContainer>
    )
}

export { Home }
