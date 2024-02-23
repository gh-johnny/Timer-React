import { ReactNode, createContext, useReducer, useState } from "react"

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
        switch (action.type) {
            case "addNewCycle":
                return {
                    ...state,
                    cycles: [...state.cycles, action.payload.newCycle],
                    activeCycleId: action.payload.newCycle.id
                }
            case "interruptCycle":
                return {
                    ...state,
                    cycles: state.cycles.map(cycle => cycle.id === state.activeCycleId ? { ...cycle, interruptedDate: new Date() } : cycle),
                    activeCycleId: undefined,
                }
            case "markAsFinished":
                return {
                    ...state,
                    cycles: state.cycles.map(cycle => cycle.id === state.activeCycleId ? { ...cycle, finishedDate: new Date() } : cycle),
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
        dispatch({
            type: 'markAsFinished',
            payload: {
                activeCycleId,
            }
        })
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

