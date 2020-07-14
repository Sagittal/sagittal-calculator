import { Scope } from "../../../../../../../src/scripts/unpopularityMetric/solver"
import { computeBestMetric } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric"

describe("computeBestMetric", () => {
    it("runs without error", () => {
        const scope: Scope = [] as unknown as Scope

        computeBestMetric(scope)
    })
})
