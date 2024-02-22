import { ReactNodem, createContext, useReducer, useState } from "react"

type TCycle = {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date,
}

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

interface ICyclesState {
    cycles: TCycle[],
    activeCycleId: string | undefined,
}

export const CyclesContext = createContext({} as ICyclesContext)

function CyclesContextProvider({ children }: { children: ReactNode }) {
    const [cyclesState, dispatch] = useReducer((state: ICyclesState, action: any) => {
        if (action.type === "addNewCycle") {
            return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id
            }
        }

        if (action.type === "interruptCycle") {
            return {
                ...state,
                cycles: state.cycles.map(cycle => cycle.id === state.activeCycleId ? { ...cycle, interruptedDate: new Date() } : cycle),
                activeCycleId: undefined,
            }
        }
        return state

    }, {
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
        // setCycles(prev => prev.map(cycle => cycle.id === activeCycleId ? { ...cycle, finishedDate: new Date() } : cycle));
        dispatch({
            type: 'markAsFinished',
            payload: {
                activeCycleId,
            }
        })
        setActiveCycleId(undefined)
    }

    const createNewCycle = (data: TCreateCycleData) => {
        const newCycle: TCycle = {
            id: new Date().getTime().toString(), // timestamp
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        dispatch({
            type: 'addNewCycle',
            payload: {
                newCycle
            }
        })
        setAmountSecondsPassed(0)
    }

    const interruptCycle = () => {
        // setCycles(prev => prev.map(cycle => cycle.id === activeCycleId ? { ...cycle, interruptedDate: new Date() } : cycle))

        dispatch({
            type: 'interruptCycle',
            payload: {
                activeCycleId,
            }
        })
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

