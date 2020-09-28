import { RationalQuotient } from "../../../../../../src/general/math/rational/num/quotient"
import { isCommaSized } from "../../../../../../src/sagittal/ji/comma/name/typeGuards"

describe("isCommaSized", (): void => {
    it("returns true if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const candidateCommaSizedPitch = { quotient: [50, 57] as RationalQuotient }     // -226.841¢

        const actual = isCommaSized(candidateCommaSizedPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const candidateCommaSizedPitch = { quotient: [65, 57] as RationalQuotient }     // 227.373¢

        const actual = isCommaSized(candidateCommaSizedPitch)

        expect(actual).toBeFalsy()
    })
})
