import { Scope } from "../../../../../../../src/scripts/unpopularityMetric/solver"
import { possiblyUpdateBestMetricAsSideEffect } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric"

describe("possiblyUpdateBestMetricAsSideEffect", () => {
    it("runs without error", () => {
        const scope: Scope = [] as unknown as Scope

        possiblyUpdateBestMetricAsSideEffect(scope)
    })
})
