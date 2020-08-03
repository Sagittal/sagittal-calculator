import { doOnNextEventLoop } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { scopesToSearch, solverStatus } from "../../globals"
import { presentSearchedAndPopulated } from "../present"
import { searchPopulatedScopes } from "./populatedScopes"

const ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP = 1000

const searchScopes = async () => {
    while (scopesToSearch.length > 0) {
        await doOnNextEventLoop(searchPopulatedScopes)
    }

    if (!solverStatus.finishedPopulating) {
        saveDebugMessage(`searching got ahead of populating; waiting 1 second for more scopes to be populated ${presentSearchedAndPopulated()}`, DebugTarget.SEARCH)

        return doOnNextEventLoop(searchScopes, ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP)
    }
}

export {
    searchScopes,
}
