import { presentRatio } from "../../../../../src/utilities/comma/present/ratio"
import { Ratio } from "../../../../../src/utilities/types"

describe("presentRatio", () => {
    it("it shows it with a slash", () => {
        const ratio = [77, 75] as Ratio

        const result = presentRatio(ratio)

        expect(result).toBe("77/75")
    })
})
