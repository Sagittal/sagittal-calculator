import {Flavor} from "../../../../../../src/sagittal/accidental"
import {GlyphExpectation} from "../glyph/types"

interface FlavorsExpectation {
    evo: GlyphExpectation<Flavor.EVO>,
    revo: GlyphExpectation<Flavor.REVO>,
}

export {
    FlavorsExpectation,
}
