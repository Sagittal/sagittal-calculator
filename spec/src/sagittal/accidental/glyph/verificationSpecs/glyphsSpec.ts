import {isUndefined} from "../../../../../../src/general/code"
import {camelCaseToConstantCase} from "../../../../../../src/general/code/case"
import {Ascii, Compatible, Smiley, Unicode} from "../../../../../../src/sagittal/accidental"
import {AccentId, HeadId} from "../../../../../../src/sagittal/accidental/flacco"
import {Shafts} from "../../../../../../src/sagittal/accidental/sagittal"
import {
    computeAccentGlyphExpectation,
    computeCompatibleGlyphExpectation,
    computeCoreGlyphExpectation,
} from "../../../../../helpers/src/sagittal/accidental/glyph/glyphExpectation"
import {GlyphExpectation} from "../../../../../helpers/src/sagittal/accidental/glyph/types"

describe("glyphs", (): void => {
    it("has the correct core glyphs and computes their IO correctly", (): void => {
        const coreGlyphExpectations: Record<string, GlyphExpectation> = {}

        Object.values(HeadId).forEach((headId: HeadId): void => {
            Object.values(Shafts).forEach((shafts: Shafts): void => {
                [false, true].forEach((down: boolean): void => {
                    const coreGlyphExpectation = computeCoreGlyphExpectation(headId, {shafts, down})
                    const nameArray = [camelCaseToConstantCase(headId)] as string[]
                    if (shafts !== Shafts.SINGLE) nameArray.push(camelCaseToConstantCase(shafts))
                    if (down) nameArray.push("DOWN")
                    const name = nameArray.join("_")

                    if (!isUndefined(coreGlyphExpectation)) coreGlyphExpectations[name] = coreGlyphExpectation
                })
            })
        })

        const expected: Record<string, GlyphExpectation> = {
            RIGHT_SCROLL: {
                unicode: "" as Unicode,
                ascii: "|(" as Ascii,
                smiley: ":|(:" as Smiley,
            },
            RIGHT_SCROLL_DOWN: {
                unicode: "" as Unicode,
                ascii: "!(" as Ascii,
                smiley: ":!(:" as Smiley,
            },
            LEFT_BARB: {
                unicode: "" as Unicode,
                ascii: "/|" as Ascii,
                smiley: ":/|:" as Smiley,
            },
            LEFT_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!" as Ascii,
                smiley: ":\\!:" as Smiley,
            },
            RIGHT_ARC: {
                unicode: "" as Unicode,
                ascii: "|)" as Ascii,
                smiley: ":|):" as Smiley,
            },
            RIGHT_ARC_DOWN: {
                unicode: "" as Unicode,
                ascii: "!)" as Ascii,
                smiley: ":!):" as Smiley,
            },
            DOUBLE_LEFT_BARB: {
                unicode: "" as Unicode,
                ascii: "//|" as Ascii,
                smiley: ":/ /|:" as Smiley,
            },
            DOUBLE_LEFT_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\\\!" as Ascii,
                smiley: ":\\ \\!:" as Smiley,
            },
            BARB_AND_ARC: {
                unicode: "" as Unicode,
                ascii: "/|)" as Ascii,
                smiley: ":/|):" as Smiley,
            },
            BARB_AND_ARC_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!)" as Ascii,
                smiley: ":\\!):" as Smiley,
            },
            DOUBLE_BARB: {
                unicode: "" as Unicode,
                ascii: "/|\\" as Ascii,
                smiley: ":/|\\:" as Smiley,
            },
            DOUBLE_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!/" as Ascii,
                smiley: ":\\!/:" as Smiley,
            },
            DOUBLE_ARC: {
                unicode: "" as Unicode,
                ascii: "(|)" as Ascii,
                smiley: ":(|):" as Smiley,
            },
            DOUBLE_ARC_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!)" as Ascii,
                smiley: ":(!):" as Smiley,
            },
            ARC_AND_BARB: {
                unicode: "" as Unicode,
                ascii: "(|\\" as Ascii,
                smiley: ":(|\\:" as Smiley,
            },
            ARC_AND_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!/" as Ascii,
                smiley: ":(!/:" as Smiley,
            },
            DOUBLE_SCROLL_DOUBLE: {
                unicode: "" as Unicode,
                ascii: ")||(" as Ascii,
                smiley: ":)||(:" as Smiley,
            },
            DOUBLE_SCROLL_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!!(" as Ascii,
                smiley: ":)!!(:" as Smiley,
            },
            RIGHT_ARC_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "||)" as Ascii,
                smiley: ":||):" as Smiley,
            },
            RIGHT_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!)" as Ascii,
                smiley: ":!!):" as Smiley,
            },
            RIGHT_BARB_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "||\\" as Ascii,
                smiley: ":||\\:" as Smiley,
            },
            RIGHT_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!/" as Ascii,
                smiley: ":!!/:" as Smiley,
            },
            BARB_AND_ARC_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "/||)" as Ascii,
                smiley: ":/||):" as Smiley,
            },
            BARB_AND_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!!)" as Ascii,
                smiley: ":\\!!):" as Smiley,
            },
            DOUBLE_BARB_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "/||\\" as Ascii,
                smiley: ":/||\\:" as Smiley,
            },
            DOUBLE_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!!/" as Ascii,
                smiley: ":\\!!/:" as Smiley,
            },
            RIGHT_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "|||(" as Ascii,
                smiley: ":|||(:" as Smiley,
            },
            RIGHT_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!!(" as Ascii,
                smiley: ":!!!(:" as Smiley,
            },
            LEFT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "/|||" as Ascii,
                smiley: ":/|||:" as Smiley,
            },
            LEFT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!!!" as Ascii,
                smiley: ":\\!!!:" as Smiley,
            },
            RIGHT_ARC_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "|||)" as Ascii,
                smiley: ":|||):" as Smiley,
            },
            RIGHT_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!!)" as Ascii,
                smiley: ":!!!):" as Smiley,
            },
            DOUBLE_LEFT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "//|||" as Ascii,
                smiley: ":/ /|||:" as Smiley,
            },
            DOUBLE_LEFT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\\\!!!" as Ascii,
                smiley: ":\\ \\!!!:" as Smiley,
            },
            BARB_AND_ARC_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "/|||)" as Ascii,
                smiley: ":/|||):" as Smiley,
            },
            BARB_AND_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!!!)" as Ascii,
                smiley: ":\\!!!):" as Smiley,
            },
            DOUBLE_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "/|||\\" as Ascii,
                smiley: ":/|||\\:" as Smiley,
            },
            DOUBLE_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!!!/" as Ascii,
                smiley: ":\\!!!/:" as Smiley,
            },
            DOUBLE_ARC_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "(|||)" as Ascii,
                smiley: ":(|||):" as Smiley,
            },
            DOUBLE_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!!!)" as Ascii,
                smiley: ":(!!!):" as Smiley,
            },
            ARC_AND_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "(|||\\" as Ascii,
                smiley: ":(|||\\:" as Smiley,
            },
            ARC_AND_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!!!/" as Ascii,
                smiley: ":(!!!/:" as Smiley,
            },
            DOUBLE_SCROLL_EX: {
                unicode: "" as Unicode,
                ascii: ")X(" as Ascii,
                smiley: ":)X(:" as Smiley,
            },
            DOUBLE_SCROLL_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: ")Y(" as Ascii,
                smiley: ":)Y(:" as Smiley,
            },
            RIGHT_ARC_EX: {
                unicode: "" as Unicode,
                ascii: "X)" as Ascii,
                smiley: ":X):" as Smiley,
            },
            RIGHT_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "Y)" as Ascii,
                smiley: ":Y):" as Smiley,
            },
            RIGHT_BARB_EX: {
                unicode: "" as Unicode,
                ascii: "X\\" as Ascii,
                smiley: ":X\\:" as Smiley,
            },
            RIGHT_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "Y/" as Ascii,
                smiley: ":Y/:" as Smiley,
            },
            BARB_AND_ARC_EX: {
                unicode: "" as Unicode,
                ascii: "/X)" as Ascii,
                smiley: ":/X):" as Smiley,
            },
            BARB_AND_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\Y)" as Ascii,
                smiley: ":\\Y):" as Smiley,
            },
            DOUBLE_BARB_EX: {
                unicode: "" as Unicode,
                ascii: "/X\\" as Ascii,
                smiley: ":/X\\:" as Smiley,
            },
            DOUBLE_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\Y/" as Ascii,
                smiley: ":\\Y/:" as Smiley,
            },
            DOUBLE_SCROLL: {
                unicode: "" as Unicode,
                ascii: ")|(" as Ascii,
                smiley: ":)|(:" as Smiley,
            },
            DOUBLE_SCROLL_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!(" as Ascii,
                smiley: ":)!(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL: {
                unicode: "" as Unicode,
                ascii: "~|(" as Ascii,
                smiley: ":~|(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!(" as Ascii,
                smiley: ":~!(:" as Smiley,
            },
            RIGHT_BARB: {
                unicode: "" as Unicode,
                ascii: "|\\" as Ascii,
                smiley: ":|\\:" as Smiley,
            },
            RIGHT_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: "!/" as Ascii,
                smiley: ":!/:" as Smiley,
            },
            LEFT_ARC: {
                unicode: "" as Unicode,
                ascii: "(|" as Ascii,
                smiley: ":(|:" as Smiley,
            },
            LEFT_ARC_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!" as Ascii,
                smiley: ":(!:" as Smiley,
            },
            ARC_AND_SCROLL: {
                unicode: "" as Unicode,
                ascii: "(|(" as Ascii,
                smiley: ":(|(:" as Smiley,
            },
            ARC_AND_SCROLL_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!(" as Ascii,
                smiley: ":(!(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "~||(" as Ascii,
                smiley: ":~||(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!!(" as Ascii,
                smiley: ":~!!(:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                ascii: ")||~" as Ascii,
                smiley: ":)||~:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!!~" as Ascii,
                smiley: ":)!!~:" as Smiley,
            },
            LEFT_BARB_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "/||" as Ascii,
                smiley: ":/||:" as Smiley,
            },
            LEFT_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!!" as Ascii,
                smiley: ":\\!!:" as Smiley,
            },
            ARC_AND_SCROLL_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "(||(" as Ascii,
                smiley: ":(||(:" as Smiley,
            },
            ARC_AND_SCROLL_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!!(" as Ascii,
                smiley: ":(!!(:" as Smiley,
            },
            DOUBLE_LEFT_BARB_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "//||" as Ascii,
                smiley: ":/ /||:" as Smiley,
            },
            DOUBLE_LEFT_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\\\!!" as Ascii,
                smiley: ":\\ \\!!:" as Smiley,
            },
            DOUBLE_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")|||(" as Ascii,
                smiley: ":)|||(:" as Smiley,
            },
            DOUBLE_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!!!(" as Ascii,
                smiley: ":)!!!(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "~|||(" as Ascii,
                smiley: ":~|||(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!!!(" as Ascii,
                smiley: ":~!!!(:" as Smiley,
            },
            RIGHT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "|||\\" as Ascii,
                smiley: ":|||\\:" as Smiley,
            },
            RIGHT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!!/" as Ascii,
                smiley: ":!!!/:" as Smiley,
            },
            LEFT_ARC_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "(|||" as Ascii,
                smiley: ":(|||:" as Smiley,
            },
            LEFT_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!!!" as Ascii,
                smiley: ":(!!!:" as Smiley,
            },
            ARC_AND_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "(|||(" as Ascii,
                smiley: ":(|||(:" as Smiley,
            },
            ARC_AND_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!!!(" as Ascii,
                smiley: ":(!!!(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_EX: {
                unicode: "" as Unicode,
                ascii: "~X(" as Ascii,
                smiley: ":~X(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "~Y(" as Ascii,
                smiley: ":~Y(:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_EX: {
                unicode: "" as Unicode,
                ascii: ")X~" as Ascii,
                smiley: ":)X~:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: ")Y~" as Ascii,
                smiley: ":)Y~:" as Smiley,
            },
            LEFT_BARB_EX: {
                unicode: "" as Unicode,
                ascii: "/X" as Ascii,
                smiley: ":/X:" as Smiley,
            },
            LEFT_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\Y" as Ascii,
                smiley: ":\\Y:" as Smiley,
            },
            ARC_AND_SCROLL_EX: {
                unicode: "" as Unicode,
                ascii: "(X(" as Ascii,
                smiley: ":(X(:" as Smiley,
            },
            ARC_AND_SCROLL_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "(Y(" as Ascii,
                smiley: ":(Y(:" as Smiley,
            },
            DOUBLE_LEFT_BARB_EX: {
                unicode: "" as Unicode,
                ascii: "//X" as Ascii,
                smiley: ":/ /X:" as Smiley,
            },
            DOUBLE_LEFT_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\\\Y" as Ascii,
                smiley: ":\\ \\Y:" as Smiley,
            },
            RIGHT_BOATHOOK: {
                unicode: "" as Unicode,
                ascii: "|~" as Ascii,
                smiley: ":|~:" as Smiley,
            },
            RIGHT_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                ascii: "!~" as Ascii,
                smiley: ":!~:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB: {
                unicode: "" as Unicode,
                ascii: ")/|" as Ascii,
                smiley: ":)/|:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\!" as Ascii,
                smiley: ":)\\!:" as Smiley,
            },
            BARB_AND_BOATHOOK: {
                unicode: "" as Unicode,
                ascii: "/|~" as Ascii,
                smiley: ":/|~:" as Smiley,
            },
            BARB_AND_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!~" as Ascii,
                smiley: ":\\!~:" as Smiley,
            },
            RIGHT_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "||~" as Ascii,
                smiley: ":||~:" as Smiley,
            },
            RIGHT_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!~" as Ascii,
                smiley: ":!!~:" as Smiley,
            },
            SCROLL_AND_ARC_DOUBLE: {
                unicode: "" as Unicode,
                ascii: ")||)" as Ascii,
                smiley: ":)||):" as Smiley,
            },
            SCROLL_AND_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!!)" as Ascii,
                smiley: ":)!!):" as Smiley,
            },
            BARB_AND_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "/||~" as Ascii,
                smiley: ":/||~:" as Smiley,
            },
            BARB_AND_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!!~" as Ascii,
                smiley: ":\\!!~:" as Smiley,
            },
            RIGHT_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "|||~" as Ascii,
                smiley: ":|||~:" as Smiley,
            },
            RIGHT_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!!~" as Ascii,
                smiley: ":!!!~:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")/|||" as Ascii,
                smiley: ":)/|||:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\!!!" as Ascii,
                smiley: ":)\\!!!:" as Smiley,
            },
            BARB_AND_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "/|||~" as Ascii,
                smiley: ":/|||~:" as Smiley,
            },
            BARB_AND_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\!!!~" as Ascii,
                smiley: ":\\!!!~:" as Smiley,
            },
            RIGHT_BOATHOOK_EX: {
                unicode: "" as Unicode,
                ascii: "X~" as Ascii,
                smiley: ":X~:" as Smiley,
            },
            RIGHT_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "Y~" as Ascii,
                smiley: ":Y~:" as Smiley,
            },
            SCROLL_AND_ARC_EX: {
                unicode: "" as Unicode,
                ascii: ")X)" as Ascii,
                smiley: ":)X):" as Smiley,
            },
            SCROLL_AND_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: ")Y)" as Ascii,
                smiley: ":)Y):" as Smiley,
            },
            BARB_AND_BOATHOOK_EX: {
                unicode: "" as Unicode,
                ascii: "/X~" as Ascii,
                smiley: ":/X~:" as Smiley,
            },
            BARB_AND_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "\\Y~" as Ascii,
                smiley: ":\\Y~:" as Smiley,
            },
            LEFT_SCROLL: {
                unicode: "" as Unicode,
                ascii: ")|" as Ascii,
                smiley: ":)|:" as Smiley,
            },
            LEFT_SCROLL_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!" as Ascii,
                smiley: ":)!:" as Smiley,
            },
            LEFT_BOATHOOK: {
                unicode: "" as Unicode,
                ascii: "~|" as Ascii,
                smiley: ":~|:" as Smiley,
            },
            LEFT_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!" as Ascii,
                smiley: ":~!:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK: {
                unicode: "" as Unicode,
                ascii: ")~|" as Ascii,
                smiley: ":)~|:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                ascii: ")~!" as Ascii,
                smiley: ":)~!:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK: {
                unicode: "" as Unicode,
                ascii: "~~|" as Ascii,
                smiley: ":~~|:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                ascii: "~~!" as Ascii,
                smiley: ":~~!:" as Smiley,
            },
            SCROLL_AND_BOATHOOK: {
                unicode: "" as Unicode,
                ascii: ")|~" as Ascii,
                smiley: ":)|~:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!~" as Ascii,
                smiley: ":)!~:" as Smiley,
            },
            SCROLL_AND_ARC: {
                unicode: "" as Unicode,
                ascii: ")|)" as Ascii,
                smiley: ":)|):" as Smiley,
            },
            SCROLL_AND_ARC_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!)" as Ascii,
                smiley: ":)!):" as Smiley,
            },
            BOATHOOK_AND_ARC: {
                unicode: "" as Unicode,
                ascii: "~|)" as Ascii,
                smiley: ":~|):" as Smiley,
            },
            BOATHOOK_AND_ARC_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!)" as Ascii,
                smiley: ":~!):" as Smiley,
            },
            BOATHOOK_AND_BARB: {
                unicode: "" as Unicode,
                ascii: "~|\\" as Ascii,
                smiley: ":~|\\:" as Smiley,
            },
            BOATHOOK_AND_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!/" as Ascii,
                smiley: ":~!/:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB: {
                unicode: "" as Unicode,
                ascii: ")//|" as Ascii,
                smiley: ":)/ /|:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\\\!" as Ascii,
                smiley: ":)\\ \\!:" as Smiley,
            },
            ARC_AND_BOATHOOK: {
                unicode: "" as Unicode,
                ascii: "(|~" as Ascii,
                smiley: ":(|~:" as Smiley,
            },
            ARC_AND_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!~" as Ascii,
                smiley: ":(!~:" as Smiley,
            },
            LEFT_ARC_AND_BARB: {
                unicode: "" as Unicode,
                ascii: "(/|" as Ascii,
                smiley: ":(/|:" as Smiley,
            },
            LEFT_ARC_AND_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: "(\\!" as Ascii,
                smiley: ":(\\!:" as Smiley,
            },
            LEFT_SCROLL_AND_DOUBLE_BARB: {
                unicode: "" as Unicode,
                ascii: ")/|\\" as Ascii,
                smiley: ":)/|\\:" as Smiley,
            },
            LEFT_SCROLL_AND_DOUBLE_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\!/" as Ascii,
                smiley: ":)\\!/:" as Smiley,
            },
            RIGHT_BARB_AND_ARC: {
                unicode: "" as Unicode,
                ascii: "|\\)" as Ascii,
                smiley: ":|\\):" as Smiley,
            },
            RIGHT_BARB_AND_ARC_DOWN: {
                unicode: "" as Unicode,
                ascii: "!/)" as Ascii,
                smiley: ":!/):" as Smiley,
            },
            DOUBLE_RIGHT_BARB: {
                unicode: "" as Unicode,
                ascii: "|\\\\" as Ascii,
                smiley: ":|\\ \\:" as Smiley,
            },
            DOUBLE_RIGHT_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: "!//" as Ascii,
                smiley: ":!/ /:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_RIGHT_BARB: {
                unicode: "" as Unicode,
                ascii: ")|\\\\" as Ascii,
                smiley: ":)|\\ \\:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_RIGHT_BARB_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!//" as Ascii,
                smiley: ":)!/ /:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                ascii: ")~||" as Ascii,
                smiley: ":)~||:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")~!!" as Ascii,
                smiley: ":)~!!:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "~~||" as Ascii,
                smiley: ":~~||:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~~!!" as Ascii,
                smiley: ":~~!!:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_DOUBLE: {
                unicode: "" as Unicode,
                ascii: ")/||" as Ascii,
                smiley: ":)/||:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\!!" as Ascii,
                smiley: ":)\\!!:" as Smiley,
            },
            LEFT_ARC_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "(||" as Ascii,
                smiley: ":(||:" as Smiley,
            },
            LEFT_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!!" as Ascii,
                smiley: ":(!!:" as Smiley,
            },
            BOATHOOK_AND_ARC_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "~||)" as Ascii,
                smiley: ":~||):" as Smiley,
            },
            BOATHOOK_AND_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!!)" as Ascii,
                smiley: ":~!!):" as Smiley,
            },
            BOATHOOK_AND_BARB_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "~||\\" as Ascii,
                smiley: ":~||\\:" as Smiley,
            },
            BOATHOOK_AND_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!!/" as Ascii,
                smiley: ":~!!/:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE: {
                unicode: "" as Unicode,
                ascii: ")//||" as Ascii,
                smiley: ":)/ /||:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\\\!!" as Ascii,
                smiley: ":)\\ \\!!:" as Smiley,
            },
            ARC_AND_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                ascii: "(||~" as Ascii,
                smiley: ":(||~:" as Smiley,
            },
            ARC_AND_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!!~" as Ascii,
                smiley: ":(!!~:" as Smiley,
            },
            LEFT_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")|||" as Ascii,
                smiley: ":)|||:" as Smiley,
            },
            LEFT_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!!!" as Ascii,
                smiley: ":)!!!:" as Smiley,
            },
            LEFT_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "~|||" as Ascii,
                smiley: ":~|||:" as Smiley,
            },
            LEFT_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!!!" as Ascii,
                smiley: ":~!!!:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")~|||" as Ascii,
                smiley: ":)~|||:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")~!!!" as Ascii,
                smiley: ":)~!!!:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "~~|||" as Ascii,
                smiley: ":~~|||:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~~!!!" as Ascii,
                smiley: ":~~!!!:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")|||~" as Ascii,
                smiley: ":)|||~:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!!!~" as Ascii,
                smiley: ":)!!!~:" as Smiley,
            },
            SCROLL_AND_ARC_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")|||)" as Ascii,
                smiley: ":)|||):" as Smiley,
            },
            SCROLL_AND_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!!!)" as Ascii,
                smiley: ":)!!!):" as Smiley,
            },
            BOATHOOK_AND_ARC_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "~|||)" as Ascii,
                smiley: ":~|||):" as Smiley,
            },
            BOATHOOK_AND_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!!!)" as Ascii,
                smiley: ":~!!!):" as Smiley,
            },
            BOATHOOK_AND_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "~|||\\" as Ascii,
                smiley: ":~|||\\:" as Smiley,
            },
            BOATHOOK_AND_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "~!!!/" as Ascii,
                smiley: ":~!!!/:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")//|||" as Ascii,
                smiley: ":)/ /|||:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\\\!!!" as Ascii,
                smiley: ":)\\ \\!!!:" as Smiley,
            },
            ARC_AND_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "(|||~" as Ascii,
                smiley: ":(|||~:" as Smiley,
            },
            ARC_AND_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(!!!~" as Ascii,
                smiley: ":(!!!~:" as Smiley,
            },
            LEFT_ARC_AND_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "(/|||" as Ascii,
                smiley: ":(/|||:" as Smiley,
            },
            LEFT_ARC_AND_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "(\\!!!" as Ascii,
                smiley: ":(\\!!!:" as Smiley,
            },
            LEFT_SCROLL_AND_DOUBLE_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")/|||\\" as Ascii,
                smiley: ":)/|||\\:" as Smiley,
            },
            LEFT_SCROLL_AND_DOUBLE_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\!!!/" as Ascii,
                smiley: ":)\\!!!/:" as Smiley,
            },
            RIGHT_BARB_AND_ARC_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "|||\\)" as Ascii,
                smiley: ":|||\\):" as Smiley,
            },
            RIGHT_BARB_AND_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!!/)" as Ascii,
                smiley: ":!!!/):" as Smiley,
            },
            DOUBLE_RIGHT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: "|||\\\\" as Ascii,
                smiley: ":|||\\ \\:" as Smiley,
            },
            DOUBLE_RIGHT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: "!!!//" as Ascii,
                smiley: ":!!!/ /:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                ascii: ")|||\\\\" as Ascii,
                smiley: ":)|||\\ \\:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                ascii: ")!!!//" as Ascii,
                smiley: ":)!!!/ /:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_EX: {
                unicode: "" as Unicode,
                ascii: ")~X" as Ascii,
                smiley: ":)~X:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: ")~Y" as Ascii,
                smiley: ":)~Y:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_EX: {
                unicode: "" as Unicode,
                ascii: "~~X" as Ascii,
                smiley: ":~~X:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "~~Y" as Ascii,
                smiley: ":~~Y:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_EX: {
                unicode: "" as Unicode,
                ascii: ")/X" as Ascii,
                smiley: ":)/X:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\Y" as Ascii,
                smiley: ":)\\Y:" as Smiley,
            },
            LEFT_ARC_EX: {
                unicode: "" as Unicode,
                ascii: "(X" as Ascii,
                smiley: ":(X:" as Smiley,
            },
            LEFT_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "(Y" as Ascii,
                smiley: ":(Y:" as Smiley,
            },
            BOATHOOK_AND_ARC_EX: {
                unicode: "" as Unicode,
                ascii: "~X)" as Ascii,
                smiley: ":~X):" as Smiley,
            },
            BOATHOOK_AND_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "~Y)" as Ascii,
                smiley: ":~Y):" as Smiley,
            },
            BOATHOOK_AND_BARB_EX: {
                unicode: "" as Unicode,
                ascii: "~X\\" as Ascii,
                smiley: ":~X\\:" as Smiley,
            },
            BOATHOOK_AND_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "~Y/" as Ascii,
                smiley: ":~Y/:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_EX: {
                unicode: "" as Unicode,
                ascii: ")//X" as Ascii,
                smiley: ":)/ /X:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: ")\\\\Y" as Ascii,
                smiley: ":)\\ \\Y:" as Smiley,
            },
            ARC_AND_BOATHOOK_EX: {
                unicode: "" as Unicode,
                ascii: "(X~" as Ascii,
                smiley: ":(X~:" as Smiley,
            },
            ARC_AND_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                ascii: "(Y~" as Ascii,
                smiley: ":(Y~:" as Smiley,
            },
            BARE_SHAFT: {
                unicode: "" as Unicode,
                ascii: "|" as Ascii,
                smiley: ":|:" as Smiley,
            },
            BARE_SHAFT_DOWN: {
                unicode: "" as Unicode,
                ascii: "!" as Ascii,
                smiley: ":!:" as Smiley,
            },
        }
        expect(coreGlyphExpectations).toEqual(expected)
    })

    it("has the correct accent glyphs and computes their IO correctly", (): void => {
        const accentIds = Object.values(AccentId) as AccentId[]
        const accentGlyphExpectations = accentIds.reduce(
            (
                accentGlyphExpectations: Record<AccentId, GlyphExpectation>,
                accentId: AccentId
            ): Record<AccentId, GlyphExpectation> => {
                return {
                    ...accentGlyphExpectations,
                    [accentId]: computeAccentGlyphExpectation(accentId)
                }
            },
            {} as Record<AccentId, GlyphExpectation>,
        )

        const expected: Record<AccentId, GlyphExpectation> = {
            [AccentId.TICK]: {
                unicode: "" as Unicode,
                ascii: "'" as Ascii,
                smiley: ":':" as Smiley,
            },
            [AccentId.WING]: {
                unicode: "" as Unicode,
                ascii: "`" as Ascii,
                smiley: ":`:" as Smiley,
            },
            [AccentId.BIRD]: {
                unicode: "" as Unicode,
                ascii: "``" as Ascii,
                smiley: ":``:" as Smiley,
            },
            [AccentId.HORN]: {
                unicode: "" as Unicode,
                ascii: "@1" as Ascii,
                smiley: ":@1:" as Smiley,
            },
            [AccentId.WEDGE]: {
                unicode: "" as Unicode,
                ascii: "@2" as Ascii,
                smiley: ":@2:" as Smiley,
            },
            [AccentId.HORNWING]: {
                unicode: "" as Unicode,
                ascii: "@4" as Ascii,
                smiley: ":@4:" as Smiley,
            },
            [AccentId.WEDGEWING]: {
                unicode: "" as Unicode,
                ascii: "@5" as Ascii,
                smiley: ":@5:" as Smiley,
            },
            [AccentId.HORNBIRD]: {
                unicode: "" as Unicode,
                ascii: "@7" as Ascii,
                smiley: ":@7:" as Smiley,
            },
            [AccentId.WEDGEBIRD]: {
                unicode: "" as Unicode,
                ascii: "@8" as Ascii,
                smiley: ":@8:" as Smiley,
            },
            [AccentId.WINGBIRD]: {
                unicode: "" as Unicode,
                ascii: "@9" as Ascii,
                smiley: ":@9:" as Smiley,
            },
            [AccentId.DOT]: {
                unicode: "" as Unicode,
                ascii: "@." as Ascii,
                smiley: ":@.:" as Smiley,
            },
        }
        expect(accentGlyphExpectations).toEqual(expected)
    })

    it("has the correct accent glyphs and computes their IO correctly (when oriented against, or anti-, their core)              ", (): void => {
        const accentIds = Object.values(AccentId) as AccentId[]
        const accentGlyphExpectations = accentIds.reduce(
            (
                accentGlyphExpectations: Record<AccentId, GlyphExpectation>,
                accentId: AccentId
            ): Record<AccentId, GlyphExpectation> => {
                return {
                    ...accentGlyphExpectations,
                    [accentId]: computeAccentGlyphExpectation(accentId, { anti: true })
                }
            },
            {} as Record<AccentId, GlyphExpectation>,
        )

        const expected: Record<AccentId, GlyphExpectation> = {
            [AccentId.TICK]: {
                unicode: "" as Unicode,
                ascii: "." as Ascii,
                smiley: ":.:" as Smiley,
            },
            [AccentId.WING]: {
                unicode: "" as Unicode,
                ascii: "," as Ascii,
                smiley: ":,:" as Smiley,
            },
            [AccentId.BIRD]: {
                unicode: "" as Unicode,
                ascii: ",," as Ascii,
                smiley: ":,,:" as Smiley,
            },
            [AccentId.HORN]: {
                unicode: "" as Unicode,
                ascii: "l1" as Ascii,
                smiley: ":l1:" as Smiley,
            },
            [AccentId.WEDGE]: {
                unicode: "" as Unicode,
                ascii: "l2" as Ascii,
                smiley: ":l2:" as Smiley,
            },
            [AccentId.HORNWING]: {
                unicode: "" as Unicode,
                ascii: "l4" as Ascii,
                smiley: ":l4:" as Smiley,
            },
            [AccentId.WEDGEWING]: {
                unicode: "" as Unicode,
                ascii: "l5" as Ascii,
                smiley: ":l5:" as Smiley,
            },
            [AccentId.HORNBIRD]: {
                unicode: "" as Unicode,
                ascii: "l7" as Ascii,
                smiley: ":l7:" as Smiley,
            },
            [AccentId.WEDGEBIRD]: {
                unicode: "" as Unicode,
                ascii: "l8" as Ascii,
                smiley: ":l8:" as Smiley,
            },
            [AccentId.WINGBIRD]: {
                unicode: "" as Unicode,
                ascii: "l9" as Ascii,
                smiley: ":l9:" as Smiley,
            },
            [AccentId.DOT]: {
                unicode: "" as Unicode,
                ascii: "l." as Ascii,
                smiley: ":l.:" as Smiley,
            },
        }
        expect(accentGlyphExpectations).toEqual(expected)
    })

    it("has the correct Sagittal-compatible glyphs and computes their IO correctly", (): void => {
        const compatibles = Object.values(Compatible) as Compatible[]
        const compatibleGlyphExpectations = compatibles.reduce(
            (
                compatibleGlyphExpectations: Record<Compatible, GlyphExpectation>,
                compatible: Compatible
            ): Record<Compatible, GlyphExpectation> => {
                return {
                    ...compatibleGlyphExpectations,
                    [compatible]: computeCompatibleGlyphExpectation(compatible)
                }
            },
            {} as Record<Compatible, GlyphExpectation>,
        )

        const expected: Record<Compatible, GlyphExpectation> = {
            [Compatible.STEIN_SEMISHARP]: {
                unicode: "" as Unicode,
                ascii: ">" as Ascii,
                smiley: ":>:" as Smiley,
            },
            [Compatible.STEIN_SEMIFLAT]: {
                unicode: "" as Unicode,
                ascii: "<" as Ascii,
                smiley: ":<:" as Smiley,
            },
            [Compatible.STEIN_SESQUISHARP]: {
                unicode: "" as Unicode,
                ascii: ">#" as Ascii,
                smiley: ":>#:" as Smiley,
            },
            [Compatible.ZIMMERMANN_SESQUIFLAT]: {
                unicode: "" as Unicode,
                ascii: "<b" as Ascii,
                smiley: ":<b:" as Smiley,
            },
            [Compatible.WILSON_PLUS]: {
                unicode: "" as Unicode,
                ascii: "+" as Ascii,
                smiley: ":+:" as Smiley,
            },
            [Compatible.WILSON_MINUS]: {
                unicode: "" as Unicode,
                ascii: "-" as Ascii,
                smiley: ":-:" as Smiley,
            },
            [Compatible.NATURAL]: {
                unicode: "" as Unicode,
                ascii: "|//|" as Ascii,
                smiley: ":h:" as Smiley,
            },
            [Compatible.SHARP]: {
                unicode: "" as Unicode,
                ascii: "#" as Ascii,
                smiley: ":#:" as Smiley,
            },
            [Compatible.FLAT]: {
                unicode: "" as Unicode,
                ascii: "b" as Ascii,
                smiley: ":b:" as Smiley,
            },
            [Compatible.DOUBLE_SHARP]: {
                unicode: "" as Unicode,
                ascii: "x" as Ascii,
                smiley: ":x:" as Smiley,
            },
            [Compatible.DOUBLE_FLAT]: {
                unicode: "" as Unicode,
                ascii: "bb" as Ascii,
                smiley: ":bb:" as Smiley,
            },
        }
        expect(compatibleGlyphExpectations).toEqual(expected)
    })
})
