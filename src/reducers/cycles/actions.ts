import { TCycle } from "./reducer";

export enum EActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
    MARK_AS_FINISHED = 'MARK_AS_FINISHED',
}

export function addNewCycleAction(newCycle: TCycle) {
    return {
        type: EActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function interruptCycleAction() {
    return {
        type: EActionTypes.INTERRUPT_CYCLE,
    }
}

export function markAsFinishedCycleAction() {
    return {
        type: EActionTypes.MARK_AS_FINISHED,
    }
}
