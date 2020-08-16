import { Ratio } from "../../../../../src/general"
import { presentRatio } from "../../../../../src/general/music/present"

describe("presentRatio", () => {
    it("it shows it with a slash", () => {
        const ratio = [77, 75] as Ratio

        const result = presentRatio(ratio)

        expect(result).toBe("77/75")
    })

    it("it can show it undirected, with a colon", () => {
        const ratio = [77, 75] as Ratio

        const result = presentRatio(ratio, { directed: false })

        expect(result).toBe("77:75")
    })
})
