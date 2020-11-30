import {JiNotationLevelId} from "../../../../../src/sagittal"
import {
    HIGHINA_CENTS,
    INA_CENTS_SIZES,
    MEDINA_CENTS,
    MINA_CENTS,
    TINA_CENTS,
    ULTRINA_CENTS,
} from "../../../../../src/sagittal/notations/ji/intervals"

describe("INA_CENTS_SIZES", (): void => {
    it("has the JI levels' step sizes equal to the correct ina", (): void => {
        expect(INA_CENTS_SIZES[JiNotationLevelId.INSANE]).toBeCloseToTyped(TINA_CENTS)
        expect(INA_CENTS_SIZES[JiNotationLevelId.EXTREME]).toBeCloseToTyped(MINA_CENTS)
        expect(INA_CENTS_SIZES[JiNotationLevelId.ULTRA]).toBeCloseToTyped(ULTRINA_CENTS)
        expect(INA_CENTS_SIZES[JiNotationLevelId.HIGH]).toBeCloseToTyped(HIGHINA_CENTS)
        expect(INA_CENTS_SIZES[JiNotationLevelId.MEDIUM]).toBeCloseToTyped(MEDINA_CENTS)
    })
})
