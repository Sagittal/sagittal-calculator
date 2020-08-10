import { DebugTarget, saveDebugMessage } from "../../debug"
import { scopesToSearch, solverStatus } from "../../globals"
import { presentSearchedAndPopulated } from "../present"
import { searchPopulatedScopes } from "./populatedScopes"

const searchScopes = () => {
    while (scopesToSearch.length > 0) {
        searchPopulatedScopes()
    }

    if (!solverStatus.finishedPopulating) {
        saveDebugMessage(`searching got ahead of populating; waiting 1 second for more scopes to be populated ${presentSearchedAndPopulated()}`, DebugTarget.SEARCH)

        searchScopes()
    }
}

export {
    searchScopes,
}
