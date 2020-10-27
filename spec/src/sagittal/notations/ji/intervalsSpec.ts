import { JiNotationLevelId } from "../../../../../src/sagittal/notations/ji"
import { HIGHINA, INA_SIZES, MEDINA, MINA, TINA, ULTRINA } from "../../../../../src/sagittal/notations/ji/intervals"

describe("INA_SIZES", (): void => {
    it("has the JI levels' step sizes equal to the correct ina", (): void => {
        expect(INA_SIZES[ JiNotationLevelId.INSANE ]).toBeCloseToTyped(TINA)
        expect(INA_SIZES[ JiNotationLevelId.EXTREME ]).toBeCloseToTyped(MINA)
        expect(INA_SIZES[ JiNotationLevelId.ULTRA ]).toBeCloseToTyped(ULTRINA)
        expect(INA_SIZES[ JiNotationLevelId.HIGH ]).toBeCloseToTyped(HIGHINA)
        expect(INA_SIZES[ JiNotationLevelId.MEDIUM ]).toBeCloseToTyped(MEDINA)
    })
})
