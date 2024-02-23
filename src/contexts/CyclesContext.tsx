import { ReactNode, createContext, useReducer, useState } from "react"
import { TCycle, cyclesReducer } from "../reducers/cycles/reducer"
import { addNewCycleAction, interruptCycleAction, markAsFinishedCycleAction } from "../reducers/cycles/actions"

type TCreateCycleData = {
    task: string,
    minutesAmount: number,
}

interface ICyclesContext {
    cycles: TCycle[],
    activeCycle: TCycle | undefined
    activeCycleId: string | undefined,
    amountSecondsPassed: number,
    setSecondsPasses: (seconds: number) => void,
    markCurrentCycleAsFinished: () => void,
    createNewCycle: (data: TCreateCycleData) => void,
    interruptCycle: () => void,
}

export const CyclesContext = createContext({} as ICyclesContext)

function CyclesContextProvider({ children }: { children: ReactNode }) {

    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: undefined,
    })

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { cycles, activeCycleId } = cyclesState
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const setSecondsPasses = (seconds: number) => {
        setAmountSecondsPassed(seconds)
    }

    const markCurrentCycleAsFinished = () => {
        dispatch(markAsFinishedCycleAction())
    }

    const createNewCycle = (data: TCreateCycleData) => {
        const newCycle: TCycle = {
            id: new Date().getTime().toString(), // timestamp
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        dispatch(addNewCycleAction(newCycle))
        setAmountSecondsPassed(0)
    }

    const interruptCycle = () => {
        dispatch(interruptCycleAction())
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                markCurrentCycleAsFinished,
                amountSecondsPassed,
                setSecondsPasses,
                createNewCycle,
                interruptCycle,
            }}
        >
            {children}
        </CyclesContext.Provider>
    )
}

export { CyclesContextProvider }

