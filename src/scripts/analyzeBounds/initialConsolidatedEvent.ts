import {RANKS} from "./ranks"

const computeInitialConsolidatedEvent = analyzedEvent => ({
    level: analyzedEvent.level,
    type: analyzedEvent.type,
    name: analyzedEvent.name,
    position: analyzedEvent.position,
    exact: analyzedEvent.exact,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    nextEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length - 1,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length - 1,
})

export {
    computeInitialConsolidatedEvent,
}
