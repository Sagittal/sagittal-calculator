import {isUndefined} from "../../../../../../src/general/code"
import {Aim, Ascii, Compatible, Smiley, Unicode} from "../../../../../../src/sagittal/accidental"
import {Accent, HeadName, Orientation} from "../../../../../../src/sagittal/accidental/flacco"
import {Shafts} from "../../../../../../src/sagittal/accidental/symbol"
import {
    computeAccentGlyphExpectation,
    computeCompatibleGlyphExpectation,
    computeCoreGlyphExpectation,
} from "../../../../../helpers/src/sagittal/accidental/glyphExpectation"
import {GlyphExpectation} from "../../../../../helpers/src/sagittal/accidental/types"

describe("glyphs", (): void => {
    it("has the correct core glyphs and computes their IO correctly", (): void => {
        const coreGlyphExpectations = [] as GlyphExpectation[]

        Object.values(HeadName).forEach((headName: HeadName): void => {
            Object.values(Shafts).forEach((shafts: Shafts): void => {
                Object.values(Aim).forEach((aim: Aim): void => {
                    const coreGlyphExpectation = computeCoreGlyphExpectation(headName, shafts, aim)

                    if (!isUndefined(coreGlyphExpectation)) coreGlyphExpectations.push(coreGlyphExpectation)
                })
            })
        })

        const expected: Array<GlyphExpectation> = [
            {
                name: "RIGHT_SCROLL_UP",
                unicode: "" as Unicode,
                ascii: "|(" as Ascii,
                smiley: ":|(:" as Smiley,
            },
            {
                name: "RIGHT_SCROLL_DOWN",
                unicode: "" as Unicode,
                ascii: "!(" as Ascii,
                smiley: ":!(:" as Smiley,
            },
            {
                name: "LEFT_BARB_UP",
                unicode: "" as Unicode,
                ascii: "/|" as Ascii,
                smiley: ":/|:" as Smiley,
            },
            {
                name: "LEFT_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!" as Ascii,
                smiley: ":\\!:" as Smiley,
            },
            {
                name: "RIGHT_ARC_UP",
                unicode: "" as Unicode,
                ascii: "|)" as Ascii,
                smiley: ":|):" as Smiley,
            },
            {
                name: "RIGHT_ARC_DOWN",
                unicode: "" as Unicode,
                ascii: "!)" as Ascii,
                smiley: ":!):" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BARB_UP",
                unicode: "" as Unicode,
                ascii: "//|" as Ascii,
                smiley: ":/ /|:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: "\\\\!" as Ascii,
                smiley: ":\\ \\!:" as Smiley,
            },
            {
                name: "BARB_AND_ARC_UP",
                unicode: "" as Unicode,
                ascii: "/|)" as Ascii,
                smiley: ":/|):" as Smiley,
            },
            {
                name: "BARB_AND_ARC_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!)" as Ascii,
                smiley: ":\\!):" as Smiley,
            },
            {
                name: "DOUBLE_BARB_UP",
                unicode: "" as Unicode,
                ascii: "/|\\" as Ascii,
                smiley: ":/|\\:" as Smiley,
            },
            {
                name: "DOUBLE_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!/" as Ascii,
                smiley: ":\\!/:" as Smiley,
            },
            {
                name: "DOUBLE_ARC_UP",
                unicode: "" as Unicode,
                ascii: "(|)" as Ascii,
                smiley: ":(|):" as Smiley,
            },
            {
                name: "DOUBLE_ARC_DOWN",
                unicode: "" as Unicode,
                ascii: "(!)" as Ascii,
                smiley: ":(!):" as Smiley,
            },
            {
                name: "ARC_AND_BARB_UP",
                unicode: "" as Unicode,
                ascii: "(|\\" as Ascii,
                smiley: ":(|\\:" as Smiley,
            },
            {
                name: "ARC_AND_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: "(!/" as Ascii,
                smiley: ":(!/:" as Smiley,
            },
            {
                name: "DOUBLE_SCROLL_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: ")||(" as Ascii,
                smiley: ":)||(:" as Smiley,
            },
            {
                name: "DOUBLE_SCROLL_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")!!(" as Ascii,
                smiley: ":)!!(:" as Smiley,
            },
            {
                name: "RIGHT_ARC_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "||)" as Ascii,
                smiley: ":||):" as Smiley,
            },
            {
                name: "RIGHT_ARC_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!)" as Ascii,
                smiley: ":!!):" as Smiley,
            },
            {
                name: "RIGHT_BARB_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "||\\" as Ascii,
                smiley: ":||\\:" as Smiley,
            },
            {
                name: "RIGHT_BARB_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!/" as Ascii,
                smiley: ":!!/:" as Smiley,
            },
            {
                name: "BARB_AND_ARC_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "/||)" as Ascii,
                smiley: ":/||):" as Smiley,
            },
            {
                name: "BARB_AND_ARC_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!!)" as Ascii,
                smiley: ":\\!!):" as Smiley,
            },
            {
                name: "DOUBLE_BARB_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "/||\\" as Ascii,
                smiley: ":/||\\:" as Smiley,
            },
            {
                name: "DOUBLE_BARB_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!!/" as Ascii,
                smiley: ":\\!!/:" as Smiley,
            },
            {
                name: "RIGHT_SCROLL_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "|||(" as Ascii,
                smiley: ":|||(:" as Smiley,
            },
            {
                name: "RIGHT_SCROLL_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!!(" as Ascii,
                smiley: ":!!!(:" as Smiley,
            },
            {
                name: "LEFT_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "/|||" as Ascii,
                smiley: ":/|||:" as Smiley,
            },
            {
                name: "LEFT_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!!!" as Ascii,
                smiley: ":\\!!!:" as Smiley,
            },
            {
                name: "RIGHT_ARC_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "|||)" as Ascii,
                smiley: ":|||):" as Smiley,
            },
            {
                name: "RIGHT_ARC_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!!)" as Ascii,
                smiley: ":!!!):" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "//|||" as Ascii,
                smiley: ":/ /|||:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\\\!!!" as Ascii,
                smiley: ":\\ \\!!!:" as Smiley,
            },
            {
                name: "BARB_AND_ARC_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "/|||)" as Ascii,
                smiley: ":/|||):" as Smiley,
            },
            {
                name: "BARB_AND_ARC_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!!!)" as Ascii,
                smiley: ":\\!!!):" as Smiley,
            },
            {
                name: "DOUBLE_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "/|||\\" as Ascii,
                smiley: ":/|||\\:" as Smiley,
            },
            {
                name: "DOUBLE_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!!!/" as Ascii,
                smiley: ":\\!!!/:" as Smiley,
            },
            {
                name: "DOUBLE_ARC_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "(|||)" as Ascii,
                smiley: ":(|||):" as Smiley,
            },
            {
                name: "DOUBLE_ARC_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(!!!)" as Ascii,
                smiley: ":(!!!):" as Smiley,
            },
            {
                name: "ARC_AND_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "(|||\\" as Ascii,
                smiley: ":(|||\\:" as Smiley,
            },
            {
                name: "ARC_AND_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(!!!/" as Ascii,
                smiley: ":(!!!/:" as Smiley,
            },
            {
                name: "DOUBLE_SCROLL_EX_UP",
                unicode: "" as Unicode,
                ascii: ")X(" as Ascii,
                smiley: ":)X(:" as Smiley,
            },
            {
                name: "DOUBLE_SCROLL_EX_DOWN",
                unicode: "" as Unicode,
                ascii: ")Y(" as Ascii,
                smiley: ":)Y(:" as Smiley,
            },
            {
                name: "RIGHT_ARC_EX_UP",
                unicode: "" as Unicode,
                ascii: "X)" as Ascii,
                smiley: ":X):" as Smiley,
            },
            {
                name: "RIGHT_ARC_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "Y)" as Ascii,
                smiley: ":Y):" as Smiley,
            },
            {
                name: "RIGHT_BARB_EX_UP",
                unicode: "" as Unicode,
                ascii: "X\\" as Ascii,
                smiley: ":X\\:" as Smiley,
            },
            {
                name: "RIGHT_BARB_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "Y/" as Ascii,
                smiley: ":Y/:" as Smiley,
            },
            {
                name: "BARB_AND_ARC_EX_UP",
                unicode: "" as Unicode,
                ascii: "/X)" as Ascii,
                smiley: ":/X):" as Smiley,
            },
            {
                name: "BARB_AND_ARC_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "\\Y)" as Ascii,
                smiley: ":\\Y):" as Smiley,
            },
            {
                name: "DOUBLE_BARB_EX_UP",
                unicode: "" as Unicode,
                ascii: "/X\\" as Ascii,
                smiley: ":/X\\:" as Smiley,
            },
            {
                name: "DOUBLE_BARB_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "\\Y/" as Ascii,
                smiley: ":\\Y/:" as Smiley,
            },
            {
                name: "DOUBLE_SCROLL_UP",
                unicode: "" as Unicode,
                ascii: ")|(" as Ascii,
                smiley: ":)|(:" as Smiley,
            },
            {
                name: "DOUBLE_SCROLL_DOWN",
                unicode: "" as Unicode,
                ascii: ")!(" as Ascii,
                smiley: ":)!(:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_SCROLL_UP",
                unicode: "" as Unicode,
                ascii: "~|(" as Ascii,
                smiley: ":~|(:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_SCROLL_DOWN",
                unicode: "" as Unicode,
                ascii: "~!(" as Ascii,
                smiley: ":~!(:" as Smiley,
            },
            {
                name: "RIGHT_BARB_UP",
                unicode: "" as Unicode,
                ascii: "|\\" as Ascii,
                smiley: ":|\\:" as Smiley,
            },
            {
                name: "RIGHT_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: "!/" as Ascii,
                smiley: ":!/:" as Smiley,
            },
            {
                name: "LEFT_ARC_UP",
                unicode: "" as Unicode,
                ascii: "(|" as Ascii,
                smiley: ":(|:" as Smiley,
            },
            {
                name: "LEFT_ARC_DOWN",
                unicode: "" as Unicode,
                ascii: "(!" as Ascii,
                smiley: ":(!:" as Smiley,
            },
            {
                name: "ARC_AND_SCROLL_UP",
                unicode: "" as Unicode,
                ascii: "(|(" as Ascii,
                smiley: ":(|(:" as Smiley,
            },
            {
                name: "ARC_AND_SCROLL_DOWN",
                unicode: "" as Unicode,
                ascii: "(!(" as Ascii,
                smiley: ":(!(:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_SCROLL_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "~||(" as Ascii,
                smiley: ":~||(:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_SCROLL_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~!!(" as Ascii,
                smiley: ":~!!(:" as Smiley,
            },
            {
                name: "SCROLL_AND_BOATHOOK_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: ")||~" as Ascii,
                smiley: ":)||~:" as Smiley,
            },
            {
                name: "SCROLL_AND_BOATHOOK_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")!!~" as Ascii,
                smiley: ":)!!~:" as Smiley,
            },
            {
                name: "LEFT_BARB_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "/||" as Ascii,
                smiley: ":/||:" as Smiley,
            },
            {
                name: "LEFT_BARB_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!!" as Ascii,
                smiley: ":\\!!:" as Smiley,
            },
            {
                name: "ARC_AND_SCROLL_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "(||(" as Ascii,
                smiley: ":(||(:" as Smiley,
            },
            {
                name: "ARC_AND_SCROLL_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(!!(" as Ascii,
                smiley: ":(!!(:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BARB_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "//||" as Ascii,
                smiley: ":/ /||:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BARB_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\\\!!" as Ascii,
                smiley: ":\\ \\!!:" as Smiley,
            },
            {
                name: "DOUBLE_SCROLL_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")|||(" as Ascii,
                smiley: ":)|||(:" as Smiley,
            },
            {
                name: "DOUBLE_SCROLL_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")!!!(" as Ascii,
                smiley: ":)!!!(:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_SCROLL_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "~|||(" as Ascii,
                smiley: ":~|||(:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_SCROLL_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~!!!(" as Ascii,
                smiley: ":~!!!(:" as Smiley,
            },
            {
                name: "RIGHT_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "|||\\" as Ascii,
                smiley: ":|||\\:" as Smiley,
            },
            {
                name: "RIGHT_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!!/" as Ascii,
                smiley: ":!!!/:" as Smiley,
            },
            {
                name: "LEFT_ARC_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "(|||" as Ascii,
                smiley: ":(|||:" as Smiley,
            },
            {
                name: "LEFT_ARC_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(!!!" as Ascii,
                smiley: ":(!!!:" as Smiley,
            },
            {
                name: "ARC_AND_SCROLL_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "(|||(" as Ascii,
                smiley: ":(|||(:" as Smiley,
            },
            {
                name: "ARC_AND_SCROLL_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(!!!(" as Ascii,
                smiley: ":(!!!(:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_SCROLL_EX_UP",
                unicode: "" as Unicode,
                ascii: "~X(" as Ascii,
                smiley: ":~X(:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_SCROLL_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "~Y(" as Ascii,
                smiley: ":~Y(:" as Smiley,
            },
            {
                name: "SCROLL_AND_BOATHOOK_EX_UP",
                unicode: "" as Unicode,
                ascii: ")X~" as Ascii,
                smiley: ":)X~:" as Smiley,
            },
            {
                name: "SCROLL_AND_BOATHOOK_EX_DOWN",
                unicode: "" as Unicode,
                ascii: ")Y~" as Ascii,
                smiley: ":)Y~:" as Smiley,
            },
            {
                name: "LEFT_BARB_EX_UP",
                unicode: "" as Unicode,
                ascii: "/X" as Ascii,
                smiley: ":/X:" as Smiley,
            },
            {
                name: "LEFT_BARB_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "\\Y" as Ascii,
                smiley: ":\\Y:" as Smiley,
            },
            {
                name: "ARC_AND_SCROLL_EX_UP",
                unicode: "" as Unicode,
                ascii: "(X(" as Ascii,
                smiley: ":(X(:" as Smiley,
            },
            {
                name: "ARC_AND_SCROLL_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "(Y(" as Ascii,
                smiley: ":(Y(:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BARB_EX_UP",
                unicode: "" as Unicode,
                ascii: "//X" as Ascii,
                smiley: ":/ /X:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BARB_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "\\\\Y" as Ascii,
                smiley: ":\\ \\Y:" as Smiley,
            },
            {
                name: "RIGHT_BOATHOOK_UP",
                unicode: "" as Unicode,
                ascii: "|~" as Ascii,
                smiley: ":|~:" as Smiley,
            },
            {
                name: "RIGHT_BOATHOOK_DOWN",
                unicode: "" as Unicode,
                ascii: "!~" as Ascii,
                smiley: ":!~:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BARB_UP",
                unicode: "" as Unicode,
                ascii: ")/|" as Ascii,
                smiley: ":)/|:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\!" as Ascii,
                smiley: ":)\\!:" as Smiley,
            },
            {
                name: "BARB_AND_BOATHOOK_UP",
                unicode: "" as Unicode,
                ascii: "/|~" as Ascii,
                smiley: ":/|~:" as Smiley,
            },
            {
                name: "BARB_AND_BOATHOOK_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!~" as Ascii,
                smiley: ":\\!~:" as Smiley,
            },
            {
                name: "RIGHT_BOATHOOK_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "||~" as Ascii,
                smiley: ":||~:" as Smiley,
            },
            {
                name: "RIGHT_BOATHOOK_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!~" as Ascii,
                smiley: ":!!~:" as Smiley,
            },
            {
                name: "SCROLL_AND_ARC_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: ")||)" as Ascii,
                smiley: ":)||):" as Smiley,
            },
            {
                name: "SCROLL_AND_ARC_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")!!)" as Ascii,
                smiley: ":)!!):" as Smiley,
            },
            {
                name: "BARB_AND_BOATHOOK_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "/||~" as Ascii,
                smiley: ":/||~:" as Smiley,
            },
            {
                name: "BARB_AND_BOATHOOK_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!!~" as Ascii,
                smiley: ":\\!!~:" as Smiley,
            },
            {
                name: "RIGHT_BOATHOOK_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "|||~" as Ascii,
                smiley: ":|||~:" as Smiley,
            },
            {
                name: "RIGHT_BOATHOOK_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!!~" as Ascii,
                smiley: ":!!!~:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")/|||" as Ascii,
                smiley: ":)/|||:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\!!!" as Ascii,
                smiley: ":)\\!!!:" as Smiley,
            },
            {
                name: "BARB_AND_BOATHOOK_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "/|||~" as Ascii,
                smiley: ":/|||~:" as Smiley,
            },
            {
                name: "BARB_AND_BOATHOOK_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "\\!!!~" as Ascii,
                smiley: ":\\!!!~:" as Smiley,
            },
            {
                name: "RIGHT_BOATHOOK_EX_UP",
                unicode: "" as Unicode,
                ascii: "X~" as Ascii,
                smiley: ":X~:" as Smiley,
            },
            {
                name: "RIGHT_BOATHOOK_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "Y~" as Ascii,
                smiley: ":Y~:" as Smiley,
            },
            {
                name: "SCROLL_AND_ARC_EX_UP",
                unicode: "" as Unicode,
                ascii: ")X)" as Ascii,
                smiley: ":)X):" as Smiley,
            },
            {
                name: "SCROLL_AND_ARC_EX_DOWN",
                unicode: "" as Unicode,
                ascii: ")Y)" as Ascii,
                smiley: ":)Y):" as Smiley,
            },
            {
                name: "BARB_AND_BOATHOOK_EX_UP",
                unicode: "" as Unicode,
                ascii: "/X~" as Ascii,
                smiley: ":/X~:" as Smiley,
            },
            {
                name: "BARB_AND_BOATHOOK_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "\\Y~" as Ascii,
                smiley: ":\\Y~:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_UP",
                unicode: "" as Unicode,
                ascii: ")|" as Ascii,
                smiley: ":)|:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOWN",
                unicode: "" as Unicode,
                ascii: ")!" as Ascii,
                smiley: ":)!:" as Smiley,
            },
            {
                name: "LEFT_BOATHOOK_UP",
                unicode: "" as Unicode,
                ascii: "~|" as Ascii,
                smiley: ":~|:" as Smiley,
            },
            {
                name: "LEFT_BOATHOOK_DOWN",
                unicode: "" as Unicode,
                ascii: "~!" as Ascii,
                smiley: ":~!:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BOATHOOK_UP",
                unicode: "" as Unicode,
                ascii: ")~|" as Ascii,
                smiley: ":)~|:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BOATHOOK_DOWN",
                unicode: "" as Unicode,
                ascii: ")~!" as Ascii,
                smiley: ":)~!:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BOATHOOK_UP",
                unicode: "" as Unicode,
                ascii: "~~|" as Ascii,
                smiley: ":~~|:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BOATHOOK_DOWN",
                unicode: "" as Unicode,
                ascii: "~~!" as Ascii,
                smiley: ":~~!:" as Smiley,
            },
            {
                name: "SCROLL_AND_BOATHOOK_UP",
                unicode: "" as Unicode,
                ascii: ")|~" as Ascii,
                smiley: ":)|~:" as Smiley,
            },
            {
                name: "SCROLL_AND_BOATHOOK_DOWN",
                unicode: "" as Unicode,
                ascii: ")!~" as Ascii,
                smiley: ":)!~:" as Smiley,
            },
            {
                name: "SCROLL_AND_ARC_UP",
                unicode: "" as Unicode,
                ascii: ")|)" as Ascii,
                smiley: ":)|):" as Smiley,
            },
            {
                name: "SCROLL_AND_ARC_DOWN",
                unicode: "" as Unicode,
                ascii: ")!)" as Ascii,
                smiley: ":)!):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_ARC_UP",
                unicode: "" as Unicode,
                ascii: "~|)" as Ascii,
                smiley: ":~|):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_ARC_DOWN",
                unicode: "" as Unicode,
                ascii: "~!)" as Ascii,
                smiley: ":~!):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_BARB_UP",
                unicode: "" as Unicode,
                ascii: "~|\\" as Ascii,
                smiley: ":~|\\:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: "~!/" as Ascii,
                smiley: ":~!/:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_LEFT_BARB_UP",
                unicode: "" as Unicode,
                ascii: ")//|" as Ascii,
                smiley: ":)/ /|:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_LEFT_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\\\!" as Ascii,
                smiley: ":)\\ \\!:" as Smiley,
            },
            {
                name: "ARC_AND_BOATHOOK_UP",
                unicode: "" as Unicode,
                ascii: "(|~" as Ascii,
                smiley: ":(|~:" as Smiley,
            },
            {
                name: "ARC_AND_BOATHOOK_DOWN",
                unicode: "" as Unicode,
                ascii: "(!~" as Ascii,
                smiley: ":(!~:" as Smiley,
            },
            {
                name: "LEFT_ARC_AND_BARB_UP",
                unicode: "" as Unicode,
                ascii: "(/|" as Ascii,
                smiley: ":(/|:" as Smiley,
            },
            {
                name: "LEFT_ARC_AND_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: "(\\!" as Ascii,
                smiley: ":(\\!:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_DOUBLE_BARB_UP",
                unicode: "" as Unicode,
                ascii: ")/|\\" as Ascii,
                smiley: ":)/|\\:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_DOUBLE_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\!/" as Ascii,
                smiley: ":)\\!/:" as Smiley,
            },
            {
                name: "RIGHT_BARB_AND_ARC_UP",
                unicode: "" as Unicode,
                ascii: "|\\)" as Ascii,
                smiley: ":|\\):" as Smiley,
            },
            {
                name: "RIGHT_BARB_AND_ARC_DOWN",
                unicode: "" as Unicode,
                ascii: "!/)" as Ascii,
                smiley: ":!/):" as Smiley,
            },
            {
                name: "DOUBLE_RIGHT_BARB_UP",
                unicode: "" as Unicode,
                ascii: "|\\\\" as Ascii,
                smiley: ":|\\ \\:" as Smiley,
            },
            {
                name: "DOUBLE_RIGHT_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: "!//" as Ascii,
                smiley: ":!/ /:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_RIGHT_BARB_UP",
                unicode: "" as Unicode,
                ascii: ")|\\\\" as Ascii,
                smiley: ":)|\\ \\:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_RIGHT_BARB_DOWN",
                unicode: "" as Unicode,
                ascii: ")!//" as Ascii,
                smiley: ":)!/ /:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: ")~||" as Ascii,
                smiley: ":)~||:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BOATHOOK_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")~!!" as Ascii,
                smiley: ":)~!!:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BOATHOOK_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "~~||" as Ascii,
                smiley: ":~~||:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BOATHOOK_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~~!!" as Ascii,
                smiley: ":~~!!:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BARB_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: ")/||" as Ascii,
                smiley: ":)/||:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BARB_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\!!" as Ascii,
                smiley: ":)\\!!:" as Smiley,
            },
            {
                name: "LEFT_ARC_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "(||" as Ascii,
                smiley: ":(||:" as Smiley,
            },
            {
                name: "LEFT_ARC_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(!!" as Ascii,
                smiley: ":(!!:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_ARC_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "~||)" as Ascii,
                smiley: ":~||):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_ARC_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~!!)" as Ascii,
                smiley: ":~!!):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_BARB_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "~||\\" as Ascii,
                smiley: ":~||\\:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_BARB_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~!!/" as Ascii,
                smiley: ":~!!/:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: ")//||" as Ascii,
                smiley: ":)/ /||:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\\\!!" as Ascii,
                smiley: ":)\\ \\!!:" as Smiley,
            },
            {
                name: "ARC_AND_BOATHOOK_DOUBLE_UP",
                unicode: "" as Unicode,
                ascii: "(||~" as Ascii,
                smiley: ":(||~:" as Smiley,
            },
            {
                name: "ARC_AND_BOATHOOK_DOUBLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(!!~" as Ascii,
                smiley: ":(!!~:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")|||" as Ascii,
                smiley: ":)|||:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")!!!" as Ascii,
                smiley: ":)!!!:" as Smiley,
            },
            {
                name: "LEFT_BOATHOOK_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "~|||" as Ascii,
                smiley: ":~|||:" as Smiley,
            },
            {
                name: "LEFT_BOATHOOK_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~!!!" as Ascii,
                smiley: ":~!!!:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BOATHOOK_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")~|||" as Ascii,
                smiley: ":)~|||:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BOATHOOK_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")~!!!" as Ascii,
                smiley: ":)~!!!:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BOATHOOK_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "~~|||" as Ascii,
                smiley: ":~~|||:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BOATHOOK_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~~!!!" as Ascii,
                smiley: ":~~!!!:" as Smiley,
            },
            {
                name: "SCROLL_AND_BOATHOOK_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")|||~" as Ascii,
                smiley: ":)|||~:" as Smiley,
            },
            {
                name: "SCROLL_AND_BOATHOOK_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")!!!~" as Ascii,
                smiley: ":)!!!~:" as Smiley,
            },
            {
                name: "SCROLL_AND_ARC_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")|||)" as Ascii,
                smiley: ":)|||):" as Smiley,
            },
            {
                name: "SCROLL_AND_ARC_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")!!!)" as Ascii,
                smiley: ":)!!!):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_ARC_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "~|||)" as Ascii,
                smiley: ":~|||):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_ARC_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~!!!)" as Ascii,
                smiley: ":~!!!):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "~|||\\" as Ascii,
                smiley: ":~|||\\:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "~!!!/" as Ascii,
                smiley: ":~!!!/:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")//|||" as Ascii,
                smiley: ":)/ /|||:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\\\!!!" as Ascii,
                smiley: ":)\\ \\!!!:" as Smiley,
            },
            {
                name: "ARC_AND_BOATHOOK_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "(|||~" as Ascii,
                smiley: ":(|||~:" as Smiley,
            },
            {
                name: "ARC_AND_BOATHOOK_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(!!!~" as Ascii,
                smiley: ":(!!!~:" as Smiley,
            },
            {
                name: "LEFT_ARC_AND_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "(/|||" as Ascii,
                smiley: ":(/|||:" as Smiley,
            },
            {
                name: "LEFT_ARC_AND_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "(\\!!!" as Ascii,
                smiley: ":(\\!!!:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_DOUBLE_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")/|||\\" as Ascii,
                smiley: ":)/|||\\:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_DOUBLE_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\!!!/" as Ascii,
                smiley: ":)\\!!!/:" as Smiley,
            },
            {
                name: "RIGHT_BARB_AND_ARC_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "|||\\)" as Ascii,
                smiley: ":|||\\):" as Smiley,
            },
            {
                name: "RIGHT_BARB_AND_ARC_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!!/)" as Ascii,
                smiley: ":!!!/):" as Smiley,
            },
            {
                name: "DOUBLE_RIGHT_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: "|||\\\\" as Ascii,
                smiley: ":|||\\ \\:" as Smiley,
            },
            {
                name: "DOUBLE_RIGHT_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: "!!!//" as Ascii,
                smiley: ":!!!/ /:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_UP",
                unicode: "" as Unicode,
                ascii: ")|||\\\\" as Ascii,
                smiley: ":)|||\\ \\:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_DOWN",
                unicode: "" as Unicode,
                ascii: ")!!!//" as Ascii,
                smiley: ":)!!!/ /:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BOATHOOK_EX_UP",
                unicode: "" as Unicode,
                ascii: ")~X" as Ascii,
                smiley: ":)~X:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BOATHOOK_EX_DOWN",
                unicode: "" as Unicode,
                ascii: ")~Y" as Ascii,
                smiley: ":)~Y:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BOATHOOK_EX_UP",
                unicode: "" as Unicode,
                ascii: "~~X" as Ascii,
                smiley: ":~~X:" as Smiley,
            },
            {
                name: "DOUBLE_LEFT_BOATHOOK_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "~~Y" as Ascii,
                smiley: ":~~Y:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BARB_EX_UP",
                unicode: "" as Unicode,
                ascii: ")/X" as Ascii,
                smiley: ":)/X:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_AND_BARB_EX_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\Y" as Ascii,
                smiley: ":)\\Y:" as Smiley,
            },
            {
                name: "LEFT_ARC_EX_UP",
                unicode: "" as Unicode,
                ascii: "(X" as Ascii,
                smiley: ":(X:" as Smiley,
            },
            {
                name: "LEFT_ARC_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "(Y" as Ascii,
                smiley: ":(Y:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_ARC_EX_UP",
                unicode: "" as Unicode,
                ascii: "~X)" as Ascii,
                smiley: ":~X):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_ARC_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "~Y)" as Ascii,
                smiley: ":~Y):" as Smiley,
            },
            {
                name: "BOATHOOK_AND_BARB_EX_UP",
                unicode: "" as Unicode,
                ascii: "~X\\" as Ascii,
                smiley: ":~X\\:" as Smiley,
            },
            {
                name: "BOATHOOK_AND_BARB_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "~Y/" as Ascii,
                smiley: ":~Y/:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_UP",
                unicode: "" as Unicode,
                ascii: ")//X" as Ascii,
                smiley: ":)/ /X:" as Smiley,
            },
            {
                name: "LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_DOWN",
                unicode: "" as Unicode,
                ascii: ")\\\\Y" as Ascii,
                smiley: ":)\\ \\Y:" as Smiley,
            },
            {
                name: "ARC_AND_BOATHOOK_EX_UP",
                unicode: "" as Unicode,
                ascii: "(X~" as Ascii,
                smiley: ":(X~:" as Smiley,
            },
            {
                name: "ARC_AND_BOATHOOK_EX_DOWN",
                unicode: "" as Unicode,
                ascii: "(Y~" as Ascii,
                smiley: ":(Y~:" as Smiley,
            },
            {
                name: "BARE_SHAFT_UP",
                unicode: "" as Unicode,
                ascii: "|" as Ascii,
                smiley: ":|:" as Smiley,
            },
            {
                name: "BARE_SHAFT_DOWN",
                unicode: "" as Unicode,
                ascii: "!" as Ascii,
                smiley: ":!:" as Smiley,
            },
        ]
        expect(coreGlyphExpectations).toBeArrayWithDeepEqualContents(expected)
    })

    it("has the correct accent glyphs and computes their IO correctly (when oriented with an upwards-aiming core)            ", (): void => {
        const accents = Object.values(Accent) as Accent[]
        const accentGlyphExpectations = accents.map((accent: Accent): GlyphExpectation => {
            return computeAccentGlyphExpectation(accent, Orientation.WITH, Aim.UP)
        })

        const expected: Array<GlyphExpectation> = [
            {
                name: Accent.TICK,
                unicode: "" as Unicode,
                ascii: "'" as Ascii,
                smiley: ":':" as Smiley,
            },
            {
                name: Accent.WING,
                unicode: "" as Unicode,
                ascii: "`" as Ascii,
                smiley: ":`:" as Smiley,
            },
            {
                name: Accent.BIRD,
                unicode: "" as Unicode,
                ascii: "``" as Ascii,
                smiley: ":``:" as Smiley,
            },
        ]
        expect(accentGlyphExpectations).toEqual(expected)
    })

    it("has the correct accent glyphs and computes their IO correctly (when oriented with a downwards-aiming core)              ", (): void => {
        const accents = Object.values(Accent) as Accent[]
        const accentGlyphExpectations = accents.map((accent: Accent): GlyphExpectation => {
            return computeAccentGlyphExpectation(accent, Orientation.WITH, Aim.DOWN)
        })

        const expected: Array<GlyphExpectation> = [
            {
                name: Accent.TICK,
                unicode: "" as Unicode,
                ascii: "." as Ascii,
                smiley: ":.:" as Smiley,
            },
            {
                name: Accent.WING,
                unicode: "" as Unicode,
                ascii: "," as Ascii,
                smiley: ":,:" as Smiley,
            },
            {
                name: Accent.BIRD,
                unicode: "" as Unicode,
                ascii: ",," as Ascii,
                smiley: ":,,:" as Smiley,
            },
        ]
        expect(accentGlyphExpectations).toEqual(expected)
    })

    it("has the correct Sagittal-compatible glyphs and computes their IO correctly", (): void => {
        const compatibles = Object.values(Compatible) as Compatible[]
        const compatibleGlyphExpectations = compatibles.map((compatible: Compatible): GlyphExpectation => {
            return computeCompatibleGlyphExpectation(compatible)
        })

        const expected: GlyphExpectation[] = [
            {
                name: Compatible.STEIN_SEMISHARP,
                unicode: "" as Unicode,
                ascii: ">" as Ascii,
                smiley: ":>:" as Smiley,
            },
            {
                name: Compatible.STEIN_SEMIFLAT,
                unicode: "" as Unicode,
                ascii: "<" as Ascii,
                smiley: ":<:" as Smiley,
            },
            {
                name: Compatible.STEIN_SESQUISHARP,
                unicode: "" as Unicode,
                ascii: ">#" as Ascii,
                smiley: ":>#:" as Smiley,
            },
            {
                name: Compatible.ZIMMERMANN_SESQUIFLAT,
                unicode: "" as Unicode,
                ascii: "<b" as Ascii,
                smiley: ":<b:" as Smiley,
            },
            {
                name: Compatible.WILSON_PLUS,
                unicode: "" as Unicode,
                ascii: "+" as Ascii,
                smiley: ":+:" as Smiley,
            },
            {
                name: Compatible.WILSON_MINUS,
                unicode: "" as Unicode,
                ascii: "-" as Ascii,
                smiley: ":-:" as Smiley,
            },
            {
                name: Compatible.NATURAL,
                unicode: "" as Unicode,
                ascii: "|//|" as Ascii,
                smiley: ":h:" as Smiley,
            },
            {
                name: Compatible.SHARP,
                unicode: "" as Unicode,
                ascii: "#" as Ascii,
                smiley: ":#:" as Smiley,
            },
            {
                name: Compatible.FLAT,
                unicode: "" as Unicode,
                ascii: "b" as Ascii,
                smiley: ":b:" as Smiley,
            },
            {
                name: Compatible.DOUBLE_SHARP,
                unicode: "" as Unicode,
                ascii: "x" as Ascii,
                smiley: ":x:" as Smiley,
            },
            {
                name: Compatible.DOUBLE_FLAT,
                unicode: "" as Unicode,
                ascii: "bb" as Ascii,
                smiley: ":bb:" as Smiley,
            },
        ]
        expect(compatibleGlyphExpectations).toEqual(expected)
    })
})
