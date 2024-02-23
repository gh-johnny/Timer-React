import { Envelope } from "phosphor-react"

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

export enum EActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
    MARK_AS_FINISHED = 'MARK_AS_FINISHED',
}

function cyclesReducer(state: ICyclesState, action: { type: EActionTypes, payload: any }) {
    switch (action.type) {
        case EActionTypes.ADD_NEW_CYCLE:
            return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id
            }
        case EActionTypes.INTERRUPT_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map(cycle => cycle.id === state.activeCycleId ? { ...cycle, interruptedDate: new Date() } : cycle),
                activeCycleId: undefined,
            }
        case EActionTypes.MARK_AS_FINISHED:
            return {
                ...state,
                cycles: state.cycles.map(cycle => cycle.id === state.activeCycleId ? { ...cycle, finishedDate: new Date() } : cycle),
                activeCycleId: undefined,
            }
        default:
            return state
    }

}

export { cyclesReducer }
