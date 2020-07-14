import { Monzo } from "../../../../../src/general/music"
import { presentMonzo } from "../../../../../src/general/music/present"

describe("presentMonzo", () => {
    it("formats it correctly", () => {
        const monzo = [-8, -6, 3, 5, -1] as Monzo

        const result = presentMonzo(monzo)

        expect(result).toBe(`[ -8 -6 3 5 -1 ⟩`)
    })

    it("can format it using George Secor's punctuated format", () => {
        const monzo = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Monzo

        const result = presentMonzo(monzo, { punctuated: true })

        expect(result).toBe(`[ -8 -6, 3 5 -1, 0 0 0, 5 4 2, 3 ⟩`)
    })
})
