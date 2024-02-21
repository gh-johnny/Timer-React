import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../../../contexts/CyclesContext";

function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <>
            <FormContainer>
                <label htmlFor="task">Will work on</label>
                <TaskInput
                    disabled={!!activeCycle}
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
                    // step={5}
                    min={1}
                    max={60}
                    {...register('minutesAmount', { valueAsNumber: true })}
                />

                <span>minutes.</span>
            </FormContainer>
        </>
    )
}

export { NewCycleForm }
