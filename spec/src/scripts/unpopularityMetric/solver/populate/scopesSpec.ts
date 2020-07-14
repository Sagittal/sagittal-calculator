import { debug } from "../../../../../../src/scripts/unpopularityMetric/debug"
import { populateScopes } from "../../../../../../src/scripts/unpopularityMetric/solver"

describe("populateScopes", () => {
    it("runs without error", () => {
        debug.all = false

        populateScopes()
    })
})
