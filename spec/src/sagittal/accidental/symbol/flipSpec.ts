import {Aim, Sagittal} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arm"
import {ArmId, HeadId, Orientation} from "../../../../../src/sagittal/accidental/flacco/types"
import {flipSagittal, getCore, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("flipSagittal", (): void => {
    it("flips the entire symbol from up to down (only modifies the core; does not need to change arm since their orientation is described relative to the core)", (): void => {
        const sagittal: Sagittal = {                                                // `./|||\\
            arm: getArm(ArmId.WING_FROM_TICK, Orientation.AGAINST),
            core: getCore(HeadId.DOUBLE_BARB, Shafts.TRIPLE),
        }

        const actual = flipSagittal(sagittal)

        const expected = {                                                      // ,'\\!!!/
            arm: getArm(ArmId.WING_FROM_TICK, Orientation.AGAINST),
            core: getCore(HeadId.DOUBLE_BARB, Shafts.TRIPLE, Aim.DOWN),
        }
        expect(actual).toEqual(expected)
    })
})
