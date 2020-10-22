// A thought in case this ever comes up again:
//  I feel like the biggest issue now is that they may not still be as interwoven as possible:
//  Populating and searching, that is.
//  I'm slightly concerned that once it gets to huge lists of scopes,
//   We're going to get stuck on the populating step for too long.
//  I guess that's an important idea to consider though:
//   It doesn't matter that much if we get stuck on the searching side;
//   The risk is getting stuck in the populating side and ending up with a giant object.
//  However, if you put a console log right after the work it does in populateScopes,
//   It does seem to be interruptable in a good way, so that's a good sign.

import {LogTarget, saveLog} from "../../../general"
import {solverStatus} from "../globals"
import {formatSearchedAndPopulated} from "./io"
import {populateScopes, populateScopesSync} from "./populate"
import {searchScopes, searchScopesSync} from "./search"

const populateAndSearchScopesAndPerfectMetrics = async (): Promise<void> => {
    populateScopes().then((): void => {
        solverStatus.finishedPopulating = true
    })

    await searchScopes()

    saveLog(`\n\nFINAL STATUS ${formatSearchedAndPopulated()}`, LogTarget.FINAL)
}

const populateAndSearchScopesAndPerfectMetricsSync = (): void => {
    populateScopesSync()

    solverStatus.finishedPopulating = true

    searchScopesSync()

    saveLog(`\n\nFINAL STATUS ${formatSearchedAndPopulated()}`, LogTarget.FINAL)
}

export {
    populateAndSearchScopesAndPerfectMetrics,
    populateAndSearchScopesAndPerfectMetricsSync,
}
