import {Maybe} from "../../../../../src/general/code"
import {Ascii, Compatible, Flavor, Smiley, Unicode} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"

// Todo: these sagittal/accidental helpers should be sorted into submodules

type AccidentalOptions = Partial<{
    armId: ArmId,
    against: boolean,
    headId: HeadId,
    shafts: Shafts,
    down: boolean,
    compatible: Compatible,
}>

interface GlyphExpectation<T extends Maybe<Flavor> = undefined> {
    ascii: Ascii<T>,
    unicode: Unicode<T>,
    smiley: Smiley<T>,
}

interface AccidentalExpectation {
    evo: GlyphExpectation<Flavor.EVO>,
    revo: GlyphExpectation<Flavor.REVO>,
}

export {
    GlyphExpectation,
    AccidentalExpectation,
    AccidentalOptions,
}
