import {CommaClassId} from "../../../../../src/sagittal/notation"
import {JiNotationLevelId} from "../../../../../src/sagittal/notations"
import {getIntroducingJiNotationLevel} from "../../../../../src/sagittal/notations/ji"

describe("getIntroducingJiNotationLevel", (): void => {
    it("returns the lowest JI notation level which includes the given comma class id", (): void => {
        expect(getIntroducingJiNotationLevel(CommaClassId._5_7_k)).toBe(JiNotationLevelId.MEDIUM)
        expect(getIntroducingJiNotationLevel(CommaClassId._11_49_C)).toBe(JiNotationLevelId.HIGH)
        expect(getIntroducingJiNotationLevel(CommaClassId._55_M)).toBe(JiNotationLevelId.ULTRA)
        expect(getIntroducingJiNotationLevel(CommaClassId._11_13_C)).toBe(JiNotationLevelId.EXTREME)
    })

    // TODO: POST-NOTATION-GENERATION: JI NOTATION CLEAN-UP
    //  This module might totally go away, but if it doesn't, then this test won't be relevant until Prime Factor
    //  Notation is added
    // It("throws an error if the comma class ID is not a member of a JI notation", (): void => {
    //     Expect((): void => {
    //         GetIntroducingJiNotationLevel(CommaClassId.200)
    //     }).toThrowError("Comma class ID 200 does not appear in a JI notation level.")
    // })
})
