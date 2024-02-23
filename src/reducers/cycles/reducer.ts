import { produce } from "immer"
import { EActionTypes } from "./actions"

export type TCycle = {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date,
}

interface ICyclesState {
    cycles: TCycle[],
    activeCycleId: string | undefined,
}

function cyclesReducer(state: ICyclesState, action: { type: EActionTypes, payload?: any }) {
    switch (action.type) {
        case EActionTypes.ADD_NEW_CYCLE:
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })

        case EActionTypes.INTERRUPT_CYCLE: {
            const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId)
            const indexExists = currentCycleIndex > 0
            if (!indexExists) return state

            return produce(state, draft => {
                draft.cycles[currentCycleIndex].interruptedDate = new Date()
                draft.activeCycleId = undefined
            })
        }
        case EActionTypes.MARK_AS_FINISHED: {
            const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId)
            const indexExists = currentCycleIndex > 0
            if (!indexExists) return state

            return produce(state, draft => {
                draft.cycles[currentCycleIndex].finishedDate = new Date()
                draft.activeCycleId = undefined
            })
        }
        default:
            return state
    }

}

export { cyclesReducer }
