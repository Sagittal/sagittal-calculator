import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { HIGHINA, INA_SIZES, MEDINA, MINA, TINA, ULTRINA } from "../../../../../src/sagittal/notations/ji/intervals"

describe("INA_SIZES", (): void => {
    it("has the JI levels' step sizes equal to the correct ina", (): void => {
        expect(INA_SIZES[ JiNotationLevel.INSANE ]).toBeCloseToTyped(TINA)
        expect(INA_SIZES[ JiNotationLevel.EXTREME ]).toBeCloseToTyped(MINA)
        expect(INA_SIZES[ JiNotationLevel.ULTRA ]).toBeCloseToTyped(ULTRINA)
        expect(INA_SIZES[ JiNotationLevel.HIGH ]).toBeCloseToTyped(HIGHINA)
        expect(INA_SIZES[ JiNotationLevel.MEDIUM ]).toBeCloseToTyped(MEDINA)
    })
})
