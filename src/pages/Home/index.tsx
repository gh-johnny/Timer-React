import { Play } from "phosphor-react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles"

const newCycleFormValidationSchema = z.object({
    task: z.string().min(1, 'Please specify the task'),
    minutesAmount: z.number().min(5, 'Minimum is 5min').max(60, 'Max is 60min'),
})

type TNewCycleFormValidationSchema = z.infer<typeof newCycleFormValidationSchema>

function Home() {

    const { register, handleSubmit, watch, } = useForm<TNewCycleFormValidationSchema>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    const handleCreateNewCycle = (data: TNewCycleFormValidationSchema) => {
        console.log(data)
    }


    const task = watch('task')
    const isSubmitDisabled = !task

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
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
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
