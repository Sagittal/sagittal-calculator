import {Compatible} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"

type AccidentalOptions = Partial<{
    armId: ArmId,
    anti: boolean,
    headId: HeadId,
    shafts: Shafts,
    down: boolean,
    compatible: Compatible,
}>

export {
    AccidentalOptions,
}
