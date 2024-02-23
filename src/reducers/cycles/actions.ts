import { TCycle } from "./reducer";

export enum EActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
    MARK_AS_FINISHED = 'MARK_AS_FINISHED',
}

const originalAppName = 'Timer React'

export function addNewCycleAction(newCycle: TCycle) {
    return {
        type: EActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function interruptCycleAction() {
    document.title = originalAppName
    return {
        type: EActionTypes.INTERRUPT_CYCLE,
    }
}

export function markAsFinishedCycleAction() {
    document.title = originalAppName
    return {
        type: EActionTypes.MARK_AS_FINISHED,
    }
}
