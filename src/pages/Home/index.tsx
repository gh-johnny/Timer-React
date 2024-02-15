import { Play } from "phosphor-react"

import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles"

function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Will work on</label>
                    <TaskInput
                        id="task"
                        placeholder="Give your project a name"
                    />

                    <label htmlFor="minutesAmount">for</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
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
                    disabled={false}
                    type="submit"
                >
                    <Play size={24} />
                    Begin
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}

export { Home }
