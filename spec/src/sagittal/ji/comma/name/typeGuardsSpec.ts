import { RationalRatio } from "../../../../../../src/general/math/rational/num/ratio"
import { isCommaSized } from "../../../../../../src/sagittal/ji/comma/name/typeGuards"

describe("isCommaSized", (): void => {
    it("returns true if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const candidateCommaSizedPitch = { ratio: [50, 57] as RationalRatio }     // -226.841¢

        const actual = isCommaSized(candidateCommaSizedPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const candidateCommaSizedPitch = { ratio: [65, 57] as RationalRatio }     // 227.373¢

        const actual = isCommaSized(candidateCommaSizedPitch)

        expect(actual).toBeFalsy()
    })
})
