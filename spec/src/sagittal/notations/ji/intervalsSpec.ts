import { Level } from "../../../../../src/sagittal/notations/ji"
import { HIGHINA, INA_SIZES, MEDINA, MINA, TINA, ULTRINA } from "../../../../../src/sagittal/notations/ji/intervals"

describe("INA_SIZES", (): void => {
    it("has the levels' step sizes equal to the correct ina", (): void => {
        expect(INA_SIZES[ Level.INSANE ]).toBeCloseToTyped(TINA)
        expect(INA_SIZES[ Level.EXTREME ]).toBeCloseToTyped(MINA)
        expect(INA_SIZES[ Level.ULTRA ]).toBeCloseToTyped(ULTRINA)
        expect(INA_SIZES[ Level.HIGH ]).toBeCloseToTyped(HIGHINA)
        expect(INA_SIZES[ Level.MEDIUM ]).toBeCloseToTyped(MEDINA)
    })
})
