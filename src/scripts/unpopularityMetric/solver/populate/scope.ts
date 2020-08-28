import { Count, IO } from "../../../../general"
import { Scope } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { scopesToSearch, solverStatus } from "../../globals"

const populateScope = (scope: Scope) => {
    scopesToSearch.push(scope)

    solverStatus.populatedScopeCount = solverStatus.populatedScopeCount + 1 as Count<Scope>

    if (solverStatus.populatedScopeCount % 1000 === 0) {
        saveDebugMessage(
            `${solverStatus.populatedScopeCount} scopes have been populated so far` as IO,
            DebugTarget.POPULATE,
        )
    }
}

export {
    populateScope,
}
