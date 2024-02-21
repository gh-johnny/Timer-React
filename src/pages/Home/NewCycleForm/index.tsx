import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { z } from "zod";
import { useForm } from "react-hook-form";

const newCycleFormValidationSchema = z.object({
    task: z.string().min(1, 'Please specify the task'),
    minutesAmount: z.number().min(1, 'Minimum is 5min').max(60, 'Max is 60min'),
})

export type TNewCycleFormValidationSchema = z.infer<typeof newCycleFormValidationSchema>

function NewCycleForm() {

    const { register, handleSubmit, watch, reset } = useForm<TNewCycleFormValidationSchema>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

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
