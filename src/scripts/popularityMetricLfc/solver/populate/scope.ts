import { Count, Io, LogTarget, saveLog } from "../../../../general"
import { Scope } from "../../bestMetric"
import { scopesToSearch, solverStatus } from "../../globals"

const populateScope = (scope: Scope): void => {
    scopesToSearch.push(scope)

    solverStatus.populatedScopeCount = solverStatus.populatedScopeCount + 1 as Count<Scope>

    if (solverStatus.populatedScopeCount % 1000 === 0) {
        saveLog(`${solverStatus.populatedScopeCount} scopes have been populated so far` as Io, LogTarget.POPULATE)
    }
}

export {
    populateScope,
}
