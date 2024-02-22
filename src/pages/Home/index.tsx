import { HandPalm, Play } from "phosphor-react"
import { HomeContainer } from "./styles"
import { CountDown } from "./CountDown"
import { NewCycleForm } from "./NewCycleForm"
import { StartCountDownButton, StopCountDownButton } from "./CountDown/styles"
import { z } from "zod"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { CyclesContext } from "../../contexts/CyclesContext"

const newCycleFormValidationSchema = z.object({
    task: z.string().min(1, 'Please specify the task'),
    minutesAmount: z.number().min(1, 'Minimum is 5min').max(60, 'Max is 60min'),
})

type TNewCycleFormValidationSchema = z.infer<typeof newCycleFormValidationSchema>

function Home() {
    const { activeCycle, createNewCycle, interruptCycle } = useContext(CyclesContext)

    const cycleForm = useForm<TNewCycleFormValidationSchema>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })
    const { handleSubmit, reset, watch } = cycleForm

    const handleCreateNewCycle = (data: TNewCycleFormValidationSchema) => {
        createNewCycle(data)
        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form
                onSubmit={handleSubmit(handleCreateNewCycle)}
                action=""
            >
                <FormProvider {...cycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <CountDown />
                {
                    activeCycle && !activeCycle?.finishedDate ?
                        <StopCountDownButton
                            type="button"
                            onClick={interruptCycle}
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
