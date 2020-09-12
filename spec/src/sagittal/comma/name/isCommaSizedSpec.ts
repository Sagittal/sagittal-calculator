import { Ratio } from "../../../../../src/general/math/ratio"
import { computeIsCommaSized } from "../../../../../src/sagittal/comma/name/isCommaSized"

describe("computeIsCommaSized", () => {
    it("returns true if the pitch is smaller than the max size category bound (a double apotome)", () => {
        const pitch = { ratio: [50, 57] as Ratio }     // -226.841¢

        const actual = computeIsCommaSized(pitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is smaller than the max size category bound (a double apotome)", () => {
        const pitch = { ratio: [65, 57] as Ratio }     // 227.373

        const actual = computeIsCommaSized(pitch)

        expect(actual).toBeFalsy()
    })
})
