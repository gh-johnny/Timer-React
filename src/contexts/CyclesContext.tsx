import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { TCycle, cyclesReducer, ICyclesState } from "../reducers/cycles/reducer"
import { addNewCycleAction, interruptCycleAction, markAsFinishedCycleAction } from "../reducers/cycles/actions"
import { localStorageUtils, localStorageKeyPrefix } from "../utils/localStorageUtils"
import { differenceInSeconds } from "date-fns"

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

const localStorageKeyVersion = '1.0.0'
const localStorageKey = `${localStorageKeyPrefix}cycles-state-${localStorageKeyVersion}`

function CyclesContextProvider({ children }: { children: ReactNode }) {
    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: undefined,
    },
        (initialState) => {
            const { localStorageGetItem } = localStorageUtils(localStorageKey)
            if (localStorageGetItem()) return localStorageGetItem() as ICyclesState
            return initialState
        }
    )

    const { cycles, activeCycleId } = cyclesState
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) return differenceInSeconds(new Date(), activeCycle.startDate)
        return 0
    })

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
        document.title = originalAppName
    }

    useEffect(() => {
        const { localStorageSetItem } = localStorageUtils(localStorageKey)
        localStorageSetItem(cyclesState)
    }, [cyclesState])

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

