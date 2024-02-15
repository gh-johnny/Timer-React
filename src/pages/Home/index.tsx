import { Play } from "phosphor-react"
import { useForm } from "react-hook-form"

import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles"

function Home() {

    const { register, handleSubmit, watch } = useForm()

    const handleCreateNewCycle = (data: any) => {
        console.log(data)
    }

    const task = watch('task')
    const isSubmitDisabled = !!!task


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
