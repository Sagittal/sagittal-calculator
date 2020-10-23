import {Aim, Symbol} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName, FlagComboName, Orientation} from "../../../../../src/sagittal/accidental/flacco/types"
import {flipSymbol, Shafts} from "../../../../../src/sagittal/accidental/symbol"
import {getCore} from "../../../../../src/sagittal/accidental/symbol/core"

describe("flipSymbol", (): void => {
    it("flips the entire symbol from up to down (only modifies the core; does not need to change arm since their orientation is decribed relative to the core)", (): void => {
        const symbol: Symbol = {                                                // `./|||\\
            arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
            core: getCore(FlagComboName.DOUBLE_BARB, Shafts.TRIPLE),
        }

        const actual = flipSymbol(symbol)

        const expected = {                                                      // ,'\\!!!/
            arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
            core: getCore(FlagComboName.DOUBLE_BARB, Shafts.TRIPLE, Aim.DOWN),
        }
        expect(actual).toEqual(expected)
    })
})
