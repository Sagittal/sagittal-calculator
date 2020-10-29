import {Aim} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {flipSagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("flipSagittal", (): void => {
    it("flips the entire symbol from up to down (only modifies the core; does not need to change arm since their orientation is described relative to the core)", (): void => {
        const sagittal = getSagittal({                                   // `./|||\\
            armId: ArmId.WING_AGAINST_TICK,
            against: true,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.TRIPLE,
        })

        const actual = flipSagittal(sagittal)

        const expected = getSagittal({                                   // ,'\\!!!/
            armId: ArmId.WING_AGAINST_TICK,
            against: true,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.TRIPLE,
            aim: Aim.DOWN,
        })
        expect(actual).toEqual(expected)
    })
})
