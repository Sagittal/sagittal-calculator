import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {flipSagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {computeSagittal} from "../../../../helpers/src/sagittal/accidental/sagittal"

describe("flipSagittal", (): void => {
    it("flips the entire symbol from up to down (only modifies the core; does not need to change arm since their orientation is described relative to the core)", (): void => {
        const sagittal = computeSagittal({                                   // `./|||\\
            armId: ArmId.WING_AGAINST_TICK,
            against: true,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.TRIPLE,
        })

        const actual = flipSagittal(sagittal)

        const expected = computeSagittal({                                   // ,'\\!!!/
            armId: ArmId.WING_AGAINST_TICK,
            against: true,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.TRIPLE,
            down: true,
        })
        expect(actual).toEqual(expected)
    })
})
