import { Ratio } from "../../../../../../src/general/math/num/ratio"
import { isCommaSized } from "../../../../../../src/sagittal/ji/comma/name/typeGuards"

describe("isCommaSized", (): void => {
    it("returns true if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const pitch = { ratio: [50, 57] as Ratio }     // -226.841¢

        const actual = isCommaSized(pitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const pitch = { ratio: [65, 57] as Ratio }     // 227.373

        const actual = isCommaSized(pitch)

        expect(actual).toBeFalsy()
    })
})
