import {Flavor} from "../../../../../../src/sagittal/accidental/flavor"
import {GlyphExpectation} from "../glyph/types"

interface FlavorsExpectation {
    evo: GlyphExpectation<Flavor.EVO>,
    revo: GlyphExpectation<Flavor.REVO>,
}

export {
    FlavorsExpectation,
}
