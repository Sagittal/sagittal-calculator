// TODO: I feel like the biggest issue now is that they may not still be as interwoven as possible:
//  Populating and searching, that is.
//  I'm slightly concerned that once it gets to huge lists of scopes,
//   We're going to get stuck on the populating step for too long.
//  I guess that's an important thing to consider though:
//   It doesn't really matter that much if we get stuck on the searching side;
//   The risk, really, is getting stuck in the populating side and ending up with a giant object.
//  However, if you put a console log right after the work it does in populateScopesForChunkCount,
//   It does seem to be interruptable in a good way, so that's a good sign.

import { debug } from "../debug"
import { debugSearchedAndPopulated } from "./debug"
import { status } from "./globals"
import { populateScopes } from "./populate"
import { searchScopes } from "./search"

const populateAndSearchScopes = async () => {
    populateScopes().then(() => {
        if (debug.all || debug.solver) console.log("\n\nFINISHED POPULATING".cyan)
        status.finishedPopulating = true
    })

    await searchScopes()

    if (debug.all || debug.solver) console.log(`\n\nFINAL STATUS ${debugSearchedAndPopulated()}`.yellow)
}

export {
    populateAndSearchScopes,
}
