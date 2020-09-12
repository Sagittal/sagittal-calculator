// A thought in case this ever comes up again:
//  I feel like the biggest issue now is that they may not still be as interwoven as possible:
//  Populating and searching, that is.
//  I'm slightly concerned that once it gets to huge lists of scopes,
//   We're going to get stuck on the populating step for too long.
//  I guess that's an important idea to consider though:
//   It doesn't really matter that much if we get stuck on the searching side;
//   The risk, really, is getting stuck in the populating side and ending up with a giant object.
//  However, if you put a console log right after the work it does in populateScopes,
//   It does seem to be interruptable in a good way, so that's a good sign.

import { Io, LogTarget, saveLog } from "../../../general"
import { solverStatus } from "../globals"
import { formatSearchedAndPopulated } from "./io"
import { populateScopes } from "./populate"
import { searchScopes } from "./search"

const populateAndSearchScopesAndPerfectMetrics = async () => {
    populateScopes().then(() => {
        solverStatus.finishedPopulating = true
    })

    await searchScopes()

    saveLog(`\n\nFINAL STATUS ${formatSearchedAndPopulated()}` as Io, LogTarget.FINAL_SOLVER_RESULTS)
}

export {
    populateAndSearchScopesAndPerfectMetrics,
}
