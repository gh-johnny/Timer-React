import { ReactNode, createContext, useState } from "react"

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

export const CyclesContext = createContext({} as ICyclesContext)

function CyclesContextProvider({ children }: { children: ReactNode }) {
    const [cycles, setCycles] = useState<TCycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | undefined>(undefined)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const setSecondsPasses = (seconds: number) => {
        setAmountSecondsPassed(seconds)
    }

    const markCurrentCycleAsFinished = () => {
        setCycles(prev => prev.map(cycle => cycle.id === activeCycleId ? { ...cycle, finishedDate: new Date() } : cycle));
        setActiveCycleId(undefined)
    }

    const createNewCycle = (data: TCreateCycleData) => {
        const newCycle: TCycle = {
            id: new Date().getTime().toString(), // timestamp
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        setCycles(prev => [...prev, newCycle])
        setActiveCycleId(newCycle.id)
        setAmountSecondsPassed(0)
    }

    const interruptCycle = () => {
        setCycles(prev => prev.map(cycle => cycle.id === activeCycleId ? { ...cycle, interruptedDate: new Date() } : cycle))
        setActiveCycleId(undefined)
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

