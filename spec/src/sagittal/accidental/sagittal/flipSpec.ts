import {Aim, Sagittal} from "../../../../../src/sagittal/accidental"
import {ArmId, getArm, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {flipSagittal, getCore, Shafts} from "../../../../../src/sagittal/accidental/sagittal"

describe("flipSagittal", (): void => {
    it("flips the entire symbol from up to down (only modifies the core; does not need to change arm since their orientation is described relative to the core)", (): void => {
        const sagittal: Sagittal = {                                            // `./|||\\
            arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
            ...getCore(HeadId.DOUBLE_BARB, Shafts.TRIPLE),
        }

        const actual = flipSagittal(sagittal)

        const expected = {                                                      // ,'\\!!!/
            arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
            ...getCore(HeadId.DOUBLE_BARB, Shafts.TRIPLE, Aim.DOWN),
        }
        expect(actual).toEqual(expected)
    })
})
