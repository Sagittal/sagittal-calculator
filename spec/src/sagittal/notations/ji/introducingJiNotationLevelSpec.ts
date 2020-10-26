import {CommaClassId} from "../../../../../src/sagittal/ji/comma/class"
import { JiNotationLevel } from "../../../../../src/sagittal/notations"
import { getIntroducingJiNotationLevel } from "../../../../../src/sagittal/notations/ji"

describe("getIntroducingJiNotationLevel", (): void => {
    it("returns the lowest JI notation level which includes the given comma class id", (): void => {
        expect(getIntroducingJiNotationLevel(CommaClassId._5_7_k)).toBe(JiNotationLevel.MEDIUM)
        expect(getIntroducingJiNotationLevel(CommaClassId._11_49_C)).toBe(JiNotationLevel.HIGH)
        expect(getIntroducingJiNotationLevel(CommaClassId._55_M)).toBe(JiNotationLevel.ULTRA)
        expect(getIntroducingJiNotationLevel(CommaClassId._11_13_C)).toBe(JiNotationLevel.EXTREME)
    })

    // TODO: UNTIL PRIME FACTOR NOTATION INTRODUCES AN EXAMPLE COMMA CLASS
    // It("throws an error if the comma class ID is not a member of a JI notation", (): void => {
    //     Expect((): void => {
    //         GetIntroducingJiNotationLevel(CommaClassId.200)
    //     }).toThrowError("Comma class ID 200 does not appear in a JI notation level.")
    // })
})
