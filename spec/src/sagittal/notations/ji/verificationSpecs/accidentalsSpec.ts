import {Ascii, Flavor, Smiley} from "../../../../../../src/sagittal/accidental"
import {Unicode} from "../../../../../../src/sagittal/accidental/io"
import {CaptureZone} from "../../../../../../src/sagittal/notations"
import {computeCaptureZones} from "../../../../../../src/sagittal/notations/captureZones"
import {EXTREME_NOTATION} from "../../../../../../src/sagittal/notations/ji/notations"
import {computeAccidentalExpectation} from "../../../../../helpers/src/sagittal/accidental/accidentalExpectation"
import {AccidentalExpectation} from "../../../../../helpers/src/sagittal/accidental/types"

// Todo: POST-NOTATION-GENERATION: ACCIDENTAL, PRIMARY COMMA, ZONE STUFF
//  So I could either imagine having totally separate specs for verifying the bounds & commas of the capture zones
//  I think that kind of works, what with the actual captureZonesSpec checking everything but in proto-form
//  Then this makes sure the actual stuff you can derive from each is correct, but the accidentals stuff only
//  So the other ones would verify okay you got the right bound class ID fine, we know that from the captureZoneSpec
//  But do you actually use that w/r/t natural, negated, shifted, section, etc. correctly
//  And same for primary comma
//  I'll just include the WIP for those methods here then
/*
// const computePrimaryComma = ({ commaClassId, commaDirection, apotomeCount }: PrimaryCommaOptions): Comma => {
//     const comma = getCommaClass(commaClassId).pitch
//     const commaticAlteration: Comma = commaDirection === Direction.SUPER ? comma : invertScamon(comma) as Comma
//     const apotomeBase: Comma = multiplyScamon(
//         APOTOME,
//         apotomeCount as Decimal<{ integer: true }> as Decimal<{ integer: true }> & Multiplier,
//     ) as Comma
//
//     return addScamons(apotomeBase, commaticAlteration) as Scamon as Comma
// }
//
// const computeCaptureZone = ({ boundClassId, commaDirection, apotomeCount }: CaptureZoneOptions): Zone => {
//     const bound = getBoundClass(boundClassId).pitch
//     const boundAlteration = commaDirection === Direction.SUPER ? bound : invertScamon(bound)
//     const apotomeBase = multiplyScamon(
//         APOTOME,
//         apotomeCount as Decimal<{ integer: true }> as Decimal<{ integer: true }> & Multiplier,
//     ) as Comma
//
//     return addScamons(apotomeBase, boundAlteration)
// }
 */

describe("accidentals", (): void => {
    it("has the correct accidentals for Extreme", (): void => {
        const captureZones = computeCaptureZones(EXTREME_NOTATION)

        const accidentalExpectations = captureZones.map((captureZone: CaptureZone): AccidentalExpectation => {
            return computeAccidentalExpectation(captureZone)
        })

        const expectedN1A: AccidentalExpectation[] = [
            {
                // Key: "n1a_000" as AccidentalKey,
                revo: {
                    ascii: "(|//|)" as Ascii<Flavor.REVO>,
                    smiley: "(:h:)" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|//|)" as Ascii<Flavor.EVO>,
                    smiley: "(:h:)" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_001" as AccidentalKey,
                revo: {
                    ascii: ",!" as Ascii<Flavor.REVO>,
                    smiley: ":,::!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!" as Ascii<Flavor.EVO>,
                    smiley: ":,::!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_002" as AccidentalKey,
                revo: {
                    ascii: ",,!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_003" as AccidentalKey,
                revo: {
                    ascii: "')!" as Ascii<Flavor.REVO>,
                    smiley: ":'::)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')!" as Ascii<Flavor.EVO>,
                    smiley: ":'::)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_004" as AccidentalKey,
                revo: {
                    ascii: ".!" as Ascii<Flavor.REVO>,
                    smiley: ":.::!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!" as Ascii<Flavor.EVO>,
                    smiley: ":.::!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_005" as AccidentalKey,
                revo: {
                    ascii: ",.!" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_006" as AccidentalKey,
                revo: {
                    ascii: "`)!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_007" as AccidentalKey,
                revo: {
                    ascii: ")!" as Ascii<Flavor.REVO>,
                    smiley: ":)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!" as Ascii<Flavor.EVO>,
                    smiley: ":)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_008" as AccidentalKey,
                revo: {
                    ascii: ",)!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_009" as AccidentalKey,
                revo: {
                    ascii: ",,)!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_010" as AccidentalKey,
                revo: {
                    ascii: "``!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!(" as Ascii<Flavor.EVO>,
                    smiley: ":``::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_011" as AccidentalKey,
                revo: {
                    ascii: "`!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_012" as AccidentalKey,
                revo: {
                    ascii: "!(" as Ascii<Flavor.REVO>,
                    smiley: ":!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!(" as Ascii<Flavor.EVO>,
                    smiley: ":!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_013" as AccidentalKey,
                revo: {
                    ascii: ",!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_014" as AccidentalKey,
                revo: {
                    ascii: "'~!" as Ascii<Flavor.REVO>,
                    smiley: ":'::~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_015" as AccidentalKey,
                revo: {
                    ascii: "`.!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_016" as AccidentalKey,
                revo: {
                    ascii: ".!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!(" as Ascii<Flavor.EVO>,
                    smiley: ":.::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_017" as AccidentalKey,
                revo: {
                    ascii: "`~!" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_018" as AccidentalKey,
                revo: {
                    ascii: "~!" as Ascii<Flavor.REVO>,
                    smiley: ":~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!" as Ascii<Flavor.EVO>,
                    smiley: ":~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_019" as AccidentalKey,
                revo: {
                    ascii: "`)!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_020" as AccidentalKey,
                revo: {
                    ascii: ")!(" as Ascii<Flavor.REVO>,
                    smiley: ":)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!(" as Ascii<Flavor.EVO>,
                    smiley: ":)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_021" as AccidentalKey,
                revo: {
                    ascii: ",)!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_022" as AccidentalKey,
                revo: {
                    ascii: ",,)!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!(" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_023" as AccidentalKey,
                revo: {
                    ascii: "`.)!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.)!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_024" as AccidentalKey,
                revo: {
                    ascii: ".)!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)!(" as Ascii<Flavor.EVO>,
                    smiley: ":.::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_025" as AccidentalKey,
                revo: {
                    ascii: ")~!" as Ascii<Flavor.REVO>,
                    smiley: ":)~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~!" as Ascii<Flavor.EVO>,
                    smiley: ":)~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_026" as AccidentalKey,
                revo: {
                    ascii: "'~!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!(" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_027" as AccidentalKey,
                revo: {
                    ascii: ",'~!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'~!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_028" as AccidentalKey,
                revo: {
                    ascii: "``~!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~!(" as Ascii<Flavor.EVO>,
                    smiley: ":``::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_029" as AccidentalKey,
                revo: {
                    ascii: "`~!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_030" as AccidentalKey,
                revo: {
                    ascii: "~!(" as Ascii<Flavor.REVO>,
                    smiley: ":~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!(" as Ascii<Flavor.EVO>,
                    smiley: ":~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_031" as AccidentalKey,
                revo: {
                    ascii: ",~!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_032" as AccidentalKey,
                revo: {
                    ascii: "``!~" as Ascii<Flavor.REVO>,
                    smiley: ":``::!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!~" as Ascii<Flavor.EVO>,
                    smiley: ":``::!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_033" as AccidentalKey,
                revo: {
                    ascii: "`!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!~" as Ascii<Flavor.EVO>,
                    smiley: ":`::!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_034" as AccidentalKey,
                revo: {
                    ascii: "!~" as Ascii<Flavor.REVO>,
                    smiley: ":!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!~" as Ascii<Flavor.EVO>,
                    smiley: ":!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_035" as AccidentalKey,
                revo: {
                    ascii: ",!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!~" as Ascii<Flavor.EVO>,
                    smiley: ":,::!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_036" as AccidentalKey,
                revo: {
                    ascii: "~~!" as Ascii<Flavor.REVO>,
                    smiley: ":~~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~!" as Ascii<Flavor.EVO>,
                    smiley: ":~~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_037" as AccidentalKey,
                revo: {
                    ascii: ",~~!" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~~!" as Ascii<Flavor.EVO>,
                    smiley: ":,::~~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_038" as AccidentalKey,
                revo: {
                    ascii: ",,~~!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~~!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_039" as AccidentalKey,
                revo: {
                    ascii: "`'\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_040" as AccidentalKey,
                revo: {
                    ascii: "'\\!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_041" as AccidentalKey,
                revo: {
                    ascii: ")!~" as Ascii<Flavor.REVO>,
                    smiley: ":)!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!~" as Ascii<Flavor.EVO>,
                    smiley: ":)!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_042" as AccidentalKey,
                revo: {
                    ascii: "``\\!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_043" as AccidentalKey,
                revo: {
                    ascii: "`\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_044" as AccidentalKey,
                revo: {
                    ascii: "\\!" as Ascii<Flavor.REVO>,
                    smiley: ":\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!" as Ascii<Flavor.EVO>,
                    smiley: ":\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_045" as AccidentalKey,
                revo: {
                    ascii: ",\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_046" as AccidentalKey,
                revo: {
                    ascii: ",,\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_047" as AccidentalKey,
                revo: {
                    ascii: "')\\!" as Ascii<Flavor.REVO>,
                    smiley: ":'::)\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')\\!" as Ascii<Flavor.EVO>,
                    smiley: ":'::)\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_048" as AccidentalKey,
                revo: {
                    ascii: ".\\!" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_049" as AccidentalKey,
                revo: {
                    ascii: ",.\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_050" as AccidentalKey,
                revo: {
                    ascii: "``)\\!" as Ascii<Flavor.REVO>,
                    smiley: ":``::)\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\!" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_051" as AccidentalKey,
                revo: {
                    ascii: "`)\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_052" as AccidentalKey,
                revo: {
                    ascii: ")\\!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_053" as AccidentalKey,
                revo: {
                    ascii: "`'!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_054" as AccidentalKey,
                revo: {
                    ascii: "'!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'!)" as Ascii<Flavor.EVO>,
                    smiley: ":'::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_055" as AccidentalKey,
                revo: {
                    ascii: ",'!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_056" as AccidentalKey,
                revo: {
                    ascii: "``!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!)" as Ascii<Flavor.EVO>,
                    smiley: ":``::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_057" as AccidentalKey,
                revo: {
                    ascii: "`!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_058" as AccidentalKey,
                revo: {
                    ascii: "!)" as Ascii<Flavor.REVO>,
                    smiley: ":!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!)" as Ascii<Flavor.EVO>,
                    smiley: ":!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_059" as AccidentalKey,
                revo: {
                    ascii: ",!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_060" as AccidentalKey,
                revo: {
                    ascii: ",,!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!)" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_061" as AccidentalKey,
                revo: {
                    ascii: "`.!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_062" as AccidentalKey,
                revo: {
                    ascii: ".!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!)" as Ascii<Flavor.EVO>,
                    smiley: ":.::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_063" as AccidentalKey,
                revo: {
                    ascii: ",.!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_064" as AccidentalKey,
                revo: {
                    ascii: "`)!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_065" as AccidentalKey,
                revo: {
                    ascii: ")!)" as Ascii<Flavor.REVO>,
                    smiley: ":)!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!)" as Ascii<Flavor.EVO>,
                    smiley: ":)!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_066" as AccidentalKey,
                revo: {
                    ascii: "'(!" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_067" as AccidentalKey,
                revo: {
                    ascii: "!/" as Ascii<Flavor.REVO>,
                    smiley: ":!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/" as Ascii<Flavor.EVO>,
                    smiley: ":!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_068" as AccidentalKey,
                revo: {
                    ascii: ",!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_069" as AccidentalKey,
                revo: {
                    ascii: "`(!" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_070" as AccidentalKey,
                revo: {
                    ascii: "(!" as Ascii<Flavor.REVO>,
                    smiley: ":(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!" as Ascii<Flavor.EVO>,
                    smiley: ":(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_071" as AccidentalKey,
                revo: {
                    ascii: ",(!" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_072" as AccidentalKey,
                revo: {
                    ascii: ",,(!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_073" as AccidentalKey,
                revo: {
                    ascii: "`.(!" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_074" as AccidentalKey,
                revo: {
                    ascii: ".(!" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_075" as AccidentalKey,
                revo: {
                    ascii: "`~!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_076" as AccidentalKey,
                revo: {
                    ascii: "~!)" as Ascii<Flavor.REVO>,
                    smiley: ":~!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!)" as Ascii<Flavor.EVO>,
                    smiley: ":~!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_077" as AccidentalKey,
                revo: {
                    ascii: ",~!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_078" as AccidentalKey,
                revo: {
                    ascii: "`'(!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_079" as AccidentalKey,
                revo: {
                    ascii: "'(!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!(" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_080" as AccidentalKey,
                revo: {
                    ascii: ".~!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::~!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~!)" as Ascii<Flavor.EVO>,
                    smiley: ":.::~!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_081" as AccidentalKey,
                revo: {
                    ascii: "\\!~" as Ascii<Flavor.REVO>,
                    smiley: ":\\!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!~" as Ascii<Flavor.EVO>,
                    smiley: ":\\!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_082" as AccidentalKey,
                revo: {
                    ascii: "``(!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(!(" as Ascii<Flavor.EVO>,
                    smiley: ":``::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_083" as AccidentalKey,
                revo: {
                    ascii: "`(!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_084" as AccidentalKey,
                revo: {
                    ascii: "(!(" as Ascii<Flavor.REVO>,
                    smiley: ":(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!(" as Ascii<Flavor.EVO>,
                    smiley: ":(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_085" as AccidentalKey,
                revo: {
                    ascii: ",(!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_086" as AccidentalKey,
                revo: {
                    ascii: "~!/" as Ascii<Flavor.REVO>,
                    smiley: ":~!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!/" as Ascii<Flavor.EVO>,
                    smiley: ":~!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_087" as AccidentalKey,
                revo: {
                    ascii: "`'\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_088" as AccidentalKey,
                revo: {
                    ascii: "'\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_089" as AccidentalKey,
                revo: {
                    ascii: ",'\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_090" as AccidentalKey,
                revo: {
                    ascii: "``\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_091" as AccidentalKey,
                revo: {
                    ascii: "`\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_092" as AccidentalKey,
                revo: {
                    ascii: "\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_093" as AccidentalKey,
                revo: {
                    ascii: ",\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_094" as AccidentalKey,
                revo: {
                    ascii: ",,\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_095" as AccidentalKey,
                revo: {
                    ascii: "`.\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_096" as AccidentalKey,
                revo: {
                    ascii: ".\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_097" as AccidentalKey,
                revo: {
                    ascii: "``)\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":``::)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_098" as AccidentalKey,
                revo: {
                    ascii: "`)\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_099" as AccidentalKey,
                revo: {
                    ascii: ")\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_100" as AccidentalKey,
                revo: {
                    ascii: ",)\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_101" as AccidentalKey,
                revo: {
                    ascii: ",,)\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_102" as AccidentalKey,
                revo: {
                    ascii: "``\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_103" as AccidentalKey,
                revo: {
                    ascii: "`\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_104" as AccidentalKey,
                revo: {
                    ascii: "\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_105" as AccidentalKey,
                revo: {
                    ascii: ",\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_106" as AccidentalKey,
                revo: {
                    ascii: "(!~" as Ascii<Flavor.REVO>,
                    smiley: ":(!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!~" as Ascii<Flavor.EVO>,
                    smiley: ":(!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_107" as AccidentalKey,
                revo: {
                    ascii: "`.\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_108" as AccidentalKey,
                revo: {
                    ascii: ".\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_109" as AccidentalKey,
                revo: {
                    ascii: ",.\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_110" as AccidentalKey,
                revo: {
                    ascii: "'\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_111" as AccidentalKey,
                revo: {
                    ascii: ",'\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_112" as AccidentalKey,
                revo: {
                    ascii: "``\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_113" as AccidentalKey,
                revo: {
                    ascii: "`\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_114" as AccidentalKey,
                revo: {
                    ascii: "\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_115" as AccidentalKey,
                revo: {
                    ascii: ",\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_116" as AccidentalKey,
                revo: {
                    ascii: "`(\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::(\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::(\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_117" as AccidentalKey,
                revo: {
                    ascii: "(\\!" as Ascii<Flavor.REVO>,
                    smiley: ":(\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(\\!" as Ascii<Flavor.EVO>,
                    smiley: ":(\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_118" as AccidentalKey,
                revo: {
                    ascii: ",(\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::(\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::(\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_119" as AccidentalKey,
                revo: {
                    ascii: ".\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_120" as AccidentalKey,
                revo: {
                    ascii: ",.\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_121" as AccidentalKey,
                revo: {
                    ascii: "`)\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1a_122" as AccidentalKey,
                revo: {
                    ascii: ")\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()
        const expectedN1B: AccidentalExpectation[] = [
            {
                // Key: "n1b_122" as AccidentalKey,
                revo: {
                    ascii: ",)\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::)\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_121" as AccidentalKey,
                revo: {
                    ascii: ",,)\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_120" as AccidentalKey,
                revo: {
                    ascii: "`'(!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_119" as AccidentalKey,
                revo: {
                    ascii: "'(!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!)" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_118" as AccidentalKey,
                revo: {
                    ascii: "`!/)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!/)" as Ascii<Flavor.EVO>,
                    smiley: ":`::!/):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_117" as AccidentalKey,
                revo: {
                    ascii: "!/)" as Ascii<Flavor.REVO>,
                    smiley: ":!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/)" as Ascii<Flavor.EVO>,
                    smiley: ":!/):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_116" as AccidentalKey,
                revo: {
                    ascii: ",!/)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/)" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_115" as AccidentalKey,
                revo: {
                    ascii: "`(!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_114" as AccidentalKey,
                revo: {
                    ascii: "(!)" as Ascii<Flavor.REVO>,
                    smiley: ":(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!)" as Ascii<Flavor.EVO>,
                    smiley: ":(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_113" as AccidentalKey,
                revo: {
                    ascii: ",(!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_112" as AccidentalKey,
                revo: {
                    ascii: ",,(!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!)" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_111" as AccidentalKey,
                revo: {
                    ascii: "`.(!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_110" as AccidentalKey,
                revo: {
                    ascii: ".(!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!)" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_109" as AccidentalKey,
                revo: {
                    ascii: "`'(!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!/" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_108" as AccidentalKey,
                revo: {
                    ascii: "'(!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!/" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_107" as AccidentalKey,
                revo: {
                    ascii: ",'(!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_106" as AccidentalKey,
                revo: {
                    ascii: "!//" as Ascii<Flavor.REVO>,
                    smiley: ":!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!//" as Ascii<Flavor.EVO>,
                    smiley: ":!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_105" as AccidentalKey,
                revo: {
                    ascii: "`(!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!/" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_104" as AccidentalKey,
                revo: {
                    ascii: "(!/" as Ascii<Flavor.REVO>,
                    smiley: ":(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!/" as Ascii<Flavor.EVO>,
                    smiley: ":(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_103" as AccidentalKey,
                revo: {
                    ascii: ",(!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_102" as AccidentalKey,
                revo: {
                    ascii: ",,(!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!/" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_101" as AccidentalKey,
                revo: {
                    ascii: "``)!//" as Ascii<Flavor.REVO>,
                    smiley: ":``::)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)!//" as Ascii<Flavor.EVO>,
                    smiley: ":``::)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_100" as AccidentalKey,
                revo: {
                    ascii: "`)!//" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!//" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_099" as AccidentalKey,
                revo: {
                    ascii: ")!//" as Ascii<Flavor.REVO>,
                    smiley: ":)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!//" as Ascii<Flavor.EVO>,
                    smiley: ":)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_098" as AccidentalKey,
                revo: {
                    ascii: ",)!//" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!//" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1b_097" as AccidentalKey,
                revo: {
                    ascii: ",,)!//" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!//" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()
        const expectedN1C: AccidentalExpectation[] = [
            {
                // Key: "n1c_096" as AccidentalKey,
                revo: {
                    ascii: "')!!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'//|b" as Ascii<Flavor.EVO>,
                    smiley: ":'::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_095" as AccidentalKey,
                revo: {
                    ascii: ",')!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'//|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_094" as AccidentalKey,
                revo: {
                    ascii: "``)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``//|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_093" as AccidentalKey,
                revo: {
                    ascii: "`)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`//|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_092" as AccidentalKey,
                revo: {
                    ascii: ")!!(" as Ascii<Flavor.REVO>,
                    smiley: ":)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "//|b" as Ascii<Flavor.EVO>,
                    smiley: ":/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_091" as AccidentalKey,
                revo: {
                    ascii: ",)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",//|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_090" as AccidentalKey,
                revo: {
                    ascii: ",,)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,//|b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_089" as AccidentalKey,
                revo: {
                    ascii: "`.)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.//|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_088" as AccidentalKey,
                revo: {
                    ascii: ".)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".//|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_087" as AccidentalKey,
                revo: {
                    ascii: ",.)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.//|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_086" as AccidentalKey,
                revo: {
                    ascii: ")~!!" as Ascii<Flavor.REVO>,
                    smiley: ":)~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|\\b" as Ascii<Flavor.EVO>,
                    smiley: ":~|\\::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_085" as AccidentalKey,
                revo: {
                    ascii: "`~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_084" as AccidentalKey,
                revo: {
                    ascii: "~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_083" as AccidentalKey,
                revo: {
                    ascii: ",~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_082" as AccidentalKey,
                revo: {
                    ascii: ",,~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_081" as AccidentalKey,
                revo: {
                    ascii: "!!~" as Ascii<Flavor.REVO>,
                    smiley: ":!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|~b" as Ascii<Flavor.EVO>,
                    smiley: ":/|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_080" as AccidentalKey,
                revo: {
                    ascii: "'~~!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::~~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~|)b" as Ascii<Flavor.EVO>,
                    smiley: ":'::~|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_079" as AccidentalKey,
                revo: {
                    ascii: ".~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_078" as AccidentalKey,
                revo: {
                    ascii: ",.~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_077" as AccidentalKey,
                revo: {
                    ascii: "`~~!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_076" as AccidentalKey,
                revo: {
                    ascii: "~~!!" as Ascii<Flavor.REVO>,
                    smiley: ":~~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|)b" as Ascii<Flavor.EVO>,
                    smiley: ":~|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_075" as AccidentalKey,
                revo: {
                    ascii: ",~~!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_074" as AccidentalKey,
                revo: {
                    ascii: "')!!~" as Ascii<Flavor.REVO>,
                    smiley: ":'::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_073" as AccidentalKey,
                revo: {
                    ascii: ",')!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_072" as AccidentalKey,
                revo: {
                    ascii: "``)!!~" as Ascii<Flavor.REVO>,
                    smiley: ":``::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_071" as AccidentalKey,
                revo: {
                    ascii: "`)!!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_070" as AccidentalKey,
                revo: {
                    ascii: ")!!~" as Ascii<Flavor.REVO>,
                    smiley: ":)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|b" as Ascii<Flavor.EVO>,
                    smiley: ":(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_069" as AccidentalKey,
                revo: {
                    ascii: ",)!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_068" as AccidentalKey,
                revo: {
                    ascii: "`\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_067" as AccidentalKey,
                revo: {
                    ascii: "\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\b" as Ascii<Flavor.EVO>,
                    smiley: ":|\\::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_066" as AccidentalKey,
                revo: {
                    ascii: ".)!!~" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_065" as AccidentalKey,
                revo: {
                    ascii: ")\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|)b" as Ascii<Flavor.EVO>,
                    smiley: ":)|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_064" as AccidentalKey,
                revo: {
                    ascii: ",)\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_063" as AccidentalKey,
                revo: {
                    ascii: "`'!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_062" as AccidentalKey,
                revo: {
                    ascii: "'!!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|)b" as Ascii<Flavor.EVO>,
                    smiley: ":'::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_061" as AccidentalKey,
                revo: {
                    ascii: ",'!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_060" as AccidentalKey,
                revo: {
                    ascii: "``!!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|)b" as Ascii<Flavor.EVO>,
                    smiley: ":``::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_059" as AccidentalKey,
                revo: {
                    ascii: "`!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_058" as AccidentalKey,
                revo: {
                    ascii: "!!)" as Ascii<Flavor.REVO>,
                    smiley: ":!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|)b" as Ascii<Flavor.EVO>,
                    smiley: ":|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_057" as AccidentalKey,
                revo: {
                    ascii: ",!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_056" as AccidentalKey,
                revo: {
                    ascii: ",,!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_055" as AccidentalKey,
                revo: {
                    ascii: "`.!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.|)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_054" as AccidentalKey,
                revo: {
                    ascii: ".!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".|)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_053" as AccidentalKey,
                revo: {
                    ascii: ",.!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_052" as AccidentalKey,
                revo: {
                    ascii: ")!!)" as Ascii<Flavor.REVO>,
                    smiley: ":)!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|b" as Ascii<Flavor.EVO>,
                    smiley: ":)/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_051" as AccidentalKey,
                revo: {
                    ascii: ",)!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_050" as AccidentalKey,
                revo: {
                    ascii: ",,)!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)/|b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_049" as AccidentalKey,
                revo: {
                    ascii: "`'!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_048" as AccidentalKey,
                revo: {
                    ascii: "'!!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|b" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_047" as AccidentalKey,
                revo: {
                    ascii: ".)!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)/|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::)/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_046" as AccidentalKey,
                revo: {
                    ascii: "``!!/" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``/|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_045" as AccidentalKey,
                revo: {
                    ascii: "`!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_044" as AccidentalKey,
                revo: {
                    ascii: "!!/" as Ascii<Flavor.REVO>,
                    smiley: ":!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|b" as Ascii<Flavor.EVO>,
                    smiley: ":/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_043" as AccidentalKey,
                revo: {
                    ascii: ",!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_042" as AccidentalKey,
                revo: {
                    ascii: ",,!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_041" as AccidentalKey,
                revo: {
                    ascii: "(!!" as Ascii<Flavor.REVO>,
                    smiley: ":(!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|~b" as Ascii<Flavor.EVO>,
                    smiley: ":)|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_040" as AccidentalKey,
                revo: {
                    ascii: ".!!/" as Ascii<Flavor.REVO>,
                    smiley: ":.::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_039" as AccidentalKey,
                revo: {
                    ascii: ",.!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",./|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_038" as AccidentalKey,
                revo: {
                    ascii: "``~!!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::~!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~~|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::~~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_037" as AccidentalKey,
                revo: {
                    ascii: "`~!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~~|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_036" as AccidentalKey,
                revo: {
                    ascii: "~!!)" as Ascii<Flavor.REVO>,
                    smiley: ":~!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~|b" as Ascii<Flavor.EVO>,
                    smiley: ":~~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_035" as AccidentalKey,
                revo: {
                    ascii: "`\\!!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|~b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_034" as AccidentalKey,
                revo: {
                    ascii: "\\!!~" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|~b" as Ascii<Flavor.EVO>,
                    smiley: ":|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_033" as AccidentalKey,
                revo: {
                    ascii: ",\\!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|~b" as Ascii<Flavor.EVO>,
                    smiley: ":,::|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_032" as AccidentalKey,
                revo: {
                    ascii: ",,\\!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|~b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_031" as AccidentalKey,
                revo: {
                    ascii: "`(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_030" as AccidentalKey,
                revo: {
                    ascii: "(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_029" as AccidentalKey,
                revo: {
                    ascii: ",(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_028" as AccidentalKey,
                revo: {
                    ascii: ",,(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_027" as AccidentalKey,
                revo: {
                    ascii: "`.(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_026" as AccidentalKey,
                revo: {
                    ascii: ".(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_025" as AccidentalKey,
                revo: {
                    ascii: "~!!/" as Ascii<Flavor.REVO>,
                    smiley: ":~!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~|b" as Ascii<Flavor.EVO>,
                    smiley: ":)~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_024" as AccidentalKey,
                revo: {
                    ascii: "'\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')|(b" as Ascii<Flavor.EVO>,
                    smiley: ":'::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_023" as AccidentalKey,
                revo: {
                    ascii: ",'\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",')|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_022" as AccidentalKey,
                revo: {
                    ascii: "``\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|(b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_021" as AccidentalKey,
                revo: {
                    ascii: "`\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_020" as AccidentalKey,
                revo: {
                    ascii: "\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|(b" as Ascii<Flavor.EVO>,
                    smiley: ":)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_019" as AccidentalKey,
                revo: {
                    ascii: ",\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_018" as AccidentalKey,
                revo: {
                    ascii: ")\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|b" as Ascii<Flavor.EVO>,
                    smiley: ":~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_017" as AccidentalKey,
                revo: {
                    ascii: ",)\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_016" as AccidentalKey,
                revo: {
                    ascii: "'\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|(b" as Ascii<Flavor.EVO>,
                    smiley: ":'::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_015" as AccidentalKey,
                revo: {
                    ascii: ",'\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_014" as AccidentalKey,
                revo: {
                    ascii: ".)\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":.::)\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_013" as AccidentalKey,
                revo: {
                    ascii: "`\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_012" as AccidentalKey,
                revo: {
                    ascii: "\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|(b" as Ascii<Flavor.EVO>,
                    smiley: ":|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_011" as AccidentalKey,
                revo: {
                    ascii: ",\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_010" as AccidentalKey,
                revo: {
                    ascii: ",,\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_009" as AccidentalKey,
                revo: {
                    ascii: "``(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":``::(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_008" as AccidentalKey,
                revo: {
                    ascii: "`(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_007" as AccidentalKey,
                revo: {
                    ascii: "(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|b" as Ascii<Flavor.EVO>,
                    smiley: ":)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_006" as AccidentalKey,
                revo: {
                    ascii: ",(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_005" as AccidentalKey,
                revo: {
                    ascii: "`'\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_004" as AccidentalKey,
                revo: {
                    ascii: "'\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|b" as Ascii<Flavor.EVO>,
                    smiley: ":'::|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_003" as AccidentalKey,
                revo: {
                    ascii: ".(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_002" as AccidentalKey,
                revo: {
                    ascii: "``\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_001" as AccidentalKey,
                revo: {
                    ascii: "`\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n1c_000" as AccidentalKey,
                revo: {
                    ascii: "\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "b" as Ascii<Flavor.EVO>,
                    smiley: ":b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()
        const expectedN2A: AccidentalExpectation[] = [
            {
                // Key: "n2a_000" as AccidentalKey,
                revo: {
                    ascii: "\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "b" as Ascii<Flavor.EVO>,
                    smiley: ":b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_001" as AccidentalKey,
                revo: {
                    ascii: ",\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_002" as AccidentalKey,
                revo: {
                    ascii: ",,\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_003" as AccidentalKey,
                revo: {
                    ascii: "')!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_004" as AccidentalKey,
                revo: {
                    ascii: ".\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!b" as Ascii<Flavor.EVO>,
                    smiley: ":.::!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_005" as AccidentalKey,
                revo: {
                    ascii: ",.\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_006" as AccidentalKey,
                revo: {
                    ascii: "`)!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_007" as AccidentalKey,
                revo: {
                    ascii: ")!!!" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!b" as Ascii<Flavor.EVO>,
                    smiley: ":)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_008" as AccidentalKey,
                revo: {
                    ascii: ",)!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_009" as AccidentalKey,
                revo: {
                    ascii: ",,)!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_010" as AccidentalKey,
                revo: {
                    ascii: "``!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!(b" as Ascii<Flavor.EVO>,
                    smiley: ":``::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_011" as AccidentalKey,
                revo: {
                    ascii: "`!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_012" as AccidentalKey,
                revo: {
                    ascii: "!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!(b" as Ascii<Flavor.EVO>,
                    smiley: ":!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_013" as AccidentalKey,
                revo: {
                    ascii: ",!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_014" as AccidentalKey,
                revo: {
                    ascii: "'~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_015" as AccidentalKey,
                revo: {
                    ascii: "`.!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_016" as AccidentalKey,
                revo: {
                    ascii: ".!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!(b" as Ascii<Flavor.EVO>,
                    smiley: ":.::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_017" as AccidentalKey,
                revo: {
                    ascii: "`~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_018" as AccidentalKey,
                revo: {
                    ascii: "~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!b" as Ascii<Flavor.EVO>,
                    smiley: ":~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_019" as AccidentalKey,
                revo: {
                    ascii: "`)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_020" as AccidentalKey,
                revo: {
                    ascii: ")!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!(b" as Ascii<Flavor.EVO>,
                    smiley: ":)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_021" as AccidentalKey,
                revo: {
                    ascii: ",)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_022" as AccidentalKey,
                revo: {
                    ascii: ",,)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_023" as AccidentalKey,
                revo: {
                    ascii: "`.)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_024" as AccidentalKey,
                revo: {
                    ascii: ".)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":.::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_025" as AccidentalKey,
                revo: {
                    ascii: ")~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":)~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~!b" as Ascii<Flavor.EVO>,
                    smiley: ":)~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_026" as AccidentalKey,
                revo: {
                    ascii: "'~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_027" as AccidentalKey,
                revo: {
                    ascii: ",'~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_028" as AccidentalKey,
                revo: {
                    ascii: "``~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":``::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_029" as AccidentalKey,
                revo: {
                    ascii: "`~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_030" as AccidentalKey,
                revo: {
                    ascii: "~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_031" as AccidentalKey,
                revo: {
                    ascii: ",~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_032" as AccidentalKey,
                revo: {
                    ascii: "``!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!~b" as Ascii<Flavor.EVO>,
                    smiley: ":``::!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_033" as AccidentalKey,
                revo: {
                    ascii: "`!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!~b" as Ascii<Flavor.EVO>,
                    smiley: ":`::!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_034" as AccidentalKey,
                revo: {
                    ascii: "!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!~b" as Ascii<Flavor.EVO>,
                    smiley: ":!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_035" as AccidentalKey,
                revo: {
                    ascii: ",!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!~b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_036" as AccidentalKey,
                revo: {
                    ascii: "~~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":~~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~!b" as Ascii<Flavor.EVO>,
                    smiley: ":~~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_037" as AccidentalKey,
                revo: {
                    ascii: ",~~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~~!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_038" as AccidentalKey,
                revo: {
                    ascii: ",,~~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~~!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_039" as AccidentalKey,
                revo: {
                    ascii: "`'\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_040" as AccidentalKey,
                revo: {
                    ascii: "'\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_041" as AccidentalKey,
                revo: {
                    ascii: ")!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!~b" as Ascii<Flavor.EVO>,
                    smiley: ":)!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_042" as AccidentalKey,
                revo: {
                    ascii: "``\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_043" as AccidentalKey,
                revo: {
                    ascii: "`\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_044" as AccidentalKey,
                revo: {
                    ascii: "\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_045" as AccidentalKey,
                revo: {
                    ascii: ",\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_046" as AccidentalKey,
                revo: {
                    ascii: ",,\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_047" as AccidentalKey,
                revo: {
                    ascii: "')\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::)\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::)\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_048" as AccidentalKey,
                revo: {
                    ascii: ".\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_049" as AccidentalKey,
                revo: {
                    ascii: ",.\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_050" as AccidentalKey,
                revo: {
                    ascii: "``)\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::)\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_051" as AccidentalKey,
                revo: {
                    ascii: "`)\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_052" as AccidentalKey,
                revo: {
                    ascii: ")\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_053" as AccidentalKey,
                revo: {
                    ascii: "`'!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_054" as AccidentalKey,
                revo: {
                    ascii: "'!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'!)b" as Ascii<Flavor.EVO>,
                    smiley: ":'::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_055" as AccidentalKey,
                revo: {
                    ascii: ",'!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_056" as AccidentalKey,
                revo: {
                    ascii: "``!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!)b" as Ascii<Flavor.EVO>,
                    smiley: ":``::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_057" as AccidentalKey,
                revo: {
                    ascii: "`!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_058" as AccidentalKey,
                revo: {
                    ascii: "!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!)b" as Ascii<Flavor.EVO>,
                    smiley: ":!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_059" as AccidentalKey,
                revo: {
                    ascii: ",!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_060" as AccidentalKey,
                revo: {
                    ascii: ",,!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_061" as AccidentalKey,
                revo: {
                    ascii: "`.!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_062" as AccidentalKey,
                revo: {
                    ascii: ".!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_063" as AccidentalKey,
                revo: {
                    ascii: ",.!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_064" as AccidentalKey,
                revo: {
                    ascii: "`)!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_065" as AccidentalKey,
                revo: {
                    ascii: ")!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!)b" as Ascii<Flavor.EVO>,
                    smiley: ":)!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_066" as AccidentalKey,
                revo: {
                    ascii: "'(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_067" as AccidentalKey,
                revo: {
                    ascii: "!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/b" as Ascii<Flavor.EVO>,
                    smiley: ":!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_068" as AccidentalKey,
                revo: {
                    ascii: ",!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_069" as AccidentalKey,
                revo: {
                    ascii: "`(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_070" as AccidentalKey,
                revo: {
                    ascii: "(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!b" as Ascii<Flavor.EVO>,
                    smiley: ":(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_071" as AccidentalKey,
                revo: {
                    ascii: ",(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_072" as AccidentalKey,
                revo: {
                    ascii: ",,(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_073" as AccidentalKey,
                revo: {
                    ascii: "`.(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_074" as AccidentalKey,
                revo: {
                    ascii: ".(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!b" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_075" as AccidentalKey,
                revo: {
                    ascii: "`~!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_076" as AccidentalKey,
                revo: {
                    ascii: "~!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":~!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!)b" as Ascii<Flavor.EVO>,
                    smiley: ":~!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_077" as AccidentalKey,
                revo: {
                    ascii: ",~!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_078" as AccidentalKey,
                revo: {
                    ascii: "`'(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_079" as AccidentalKey,
                revo: {
                    ascii: "'(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_080" as AccidentalKey,
                revo: {
                    ascii: ".~!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::~!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~!)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::~!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_081" as AccidentalKey,
                revo: {
                    ascii: "\\!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!~b" as Ascii<Flavor.EVO>,
                    smiley: ":\\!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_082" as AccidentalKey,
                revo: {
                    ascii: "``(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":``::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_083" as AccidentalKey,
                revo: {
                    ascii: "`(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_084" as AccidentalKey,
                revo: {
                    ascii: "(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_085" as AccidentalKey,
                revo: {
                    ascii: ",(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_086" as AccidentalKey,
                revo: {
                    ascii: "~!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":~!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!/b" as Ascii<Flavor.EVO>,
                    smiley: ":~!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_087" as AccidentalKey,
                revo: {
                    ascii: "`'\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_088" as AccidentalKey,
                revo: {
                    ascii: "'\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_089" as AccidentalKey,
                revo: {
                    ascii: ",'\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_090" as AccidentalKey,
                revo: {
                    ascii: "``\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_091" as AccidentalKey,
                revo: {
                    ascii: "`\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_092" as AccidentalKey,
                revo: {
                    ascii: "\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_093" as AccidentalKey,
                revo: {
                    ascii: ",\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_094" as AccidentalKey,
                revo: {
                    ascii: ",,\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_095" as AccidentalKey,
                revo: {
                    ascii: "`.\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_096" as AccidentalKey,
                revo: {
                    ascii: ".\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_097" as AccidentalKey,
                revo: {
                    ascii: "``)\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_098" as AccidentalKey,
                revo: {
                    ascii: "`)\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_099" as AccidentalKey,
                revo: {
                    ascii: ")\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_100" as AccidentalKey,
                revo: {
                    ascii: ",)\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_101" as AccidentalKey,
                revo: {
                    ascii: ",,)\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_102" as AccidentalKey,
                revo: {
                    ascii: "``\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_103" as AccidentalKey,
                revo: {
                    ascii: "`\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_104" as AccidentalKey,
                revo: {
                    ascii: "\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_105" as AccidentalKey,
                revo: {
                    ascii: ",\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_106" as AccidentalKey,
                revo: {
                    ascii: "(!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!~b" as Ascii<Flavor.EVO>,
                    smiley: ":(!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_107" as AccidentalKey,
                revo: {
                    ascii: "`.\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_108" as AccidentalKey,
                revo: {
                    ascii: ".\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_109" as AccidentalKey,
                revo: {
                    ascii: ",.\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_110" as AccidentalKey,
                revo: {
                    ascii: "'\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_111" as AccidentalKey,
                revo: {
                    ascii: ",'\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_112" as AccidentalKey,
                revo: {
                    ascii: "``\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_113" as AccidentalKey,
                revo: {
                    ascii: "`\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_114" as AccidentalKey,
                revo: {
                    ascii: "\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_115" as AccidentalKey,
                revo: {
                    ascii: ",\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_116" as AccidentalKey,
                revo: {
                    ascii: "`(\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::(\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_117" as AccidentalKey,
                revo: {
                    ascii: "(\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":(\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":(\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_118" as AccidentalKey,
                revo: {
                    ascii: ",(\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::(\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_119" as AccidentalKey,
                revo: {
                    ascii: ".\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_120" as AccidentalKey,
                revo: {
                    ascii: ",.\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_121" as AccidentalKey,
                revo: {
                    ascii: "`)\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2a_122" as AccidentalKey,
                revo: {
                    ascii: ")\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()
        const expectedN2B: AccidentalExpectation[] = [
            {
                // Key: "n2b_122" as AccidentalKey,
                revo: {
                    ascii: ",)\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_121" as AccidentalKey,
                revo: {
                    ascii: ",,)\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_120" as AccidentalKey,
                revo: {
                    ascii: "`'(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_119" as AccidentalKey,
                revo: {
                    ascii: "'(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_118" as AccidentalKey,
                revo: {
                    ascii: "`!!!/)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!/)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::!/)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_117" as AccidentalKey,
                revo: {
                    ascii: "!!!/)" as Ascii<Flavor.REVO>,
                    smiley: ":!!!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/)b" as Ascii<Flavor.EVO>,
                    smiley: ":!/)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_116" as AccidentalKey,
                revo: {
                    ascii: ",!!!/)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_115" as AccidentalKey,
                revo: {
                    ascii: "`(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_114" as AccidentalKey,
                revo: {
                    ascii: "(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_113" as AccidentalKey,
                revo: {
                    ascii: ",(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_112" as AccidentalKey,
                revo: {
                    ascii: ",,(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_111" as AccidentalKey,
                revo: {
                    ascii: "`.(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_110" as AccidentalKey,
                revo: {
                    ascii: ".(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_109" as AccidentalKey,
                revo: {
                    ascii: "`'(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_108" as AccidentalKey,
                revo: {
                    ascii: "'(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_107" as AccidentalKey,
                revo: {
                    ascii: ",'(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_106" as AccidentalKey,
                revo: {
                    ascii: "!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!//b" as Ascii<Flavor.EVO>,
                    smiley: ":!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_105" as AccidentalKey,
                revo: {
                    ascii: "`(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_104" as AccidentalKey,
                revo: {
                    ascii: "(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_103" as AccidentalKey,
                revo: {
                    ascii: ",(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_102" as AccidentalKey,
                revo: {
                    ascii: ",,(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_101" as AccidentalKey,
                revo: {
                    ascii: "``)!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":``::)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)!//b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_100" as AccidentalKey,
                revo: {
                    ascii: "`)!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!//b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_099" as AccidentalKey,
                revo: {
                    ascii: ")!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!//b" as Ascii<Flavor.EVO>,
                    smiley: ":)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_098" as AccidentalKey,
                revo: {
                    ascii: ",)!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!//b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2b_097" as AccidentalKey,
                revo: {
                    ascii: ",,)!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!//b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()
        const expectedN2C: AccidentalExpectation[] = [
            {
                // Key: "n2c_096" as AccidentalKey,
                revo: {
                    ascii: "')Y(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_095" as AccidentalKey,
                revo: {
                    ascii: ",')Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_094" as AccidentalKey,
                revo: {
                    ascii: "``)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_093" as AccidentalKey,
                revo: {
                    ascii: "`)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_092" as AccidentalKey,
                revo: {
                    ascii: ")Y(" as Ascii<Flavor.REVO>,
                    smiley: ":)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_091" as AccidentalKey,
                revo: {
                    ascii: ",)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_090" as AccidentalKey,
                revo: {
                    ascii: ",,)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_089" as AccidentalKey,
                revo: {
                    ascii: "`.)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_088" as AccidentalKey,
                revo: {
                    ascii: ".)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_087" as AccidentalKey,
                revo: {
                    ascii: ",.)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_086" as AccidentalKey,
                revo: {
                    ascii: ")~Y" as Ascii<Flavor.REVO>,
                    smiley: ":)~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|\\bb" as Ascii<Flavor.EVO>,
                    smiley: ":~|\\::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_085" as AccidentalKey,
                revo: {
                    ascii: "`~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_084" as AccidentalKey,
                revo: {
                    ascii: "~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_083" as AccidentalKey,
                revo: {
                    ascii: ",~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_082" as AccidentalKey,
                revo: {
                    ascii: ",,~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_081" as AccidentalKey,
                revo: {
                    ascii: "Y~" as Ascii<Flavor.REVO>,
                    smiley: ":Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":/|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_080" as AccidentalKey,
                revo: {
                    ascii: "'~~Y" as Ascii<Flavor.REVO>,
                    smiley: ":'::~~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::~|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_079" as AccidentalKey,
                revo: {
                    ascii: ".~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":.::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_078" as AccidentalKey,
                revo: {
                    ascii: ",.~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_077" as AccidentalKey,
                revo: {
                    ascii: "`~~Y" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_076" as AccidentalKey,
                revo: {
                    ascii: "~~Y" as Ascii<Flavor.REVO>,
                    smiley: ":~~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":~|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_075" as AccidentalKey,
                revo: {
                    ascii: ",~~Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_074" as AccidentalKey,
                revo: {
                    ascii: "')Y~" as Ascii<Flavor.REVO>,
                    smiley: ":'::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_073" as AccidentalKey,
                revo: {
                    ascii: ",')Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_072" as AccidentalKey,
                revo: {
                    ascii: "``)Y~" as Ascii<Flavor.REVO>,
                    smiley: ":``::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_071" as AccidentalKey,
                revo: {
                    ascii: "`)Y~" as Ascii<Flavor.REVO>,
                    smiley: ":`::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_070" as AccidentalKey,
                revo: {
                    ascii: ")Y~" as Ascii<Flavor.REVO>,
                    smiley: ":)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_069" as AccidentalKey,
                revo: {
                    ascii: ",)Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_068" as AccidentalKey,
                revo: {
                    ascii: "`\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_067" as AccidentalKey,
                revo: {
                    ascii: "\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":\\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\bb" as Ascii<Flavor.EVO>,
                    smiley: ":|\\::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_066" as AccidentalKey,
                revo: {
                    ascii: ".)Y~" as Ascii<Flavor.REVO>,
                    smiley: ":.::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_065" as AccidentalKey,
                revo: {
                    ascii: ")\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":)\\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":)|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_064" as AccidentalKey,
                revo: {
                    ascii: ",)\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_063" as AccidentalKey,
                revo: {
                    ascii: "`'Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_062" as AccidentalKey,
                revo: {
                    ascii: "'Y)" as Ascii<Flavor.REVO>,
                    smiley: ":'::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_061" as AccidentalKey,
                revo: {
                    ascii: ",'Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_060" as AccidentalKey,
                revo: {
                    ascii: "``Y)" as Ascii<Flavor.REVO>,
                    smiley: ":``::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_059" as AccidentalKey,
                revo: {
                    ascii: "`Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_058" as AccidentalKey,
                revo: {
                    ascii: "Y)" as Ascii<Flavor.REVO>,
                    smiley: ":Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_057" as AccidentalKey,
                revo: {
                    ascii: ",Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_056" as AccidentalKey,
                revo: {
                    ascii: ",,Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_055" as AccidentalKey,
                revo: {
                    ascii: "`.Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_054" as AccidentalKey,
                revo: {
                    ascii: ".Y)" as Ascii<Flavor.REVO>,
                    smiley: ":.::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_053" as AccidentalKey,
                revo: {
                    ascii: ",.Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_052" as AccidentalKey,
                revo: {
                    ascii: ")Y)" as Ascii<Flavor.REVO>,
                    smiley: ":)Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":)/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_051" as AccidentalKey,
                revo: {
                    ascii: ",)Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::)Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_050" as AccidentalKey,
                revo: {
                    ascii: ",,)Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_049" as AccidentalKey,
                revo: {
                    ascii: "`'Y/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_048" as AccidentalKey,
                revo: {
                    ascii: "'Y/" as Ascii<Flavor.REVO>,
                    smiley: ":'::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_047" as AccidentalKey,
                revo: {
                    ascii: ".)Y)" as Ascii<Flavor.REVO>,
                    smiley: ":.::)Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::)/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_046" as AccidentalKey,
                revo: {
                    ascii: "``Y/" as Ascii<Flavor.REVO>,
                    smiley: ":``::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_045" as AccidentalKey,
                revo: {
                    ascii: "`Y/" as Ascii<Flavor.REVO>,
                    smiley: ":`::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_044" as AccidentalKey,
                revo: {
                    ascii: "Y/" as Ascii<Flavor.REVO>,
                    smiley: ":Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_043" as AccidentalKey,
                revo: {
                    ascii: ",Y/" as Ascii<Flavor.REVO>,
                    smiley: ":,::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_042" as AccidentalKey,
                revo: {
                    ascii: ",,Y/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_041" as AccidentalKey,
                revo: {
                    ascii: "(Y" as Ascii<Flavor.REVO>,
                    smiley: ":(Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":)|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_040" as AccidentalKey,
                revo: {
                    ascii: ".Y/" as Ascii<Flavor.REVO>,
                    smiley: ":.::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_039" as AccidentalKey,
                revo: {
                    ascii: ",.Y/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",./|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_038" as AccidentalKey,
                revo: {
                    ascii: "``~Y)" as Ascii<Flavor.REVO>,
                    smiley: ":``::~Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::~~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_037" as AccidentalKey,
                revo: {
                    ascii: "`~Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::~~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_036" as AccidentalKey,
                revo: {
                    ascii: "~Y)" as Ascii<Flavor.REVO>,
                    smiley: ":~Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":~~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_035" as AccidentalKey,
                revo: {
                    ascii: "`\\Y~" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_034" as AccidentalKey,
                revo: {
                    ascii: "\\Y~" as Ascii<Flavor.REVO>,
                    smiley: ":\\Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_033" as AccidentalKey,
                revo: {
                    ascii: ",\\Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_032" as AccidentalKey,
                revo: {
                    ascii: ",,\\Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_031" as AccidentalKey,
                revo: {
                    ascii: "`(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_030" as AccidentalKey,
                revo: {
                    ascii: "(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_029" as AccidentalKey,
                revo: {
                    ascii: ",(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_028" as AccidentalKey,
                revo: {
                    ascii: ",,(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_027" as AccidentalKey,
                revo: {
                    ascii: "`.(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_026" as AccidentalKey,
                revo: {
                    ascii: ".(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":.::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_025" as AccidentalKey,
                revo: {
                    ascii: "~Y/" as Ascii<Flavor.REVO>,
                    smiley: ":~Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":)~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_024" as AccidentalKey,
                revo: {
                    ascii: "'\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_023" as AccidentalKey,
                revo: {
                    ascii: ",'\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",')|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_022" as AccidentalKey,
                revo: {
                    ascii: "``\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_021" as AccidentalKey,
                revo: {
                    ascii: "`\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_020" as AccidentalKey,
                revo: {
                    ascii: "\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_019" as AccidentalKey,
                revo: {
                    ascii: ",\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_018" as AccidentalKey,
                revo: {
                    ascii: ")\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":)\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_017" as AccidentalKey,
                revo: {
                    ascii: ",)\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_016" as AccidentalKey,
                revo: {
                    ascii: "'\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_015" as AccidentalKey,
                revo: {
                    ascii: ",'\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_014" as AccidentalKey,
                revo: {
                    ascii: ".)\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":.::)\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_013" as AccidentalKey,
                revo: {
                    ascii: "`\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_012" as AccidentalKey,
                revo: {
                    ascii: "\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_011" as AccidentalKey,
                revo: {
                    ascii: ",\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_010" as AccidentalKey,
                revo: {
                    ascii: ",,\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_009" as AccidentalKey,
                revo: {
                    ascii: "``(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":``::(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_008" as AccidentalKey,
                revo: {
                    ascii: "`(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":`::(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_007" as AccidentalKey,
                revo: {
                    ascii: "(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|bb" as Ascii<Flavor.EVO>,
                    smiley: ":)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_006" as AccidentalKey,
                revo: {
                    ascii: ",(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,::(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_005" as AccidentalKey,
                revo: {
                    ascii: "`'\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_004" as AccidentalKey,
                revo: {
                    ascii: "'\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_003" as AccidentalKey,
                revo: {
                    ascii: ".(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":.::(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_002" as AccidentalKey,
                revo: {
                    ascii: "``\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_001" as AccidentalKey,
                revo: {
                    ascii: "`\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "n2c_000" as AccidentalKey,
                revo: {
                    ascii: "\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "bb" as Ascii<Flavor.EVO>,
                    smiley: ":bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()

        const expectedP1A: AccidentalExpectation[] = [
            {
                // Key: "p1a_000" as AccidentalKey,
                revo: {
                    ascii: "(|//|)" as Ascii<Flavor.REVO>,
                    smiley: "(:h:)" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|//|)" as Ascii<Flavor.EVO>,
                    smiley: "(:h:)" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_001" as AccidentalKey,
                revo: {
                    ascii: "`|" as Ascii<Flavor.REVO>,
                    smiley: ":`::|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|" as Ascii<Flavor.EVO>,
                    smiley: ":`::|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_002" as AccidentalKey,
                revo: {
                    ascii: "``|" as Ascii<Flavor.REVO>,
                    smiley: ":``::|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|" as Ascii<Flavor.EVO>,
                    smiley: ":``::|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_003" as AccidentalKey,
                revo: {
                    ascii: ".)|" as Ascii<Flavor.REVO>,
                    smiley: ":.::)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)|" as Ascii<Flavor.EVO>,
                    smiley: ":.::)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_004" as AccidentalKey,
                revo: {
                    ascii: "'|" as Ascii<Flavor.REVO>,
                    smiley: ":'::|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|" as Ascii<Flavor.EVO>,
                    smiley: ":'::|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_005" as AccidentalKey,
                revo: {
                    ascii: "`'|" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_006" as AccidentalKey,
                revo: {
                    ascii: ",)|" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_007" as AccidentalKey,
                revo: {
                    ascii: ")|" as Ascii<Flavor.REVO>,
                    smiley: ":)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|" as Ascii<Flavor.EVO>,
                    smiley: ":)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_008" as AccidentalKey,
                revo: {
                    ascii: "`)|" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_009" as AccidentalKey,
                revo: {
                    ascii: "``)|" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_010" as AccidentalKey,
                revo: {
                    ascii: ",,|(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|(" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_011" as AccidentalKey,
                revo: {
                    ascii: ",|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_012" as AccidentalKey,
                revo: {
                    ascii: "|(" as Ascii<Flavor.REVO>,
                    smiley: ":|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|(" as Ascii<Flavor.EVO>,
                    smiley: ":|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_013" as AccidentalKey,
                revo: {
                    ascii: "`|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_014" as AccidentalKey,
                revo: {
                    ascii: ".~|" as Ascii<Flavor.REVO>,
                    smiley: ":.::~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_015" as AccidentalKey,
                revo: {
                    ascii: ",'|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_016" as AccidentalKey,
                revo: {
                    ascii: "'|(" as Ascii<Flavor.REVO>,
                    smiley: ":'::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|(" as Ascii<Flavor.EVO>,
                    smiley: ":'::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_017" as AccidentalKey,
                revo: {
                    ascii: ",~|" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_018" as AccidentalKey,
                revo: {
                    ascii: "~|" as Ascii<Flavor.REVO>,
                    smiley: ":~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|" as Ascii<Flavor.EVO>,
                    smiley: ":~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_019" as AccidentalKey,
                revo: {
                    ascii: ",)|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_020" as AccidentalKey,
                revo: {
                    ascii: ")|(" as Ascii<Flavor.REVO>,
                    smiley: ":)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|(" as Ascii<Flavor.EVO>,
                    smiley: ":)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_021" as AccidentalKey,
                revo: {
                    ascii: "`)|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_022" as AccidentalKey,
                revo: {
                    ascii: "``)|(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|(" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_023" as AccidentalKey,
                revo: {
                    ascii: ",')|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",')|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_024" as AccidentalKey,
                revo: {
                    ascii: "')|(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')|(" as Ascii<Flavor.EVO>,
                    smiley: ":'::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_025" as AccidentalKey,
                revo: {
                    ascii: ")~|" as Ascii<Flavor.REVO>,
                    smiley: ":)~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~|" as Ascii<Flavor.EVO>,
                    smiley: ":)~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_026" as AccidentalKey,
                revo: {
                    ascii: ".~|(" as Ascii<Flavor.REVO>,
                    smiley: ":.::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|(" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_027" as AccidentalKey,
                revo: {
                    ascii: "`.~|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.~|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_028" as AccidentalKey,
                revo: {
                    ascii: ",,~|(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~|(" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_029" as AccidentalKey,
                revo: {
                    ascii: ",~|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_030" as AccidentalKey,
                revo: {
                    ascii: "~|(" as Ascii<Flavor.REVO>,
                    smiley: ":~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|(" as Ascii<Flavor.EVO>,
                    smiley: ":~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_031" as AccidentalKey,
                revo: {
                    ascii: "`~|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_032" as AccidentalKey,
                revo: {
                    ascii: ",,|~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|~" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_033" as AccidentalKey,
                revo: {
                    ascii: ",|~" as Ascii<Flavor.REVO>,
                    smiley: ":,::|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|~" as Ascii<Flavor.EVO>,
                    smiley: ":,::|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_034" as AccidentalKey,
                revo: {
                    ascii: "|~" as Ascii<Flavor.REVO>,
                    smiley: ":|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|~" as Ascii<Flavor.EVO>,
                    smiley: ":|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_035" as AccidentalKey,
                revo: {
                    ascii: "`|~" as Ascii<Flavor.REVO>,
                    smiley: ":`::|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|~" as Ascii<Flavor.EVO>,
                    smiley: ":`::|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_036" as AccidentalKey,
                revo: {
                    ascii: "~~|" as Ascii<Flavor.REVO>,
                    smiley: ":~~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~|" as Ascii<Flavor.EVO>,
                    smiley: ":~~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_037" as AccidentalKey,
                revo: {
                    ascii: "`~~|" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~~|" as Ascii<Flavor.EVO>,
                    smiley: ":`::~~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_038" as AccidentalKey,
                revo: {
                    ascii: "``~~|" as Ascii<Flavor.REVO>,
                    smiley: ":``::~~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~~|" as Ascii<Flavor.EVO>,
                    smiley: ":``::~~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_039" as AccidentalKey,
                revo: {
                    ascii: ",./|" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",./|" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_040" as AccidentalKey,
                revo: {
                    ascii: "./|" as Ascii<Flavor.REVO>,
                    smiley: ":.::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_041" as AccidentalKey,
                revo: {
                    ascii: ")|~" as Ascii<Flavor.REVO>,
                    smiley: ":)|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|~" as Ascii<Flavor.EVO>,
                    smiley: ":)|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_042" as AccidentalKey,
                revo: {
                    ascii: ",,/|" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_043" as AccidentalKey,
                revo: {
                    ascii: ",/|" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_044" as AccidentalKey,
                revo: {
                    ascii: "/|" as Ascii<Flavor.REVO>,
                    smiley: ":/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|" as Ascii<Flavor.EVO>,
                    smiley: ":/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_045" as AccidentalKey,
                revo: {
                    ascii: "`/|" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_046" as AccidentalKey,
                revo: {
                    ascii: "``/|" as Ascii<Flavor.REVO>,
                    smiley: ":``::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``/|" as Ascii<Flavor.EVO>,
                    smiley: ":``::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_047" as AccidentalKey,
                revo: {
                    ascii: ".)/|" as Ascii<Flavor.REVO>,
                    smiley: ":.::)/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)/|" as Ascii<Flavor.EVO>,
                    smiley: ":.::)/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_048" as AccidentalKey,
                revo: {
                    ascii: "'/|" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_049" as AccidentalKey,
                revo: {
                    ascii: "`'/|" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_050" as AccidentalKey,
                revo: {
                    ascii: ",,)/|" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)/|" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_051" as AccidentalKey,
                revo: {
                    ascii: ",)/|" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_052" as AccidentalKey,
                revo: {
                    ascii: ")/|" as Ascii<Flavor.REVO>,
                    smiley: ":)/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|" as Ascii<Flavor.EVO>,
                    smiley: ":)/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_053" as AccidentalKey,
                revo: {
                    ascii: ",.|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_054" as AccidentalKey,
                revo: {
                    ascii: ".|)" as Ascii<Flavor.REVO>,
                    smiley: ":.::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".|)" as Ascii<Flavor.EVO>,
                    smiley: ":.::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_055" as AccidentalKey,
                revo: {
                    ascii: "`.|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_056" as AccidentalKey,
                revo: {
                    ascii: ",,|)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|)" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_057" as AccidentalKey,
                revo: {
                    ascii: ",|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_058" as AccidentalKey,
                revo: {
                    ascii: "|)" as Ascii<Flavor.REVO>,
                    smiley: ":|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|)" as Ascii<Flavor.EVO>,
                    smiley: ":|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_059" as AccidentalKey,
                revo: {
                    ascii: "`|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_060" as AccidentalKey,
                revo: {
                    ascii: "``|)" as Ascii<Flavor.REVO>,
                    smiley: ":``::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|)" as Ascii<Flavor.EVO>,
                    smiley: ":``::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_061" as AccidentalKey,
                revo: {
                    ascii: ",'|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_062" as AccidentalKey,
                revo: {
                    ascii: "'|)" as Ascii<Flavor.REVO>,
                    smiley: ":'::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|)" as Ascii<Flavor.EVO>,
                    smiley: ":'::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_063" as AccidentalKey,
                revo: {
                    ascii: "`'|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_064" as AccidentalKey,
                revo: {
                    ascii: ",)|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_065" as AccidentalKey,
                revo: {
                    ascii: ")|)" as Ascii<Flavor.REVO>,
                    smiley: ":)|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|)" as Ascii<Flavor.EVO>,
                    smiley: ":)|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_066" as AccidentalKey,
                revo: {
                    ascii: ".(|" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_067" as AccidentalKey,
                revo: {
                    ascii: "|\\" as Ascii<Flavor.REVO>,
                    smiley: ":|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\" as Ascii<Flavor.EVO>,
                    smiley: ":|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_068" as AccidentalKey,
                revo: {
                    ascii: "`|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_069" as AccidentalKey,
                revo: {
                    ascii: ",(|" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_070" as AccidentalKey,
                revo: {
                    ascii: "(|" as Ascii<Flavor.REVO>,
                    smiley: ":(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|" as Ascii<Flavor.EVO>,
                    smiley: ":(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_071" as AccidentalKey,
                revo: {
                    ascii: "`(|" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_072" as AccidentalKey,
                revo: {
                    ascii: "``(|" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_073" as AccidentalKey,
                revo: {
                    ascii: ",'(|" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_074" as AccidentalKey,
                revo: {
                    ascii: "'(|" as Ascii<Flavor.REVO>,
                    smiley: ":'::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_075" as AccidentalKey,
                revo: {
                    ascii: ",~|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_076" as AccidentalKey,
                revo: {
                    ascii: "~|)" as Ascii<Flavor.REVO>,
                    smiley: ":~|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|)" as Ascii<Flavor.EVO>,
                    smiley: ":~|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_077" as AccidentalKey,
                revo: {
                    ascii: "`~|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_078" as AccidentalKey,
                revo: {
                    ascii: ",.(|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_079" as AccidentalKey,
                revo: {
                    ascii: ".(|(" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|(" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_080" as AccidentalKey,
                revo: {
                    ascii: "'~|)" as Ascii<Flavor.REVO>,
                    smiley: ":'::~|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~|)" as Ascii<Flavor.EVO>,
                    smiley: ":'::~|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_081" as AccidentalKey,
                revo: {
                    ascii: "/|~" as Ascii<Flavor.REVO>,
                    smiley: ":/|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|~" as Ascii<Flavor.EVO>,
                    smiley: ":/|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_082" as AccidentalKey,
                revo: {
                    ascii: ",,(|(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(|(" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_083" as AccidentalKey,
                revo: {
                    ascii: ",(|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_084" as AccidentalKey,
                revo: {
                    ascii: "(|(" as Ascii<Flavor.REVO>,
                    smiley: ":(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|(" as Ascii<Flavor.EVO>,
                    smiley: ":(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_085" as AccidentalKey,
                revo: {
                    ascii: "`(|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_086" as AccidentalKey,
                revo: {
                    ascii: "~|\\" as Ascii<Flavor.REVO>,
                    smiley: ":~|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|\\" as Ascii<Flavor.EVO>,
                    smiley: ":~|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_087" as AccidentalKey,
                revo: {
                    ascii: ",.//|" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.//|" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_088" as AccidentalKey,
                revo: {
                    ascii: ".//|" as Ascii<Flavor.REVO>,
                    smiley: ":.::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".//|" as Ascii<Flavor.EVO>,
                    smiley: ":.::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_089" as AccidentalKey,
                revo: {
                    ascii: "`.//|" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.//|" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_090" as AccidentalKey,
                revo: {
                    ascii: ",,//|" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,//|" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_091" as AccidentalKey,
                revo: {
                    ascii: ",//|" as Ascii<Flavor.REVO>,
                    smiley: ":,::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",//|" as Ascii<Flavor.EVO>,
                    smiley: ":,::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_092" as AccidentalKey,
                revo: {
                    ascii: "//|" as Ascii<Flavor.REVO>,
                    smiley: ":/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "//|" as Ascii<Flavor.EVO>,
                    smiley: ":/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_093" as AccidentalKey,
                revo: {
                    ascii: "`//|" as Ascii<Flavor.REVO>,
                    smiley: ":`::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`//|" as Ascii<Flavor.EVO>,
                    smiley: ":`::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_094" as AccidentalKey,
                revo: {
                    ascii: "``//|" as Ascii<Flavor.REVO>,
                    smiley: ":``::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``//|" as Ascii<Flavor.EVO>,
                    smiley: ":``::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_095" as AccidentalKey,
                revo: {
                    ascii: ",'//|" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'//|" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_096" as AccidentalKey,
                revo: {
                    ascii: "'//|" as Ascii<Flavor.REVO>,
                    smiley: ":'::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'//|" as Ascii<Flavor.EVO>,
                    smiley: ":'::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_097" as AccidentalKey,
                revo: {
                    ascii: ",,)//|" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)//|" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_098" as AccidentalKey,
                revo: {
                    ascii: ",)//|" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)//|" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_099" as AccidentalKey,
                revo: {
                    ascii: ")//|" as Ascii<Flavor.REVO>,
                    smiley: ":)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")//|" as Ascii<Flavor.EVO>,
                    smiley: ":)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_100" as AccidentalKey,
                revo: {
                    ascii: "`)//|" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)//|" as Ascii<Flavor.EVO>,
                    smiley: ":`::)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_101" as AccidentalKey,
                revo: {
                    ascii: "``)//|" as Ascii<Flavor.REVO>,
                    smiley: ":``::)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)//|" as Ascii<Flavor.EVO>,
                    smiley: ":``::)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_102" as AccidentalKey,
                revo: {
                    ascii: ",,/|)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|)" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_103" as AccidentalKey,
                revo: {
                    ascii: ",/|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_104" as AccidentalKey,
                revo: {
                    ascii: "/|)" as Ascii<Flavor.REVO>,
                    smiley: ":/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|)" as Ascii<Flavor.EVO>,
                    smiley: ":/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_105" as AccidentalKey,
                revo: {
                    ascii: "`/|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_106" as AccidentalKey,
                revo: {
                    ascii: "(|~" as Ascii<Flavor.REVO>,
                    smiley: ":(|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|~" as Ascii<Flavor.EVO>,
                    smiley: ":(|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_107" as AccidentalKey,
                revo: {
                    ascii: ",'/|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'/|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_108" as AccidentalKey,
                revo: {
                    ascii: "'/|)" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|)" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_109" as AccidentalKey,
                revo: {
                    ascii: "`'/|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_110" as AccidentalKey,
                revo: {
                    ascii: "./|\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|\\" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_111" as AccidentalKey,
                revo: {
                    ascii: "`./|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`./|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_112" as AccidentalKey,
                revo: {
                    ascii: ",,/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_113" as AccidentalKey,
                revo: {
                    ascii: ",/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_114" as AccidentalKey,
                revo: {
                    ascii: "/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_115" as AccidentalKey,
                revo: {
                    ascii: "`/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_116" as AccidentalKey,
                revo: {
                    ascii: ",(/|" as Ascii<Flavor.REVO>,
                    smiley: ":,::(/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(/|" as Ascii<Flavor.EVO>,
                    smiley: ":,::(/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_117" as AccidentalKey,
                revo: {
                    ascii: "(/|" as Ascii<Flavor.REVO>,
                    smiley: ":(/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(/|" as Ascii<Flavor.EVO>,
                    smiley: ":(/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_118" as AccidentalKey,
                revo: {
                    ascii: "`(/|" as Ascii<Flavor.REVO>,
                    smiley: ":`::(/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(/|" as Ascii<Flavor.EVO>,
                    smiley: ":`::(/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_119" as AccidentalKey,
                revo: {
                    ascii: "'/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_120" as AccidentalKey,
                revo: {
                    ascii: "`'/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_121" as AccidentalKey,
                revo: {
                    ascii: ",)/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1a_122" as AccidentalKey,
                revo: {
                    ascii: ")/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":)/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":)/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]
        const expectedP1B: AccidentalExpectation[] = [
            {
                // Key: "p1b_122" as AccidentalKey,
                revo: {
                    ascii: "`)/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::)/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_121" as AccidentalKey,
                revo: {
                    ascii: "``)/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::)/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":``::)/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_120" as AccidentalKey,
                revo: {
                    ascii: ",.(|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_119" as AccidentalKey,
                revo: {
                    ascii: ".(|)" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|)" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_118" as AccidentalKey,
                revo: {
                    ascii: ",|\\)" as Ascii<Flavor.REVO>,
                    smiley: ":,::|\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|\\)" as Ascii<Flavor.EVO>,
                    smiley: ":,::|\\):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_117" as AccidentalKey,
                revo: {
                    ascii: "|\\)" as Ascii<Flavor.REVO>,
                    smiley: ":|\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\)" as Ascii<Flavor.EVO>,
                    smiley: ":|\\):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_116" as AccidentalKey,
                revo: {
                    ascii: "`|\\)" as Ascii<Flavor.REVO>,
                    smiley: ":`::|\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\)" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_115" as AccidentalKey,
                revo: {
                    ascii: ",(|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_114" as AccidentalKey,
                revo: {
                    ascii: "(|)" as Ascii<Flavor.REVO>,
                    smiley: ":(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|)" as Ascii<Flavor.EVO>,
                    smiley: ":(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_113" as AccidentalKey,
                revo: {
                    ascii: "`(|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_112" as AccidentalKey,
                revo: {
                    ascii: "``(|)" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|)" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_111" as AccidentalKey,
                revo: {
                    ascii: ",'(|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_110" as AccidentalKey,
                revo: {
                    ascii: "'(|)" as Ascii<Flavor.REVO>,
                    smiley: ":'::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|)" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_109" as AccidentalKey,
                revo: {
                    ascii: ",.(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_108" as AccidentalKey,
                revo: {
                    ascii: ".(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_107" as AccidentalKey,
                revo: {
                    ascii: "`.(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_106" as AccidentalKey,
                revo: {
                    ascii: "|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_105" as AccidentalKey,
                revo: {
                    ascii: ",(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_104" as AccidentalKey,
                revo: {
                    ascii: "(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_103" as AccidentalKey,
                revo: {
                    ascii: "`(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_102" as AccidentalKey,
                revo: {
                    ascii: "``(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_101" as AccidentalKey,
                revo: {
                    ascii: ",,)|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_100" as AccidentalKey,
                revo: {
                    ascii: ",)|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_099" as AccidentalKey,
                revo: {
                    ascii: ")|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_098" as AccidentalKey,
                revo: {
                    ascii: "`)|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1b_097" as AccidentalKey,
                revo: {
                    ascii: "``)|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]
        const expectedP1C: AccidentalExpectation[] = [
            {
                // Key: "p1c_096" as AccidentalKey,
                revo: {
                    ascii: ".)||(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_095" as AccidentalKey,
                revo: {
                    ascii: "`.)||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_094" as AccidentalKey,
                revo: {
                    ascii: ",,)||(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_093" as AccidentalKey,
                revo: {
                    ascii: ",)||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_092" as AccidentalKey,
                revo: {
                    ascii: ")||(" as Ascii<Flavor.REVO>,
                    smiley: ":)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_091" as AccidentalKey,
                revo: {
                    ascii: "`)||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_090" as AccidentalKey,
                revo: {
                    ascii: "``)||(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_089" as AccidentalKey,
                revo: {
                    ascii: ",')||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_088" as AccidentalKey,
                revo: {
                    ascii: "')||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_087" as AccidentalKey,
                revo: {
                    ascii: "`')||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_086" as AccidentalKey,
                revo: {
                    ascii: ")~||" as Ascii<Flavor.REVO>,
                    smiley: ":)~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!/#" as Ascii<Flavor.EVO>,
                    smiley: ":~!/::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_085" as AccidentalKey,
                revo: {
                    ascii: ",~||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_084" as AccidentalKey,
                revo: {
                    ascii: "~||(" as Ascii<Flavor.REVO>,
                    smiley: ":~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_083" as AccidentalKey,
                revo: {
                    ascii: "`~||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_082" as AccidentalKey,
                revo: {
                    ascii: "``~||(" as Ascii<Flavor.REVO>,
                    smiley: ":``::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":``::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_081" as AccidentalKey,
                revo: {
                    ascii: "||~" as Ascii<Flavor.REVO>,
                    smiley: ":||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!~#" as Ascii<Flavor.EVO>,
                    smiley: ":\\!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_080" as AccidentalKey,
                revo: {
                    ascii: ".~~||" as Ascii<Flavor.REVO>,
                    smiley: ":.::~~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~!)#" as Ascii<Flavor.EVO>,
                    smiley: ":.::~!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_079" as AccidentalKey,
                revo: {
                    ascii: "'~||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_078" as AccidentalKey,
                revo: {
                    ascii: "`'~||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_077" as AccidentalKey,
                revo: {
                    ascii: ",~~||" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_076" as AccidentalKey,
                revo: {
                    ascii: "~~||" as Ascii<Flavor.REVO>,
                    smiley: ":~~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!)#" as Ascii<Flavor.EVO>,
                    smiley: ":~!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_075" as AccidentalKey,
                revo: {
                    ascii: "`~~||" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_074" as AccidentalKey,
                revo: {
                    ascii: ".)||~" as Ascii<Flavor.REVO>,
                    smiley: ":.::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_073" as AccidentalKey,
                revo: {
                    ascii: "`.)||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_072" as AccidentalKey,
                revo: {
                    ascii: ",,)||~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_071" as AccidentalKey,
                revo: {
                    ascii: ",)||~" as Ascii<Flavor.REVO>,
                    smiley: ":,::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_070" as AccidentalKey,
                revo: {
                    ascii: ")||~" as Ascii<Flavor.REVO>,
                    smiley: ":)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!#" as Ascii<Flavor.EVO>,
                    smiley: ":(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_069" as AccidentalKey,
                revo: {
                    ascii: "`)||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_068" as AccidentalKey,
                revo: {
                    ascii: ",/||" as Ascii<Flavor.REVO>,
                    smiley: ":,::/||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_067" as AccidentalKey,
                revo: {
                    ascii: "/||" as Ascii<Flavor.REVO>,
                    smiley: ":/||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/#" as Ascii<Flavor.EVO>,
                    smiley: ":!/::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_066" as AccidentalKey,
                revo: {
                    ascii: "')||~" as Ascii<Flavor.REVO>,
                    smiley: ":'::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_065" as AccidentalKey,
                revo: {
                    ascii: ")/||" as Ascii<Flavor.REVO>,
                    smiley: ":)/||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!)#" as Ascii<Flavor.EVO>,
                    smiley: ":)!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_064" as AccidentalKey,
                revo: {
                    ascii: "`)/||" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_063" as AccidentalKey,
                revo: {
                    ascii: ",.||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_062" as AccidentalKey,
                revo: {
                    ascii: ".||)" as Ascii<Flavor.REVO>,
                    smiley: ":.::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!)#" as Ascii<Flavor.EVO>,
                    smiley: ":.::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_061" as AccidentalKey,
                revo: {
                    ascii: "`.||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_060" as AccidentalKey,
                revo: {
                    ascii: ",,||)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_059" as AccidentalKey,
                revo: {
                    ascii: ",||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_058" as AccidentalKey,
                revo: {
                    ascii: "||)" as Ascii<Flavor.REVO>,
                    smiley: ":||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!)#" as Ascii<Flavor.EVO>,
                    smiley: ":!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_057" as AccidentalKey,
                revo: {
                    ascii: "`||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_056" as AccidentalKey,
                revo: {
                    ascii: "``||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!)#" as Ascii<Flavor.EVO>,
                    smiley: ":``::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_055" as AccidentalKey,
                revo: {
                    ascii: ",'||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_054" as AccidentalKey,
                revo: {
                    ascii: "'||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'!)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_053" as AccidentalKey,
                revo: {
                    ascii: "`'||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_052" as AccidentalKey,
                revo: {
                    ascii: ")||)" as Ascii<Flavor.REVO>,
                    smiley: ":)||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_051" as AccidentalKey,
                revo: {
                    ascii: "`)||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::)||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_050" as AccidentalKey,
                revo: {
                    ascii: "``)||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::)||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_049" as AccidentalKey,
                revo: {
                    ascii: ",.||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_048" as AccidentalKey,
                revo: {
                    ascii: ".||\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_047" as AccidentalKey,
                revo: {
                    ascii: "')||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::)||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::)\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_046" as AccidentalKey,
                revo: {
                    ascii: ",,||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_045" as AccidentalKey,
                revo: {
                    ascii: ",||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_044" as AccidentalKey,
                revo: {
                    ascii: "||\\" as Ascii<Flavor.REVO>,
                    smiley: ":||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_043" as AccidentalKey,
                revo: {
                    ascii: "`||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_042" as AccidentalKey,
                revo: {
                    ascii: "``||\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_041" as AccidentalKey,
                revo: {
                    ascii: "(||" as Ascii<Flavor.REVO>,
                    smiley: ":(||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!~#" as Ascii<Flavor.EVO>,
                    smiley: ":)!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_040" as AccidentalKey,
                revo: {
                    ascii: "'||\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_039" as AccidentalKey,
                revo: {
                    ascii: "`'||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_038" as AccidentalKey,
                revo: {
                    ascii: ",,~||)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~~!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_037" as AccidentalKey,
                revo: {
                    ascii: ",~||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~~!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_036" as AccidentalKey,
                revo: {
                    ascii: "~||)" as Ascii<Flavor.REVO>,
                    smiley: ":~||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~!#" as Ascii<Flavor.EVO>,
                    smiley: ":~~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_035" as AccidentalKey,
                revo: {
                    ascii: ",/||~" as Ascii<Flavor.REVO>,
                    smiley: ":,::/||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!~#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_034" as AccidentalKey,
                revo: {
                    ascii: "/||~" as Ascii<Flavor.REVO>,
                    smiley: ":/||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!~#" as Ascii<Flavor.EVO>,
                    smiley: ":!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_033" as AccidentalKey,
                revo: {
                    ascii: "`/||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::/||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!~#" as Ascii<Flavor.EVO>,
                    smiley: ":`::!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_032" as AccidentalKey,
                revo: {
                    ascii: "``/||~" as Ascii<Flavor.REVO>,
                    smiley: ":``::/||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!~#" as Ascii<Flavor.EVO>,
                    smiley: ":``::!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_031" as AccidentalKey,
                revo: {
                    ascii: ",(||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_030" as AccidentalKey,
                revo: {
                    ascii: "(||(" as Ascii<Flavor.REVO>,
                    smiley: ":(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_029" as AccidentalKey,
                revo: {
                    ascii: "`(||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_028" as AccidentalKey,
                revo: {
                    ascii: "``(||(" as Ascii<Flavor.REVO>,
                    smiley: ":``::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":``::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_027" as AccidentalKey,
                revo: {
                    ascii: ",'(||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_026" as AccidentalKey,
                revo: {
                    ascii: "'(||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_025" as AccidentalKey,
                revo: {
                    ascii: "~||\\" as Ascii<Flavor.REVO>,
                    smiley: ":~||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~!#" as Ascii<Flavor.EVO>,
                    smiley: ":)~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_024" as AccidentalKey,
                revo: {
                    ascii: ".//||" as Ascii<Flavor.REVO>,
                    smiley: ":.::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":.::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_023" as AccidentalKey,
                revo: {
                    ascii: "`.//||" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_022" as AccidentalKey,
                revo: {
                    ascii: ",,//||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_021" as AccidentalKey,
                revo: {
                    ascii: ",//||" as Ascii<Flavor.REVO>,
                    smiley: ":,::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_020" as AccidentalKey,
                revo: {
                    ascii: "//||" as Ascii<Flavor.REVO>,
                    smiley: ":/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!(#" as Ascii<Flavor.EVO>,
                    smiley: ":)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_019" as AccidentalKey,
                revo: {
                    ascii: "`//||" as Ascii<Flavor.REVO>,
                    smiley: ":`::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_018" as AccidentalKey,
                revo: {
                    ascii: ")//||" as Ascii<Flavor.REVO>,
                    smiley: ":)/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!#" as Ascii<Flavor.EVO>,
                    smiley: ":~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_017" as AccidentalKey,
                revo: {
                    ascii: "`)//||" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_016" as AccidentalKey,
                revo: {
                    ascii: "./||)" as Ascii<Flavor.REVO>,
                    smiley: ":.::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!(#" as Ascii<Flavor.EVO>,
                    smiley: ":.::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_015" as AccidentalKey,
                revo: {
                    ascii: "`./||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_014" as AccidentalKey,
                revo: {
                    ascii: "')//||" as Ascii<Flavor.REVO>,
                    smiley: ":'::)/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_013" as AccidentalKey,
                revo: {
                    ascii: ",/||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_012" as AccidentalKey,
                revo: {
                    ascii: "/||)" as Ascii<Flavor.REVO>,
                    smiley: ":/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!(#" as Ascii<Flavor.EVO>,
                    smiley: ":!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_011" as AccidentalKey,
                revo: {
                    ascii: "`/||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_010" as AccidentalKey,
                revo: {
                    ascii: "``/||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!(#" as Ascii<Flavor.EVO>,
                    smiley: ":``::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_009" as AccidentalKey,
                revo: {
                    ascii: ",,(||~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_008" as AccidentalKey,
                revo: {
                    ascii: ",(||~" as Ascii<Flavor.REVO>,
                    smiley: ":,::(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_007" as AccidentalKey,
                revo: {
                    ascii: "(||~" as Ascii<Flavor.REVO>,
                    smiley: ":(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!#" as Ascii<Flavor.EVO>,
                    smiley: ":)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_006" as AccidentalKey,
                revo: {
                    ascii: "`(||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_005" as AccidentalKey,
                revo: {
                    ascii: ",./||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_004" as AccidentalKey,
                revo: {
                    ascii: "./||\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!#" as Ascii<Flavor.EVO>,
                    smiley: ":.::!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_003" as AccidentalKey,
                revo: {
                    ascii: "'(||~" as Ascii<Flavor.REVO>,
                    smiley: ":'::(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_002" as AccidentalKey,
                revo: {
                    ascii: ",,/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_001" as AccidentalKey,
                revo: {
                    ascii: ",/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p1c_000" as AccidentalKey,
                revo: {
                    ascii: "/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "#" as Ascii<Flavor.EVO>,
                    smiley: ":#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]
        const expectedP2A: AccidentalExpectation[] = [
            {
                // Key: "p2a_000" as AccidentalKey,
                revo: {
                    ascii: "/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "#" as Ascii<Flavor.EVO>,
                    smiley: ":#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_001" as AccidentalKey,
                revo: {
                    ascii: "`/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_002" as AccidentalKey,
                revo: {
                    ascii: "``/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_003" as AccidentalKey,
                revo: {
                    ascii: ".)|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_004" as AccidentalKey,
                revo: {
                    ascii: "'/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|#" as Ascii<Flavor.EVO>,
                    smiley: ":'::|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_005" as AccidentalKey,
                revo: {
                    ascii: "`'/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_006" as AccidentalKey,
                revo: {
                    ascii: ",)|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_007" as AccidentalKey,
                revo: {
                    ascii: ")|||" as Ascii<Flavor.REVO>,
                    smiley: ":)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|#" as Ascii<Flavor.EVO>,
                    smiley: ":)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_008" as AccidentalKey,
                revo: {
                    ascii: "`)|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_009" as AccidentalKey,
                revo: {
                    ascii: "``)|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_010" as AccidentalKey,
                revo: {
                    ascii: ",,|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_011" as AccidentalKey,
                revo: {
                    ascii: ",|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_012" as AccidentalKey,
                revo: {
                    ascii: "|||(" as Ascii<Flavor.REVO>,
                    smiley: ":|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|(#" as Ascii<Flavor.EVO>,
                    smiley: ":|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_013" as AccidentalKey,
                revo: {
                    ascii: "`|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_014" as AccidentalKey,
                revo: {
                    ascii: ".~|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_015" as AccidentalKey,
                revo: {
                    ascii: ",'|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_016" as AccidentalKey,
                revo: {
                    ascii: "'|||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|(#" as Ascii<Flavor.EVO>,
                    smiley: ":'::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_017" as AccidentalKey,
                revo: {
                    ascii: ",~|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_018" as AccidentalKey,
                revo: {
                    ascii: "~|||" as Ascii<Flavor.REVO>,
                    smiley: ":~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|#" as Ascii<Flavor.EVO>,
                    smiley: ":~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_019" as AccidentalKey,
                revo: {
                    ascii: ",)|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_020" as AccidentalKey,
                revo: {
                    ascii: ")|||(" as Ascii<Flavor.REVO>,
                    smiley: ":)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|(#" as Ascii<Flavor.EVO>,
                    smiley: ":)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_021" as AccidentalKey,
                revo: {
                    ascii: "`)|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_022" as AccidentalKey,
                revo: {
                    ascii: "``)|||(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|(#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_023" as AccidentalKey,
                revo: {
                    ascii: ",')|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",')|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_024" as AccidentalKey,
                revo: {
                    ascii: "')|||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')|(#" as Ascii<Flavor.EVO>,
                    smiley: ":'::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_025" as AccidentalKey,
                revo: {
                    ascii: ")~|||" as Ascii<Flavor.REVO>,
                    smiley: ":)~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~|#" as Ascii<Flavor.EVO>,
                    smiley: ":)~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_026" as AccidentalKey,
                revo: {
                    ascii: ".~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":.::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_027" as AccidentalKey,
                revo: {
                    ascii: "`.~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_028" as AccidentalKey,
                revo: {
                    ascii: ",,~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_029" as AccidentalKey,
                revo: {
                    ascii: ",~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_030" as AccidentalKey,
                revo: {
                    ascii: "~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_031" as AccidentalKey,
                revo: {
                    ascii: "`~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_032" as AccidentalKey,
                revo: {
                    ascii: ",,|||~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|~#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_033" as AccidentalKey,
                revo: {
                    ascii: ",|||~" as Ascii<Flavor.REVO>,
                    smiley: ":,::|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|~#" as Ascii<Flavor.EVO>,
                    smiley: ":,::|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_034" as AccidentalKey,
                revo: {
                    ascii: "|||~" as Ascii<Flavor.REVO>,
                    smiley: ":|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|~#" as Ascii<Flavor.EVO>,
                    smiley: ":|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_035" as AccidentalKey,
                revo: {
                    ascii: "`|||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|~#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_036" as AccidentalKey,
                revo: {
                    ascii: "~~|||" as Ascii<Flavor.REVO>,
                    smiley: ":~~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~|#" as Ascii<Flavor.EVO>,
                    smiley: ":~~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_037" as AccidentalKey,
                revo: {
                    ascii: "`~~|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~~|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_038" as AccidentalKey,
                revo: {
                    ascii: "``~~|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::~~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~~|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::~~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_039" as AccidentalKey,
                revo: {
                    ascii: ",./|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",./|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_040" as AccidentalKey,
                revo: {
                    ascii: "./|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_041" as AccidentalKey,
                revo: {
                    ascii: ")|||~" as Ascii<Flavor.REVO>,
                    smiley: ":)|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|~#" as Ascii<Flavor.EVO>,
                    smiley: ":)|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_042" as AccidentalKey,
                revo: {
                    ascii: ",,/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_043" as AccidentalKey,
                revo: {
                    ascii: ",/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_044" as AccidentalKey,
                revo: {
                    ascii: "/|||" as Ascii<Flavor.REVO>,
                    smiley: ":/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|#" as Ascii<Flavor.EVO>,
                    smiley: ":/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_045" as AccidentalKey,
                revo: {
                    ascii: "`/|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_046" as AccidentalKey,
                revo: {
                    ascii: "``/|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``/|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_047" as AccidentalKey,
                revo: {
                    ascii: ".)/|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::)/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)/|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::)/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_048" as AccidentalKey,
                revo: {
                    ascii: "'/|||" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|#" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_049" as AccidentalKey,
                revo: {
                    ascii: "`'/|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_050" as AccidentalKey,
                revo: {
                    ascii: ",,)/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_051" as AccidentalKey,
                revo: {
                    ascii: ",)/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_052" as AccidentalKey,
                revo: {
                    ascii: ")/|||" as Ascii<Flavor.REVO>,
                    smiley: ":)/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|#" as Ascii<Flavor.EVO>,
                    smiley: ":)/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_053" as AccidentalKey,
                revo: {
                    ascii: ",.|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_054" as AccidentalKey,
                revo: {
                    ascii: ".|||)" as Ascii<Flavor.REVO>,
                    smiley: ":.::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".|)#" as Ascii<Flavor.EVO>,
                    smiley: ":.::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_055" as AccidentalKey,
                revo: {
                    ascii: "`.|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_056" as AccidentalKey,
                revo: {
                    ascii: ",,|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_057" as AccidentalKey,
                revo: {
                    ascii: ",|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_058" as AccidentalKey,
                revo: {
                    ascii: "|||)" as Ascii<Flavor.REVO>,
                    smiley: ":|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|)#" as Ascii<Flavor.EVO>,
                    smiley: ":|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_059" as AccidentalKey,
                revo: {
                    ascii: "`|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_060" as AccidentalKey,
                revo: {
                    ascii: "``|||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|)#" as Ascii<Flavor.EVO>,
                    smiley: ":``::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_061" as AccidentalKey,
                revo: {
                    ascii: ",'|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_062" as AccidentalKey,
                revo: {
                    ascii: "'|||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_063" as AccidentalKey,
                revo: {
                    ascii: "`'|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_064" as AccidentalKey,
                revo: {
                    ascii: ",)|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_065" as AccidentalKey,
                revo: {
                    ascii: ")|||)" as Ascii<Flavor.REVO>,
                    smiley: ":)|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|)#" as Ascii<Flavor.EVO>,
                    smiley: ":)|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_066" as AccidentalKey,
                revo: {
                    ascii: ".(|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_067" as AccidentalKey,
                revo: {
                    ascii: "|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_068" as AccidentalKey,
                revo: {
                    ascii: "`|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_069" as AccidentalKey,
                revo: {
                    ascii: ",(|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_070" as AccidentalKey,
                revo: {
                    ascii: "(|||" as Ascii<Flavor.REVO>,
                    smiley: ":(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|#" as Ascii<Flavor.EVO>,
                    smiley: ":(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_071" as AccidentalKey,
                revo: {
                    ascii: "`(|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_072" as AccidentalKey,
                revo: {
                    ascii: "``(|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_073" as AccidentalKey,
                revo: {
                    ascii: ",'(|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_074" as AccidentalKey,
                revo: {
                    ascii: "'(|||" as Ascii<Flavor.REVO>,
                    smiley: ":'::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|#" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_075" as AccidentalKey,
                revo: {
                    ascii: ",~|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_076" as AccidentalKey,
                revo: {
                    ascii: "~|||)" as Ascii<Flavor.REVO>,
                    smiley: ":~|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|)#" as Ascii<Flavor.EVO>,
                    smiley: ":~|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_077" as AccidentalKey,
                revo: {
                    ascii: "`~|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_078" as AccidentalKey,
                revo: {
                    ascii: ",.(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_079" as AccidentalKey,
                revo: {
                    ascii: ".(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_080" as AccidentalKey,
                revo: {
                    ascii: "'~|||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::~|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~|)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::~|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_081" as AccidentalKey,
                revo: {
                    ascii: "/|||~" as Ascii<Flavor.REVO>,
                    smiley: ":/|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|~#" as Ascii<Flavor.EVO>,
                    smiley: ":/|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_082" as AccidentalKey,
                revo: {
                    ascii: ",,(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_083" as AccidentalKey,
                revo: {
                    ascii: ",(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_084" as AccidentalKey,
                revo: {
                    ascii: "(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_085" as AccidentalKey,
                revo: {
                    ascii: "`(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_086" as AccidentalKey,
                revo: {
                    ascii: "~|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":~|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":~|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_087" as AccidentalKey,
                revo: {
                    ascii: ",.//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_088" as AccidentalKey,
                revo: {
                    ascii: ".//|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".//|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_089" as AccidentalKey,
                revo: {
                    ascii: "`.//|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.//|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_090" as AccidentalKey,
                revo: {
                    ascii: ",,//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_091" as AccidentalKey,
                revo: {
                    ascii: ",//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_092" as AccidentalKey,
                revo: {
                    ascii: "//|||" as Ascii<Flavor.REVO>,
                    smiley: ":/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "//|#" as Ascii<Flavor.EVO>,
                    smiley: ":/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_093" as AccidentalKey,
                revo: {
                    ascii: "`//|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`//|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_094" as AccidentalKey,
                revo: {
                    ascii: "``//|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``//|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_095" as AccidentalKey,
                revo: {
                    ascii: ",'//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_096" as AccidentalKey,
                revo: {
                    ascii: "'//|||" as Ascii<Flavor.REVO>,
                    smiley: ":'::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'//|#" as Ascii<Flavor.EVO>,
                    smiley: ":'::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_097" as AccidentalKey,
                revo: {
                    ascii: ",,)//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_098" as AccidentalKey,
                revo: {
                    ascii: ",)//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_099" as AccidentalKey,
                revo: {
                    ascii: ")//|||" as Ascii<Flavor.REVO>,
                    smiley: ":)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")//|#" as Ascii<Flavor.EVO>,
                    smiley: ":)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_100" as AccidentalKey,
                revo: {
                    ascii: "`)//|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)//|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_101" as AccidentalKey,
                revo: {
                    ascii: "``)//|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)//|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_102" as AccidentalKey,
                revo: {
                    ascii: ",,/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_103" as AccidentalKey,
                revo: {
                    ascii: ",/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_104" as AccidentalKey,
                revo: {
                    ascii: "/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_105" as AccidentalKey,
                revo: {
                    ascii: "`/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_106" as AccidentalKey,
                revo: {
                    ascii: "(|||~" as Ascii<Flavor.REVO>,
                    smiley: ":(|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|~#" as Ascii<Flavor.EVO>,
                    smiley: ":(|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_107" as AccidentalKey,
                revo: {
                    ascii: ",'/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_108" as AccidentalKey,
                revo: {
                    ascii: "'/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_109" as AccidentalKey,
                revo: {
                    ascii: "`'/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_110" as AccidentalKey,
                revo: {
                    ascii: "./|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_111" as AccidentalKey,
                revo: {
                    ascii: "`./|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`./|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_112" as AccidentalKey,
                revo: {
                    ascii: ",,/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_113" as AccidentalKey,
                revo: {
                    ascii: ",/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_114" as AccidentalKey,
                revo: {
                    ascii: "/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_115" as AccidentalKey,
                revo: {
                    ascii: "`/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_116" as AccidentalKey,
                revo: {
                    ascii: ",(/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::(/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_117" as AccidentalKey,
                revo: {
                    ascii: "(/|||" as Ascii<Flavor.REVO>,
                    smiley: ":(/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(/|#" as Ascii<Flavor.EVO>,
                    smiley: ":(/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_118" as AccidentalKey,
                revo: {
                    ascii: "`(/|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::(/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(/|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_119" as AccidentalKey,
                revo: {
                    ascii: "'/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_120" as AccidentalKey,
                revo: {
                    ascii: "`'/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_121" as AccidentalKey,
                revo: {
                    ascii: ",)/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2a_122" as AccidentalKey,
                revo: {
                    ascii: ")/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":)/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":)/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]
        const expectedP2B: AccidentalExpectation[] = [
            {
                // Key: "p2b_122" as AccidentalKey,
                revo: {
                    ascii: "`)/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_121" as AccidentalKey,
                revo: {
                    ascii: "``)/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::)/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_120" as AccidentalKey,
                revo: {
                    ascii: ",.(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_119" as AccidentalKey,
                revo: {
                    ascii: ".(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_118" as AccidentalKey,
                revo: {
                    ascii: ",|||\\)" as Ascii<Flavor.REVO>,
                    smiley: ":,::|||\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|\\)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::|\\)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_117" as AccidentalKey,
                revo: {
                    ascii: "|||\\)" as Ascii<Flavor.REVO>,
                    smiley: ":|||\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\)#" as Ascii<Flavor.EVO>,
                    smiley: ":|\\)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_116" as AccidentalKey,
                revo: {
                    ascii: "`|||\\)" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_115" as AccidentalKey,
                revo: {
                    ascii: ",(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_114" as AccidentalKey,
                revo: {
                    ascii: "(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_113" as AccidentalKey,
                revo: {
                    ascii: "`(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_112" as AccidentalKey,
                revo: {
                    ascii: "``(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_111" as AccidentalKey,
                revo: {
                    ascii: ",'(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_110" as AccidentalKey,
                revo: {
                    ascii: "'(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_109" as AccidentalKey,
                revo: {
                    ascii: ",.(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_108" as AccidentalKey,
                revo: {
                    ascii: ".(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_107" as AccidentalKey,
                revo: {
                    ascii: "`.(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_106" as AccidentalKey,
                revo: {
                    ascii: "|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_105" as AccidentalKey,
                revo: {
                    ascii: ",(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_104" as AccidentalKey,
                revo: {
                    ascii: "(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_103" as AccidentalKey,
                revo: {
                    ascii: "`(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_102" as AccidentalKey,
                revo: {
                    ascii: "``(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_101" as AccidentalKey,
                revo: {
                    ascii: ",,)|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_100" as AccidentalKey,
                revo: {
                    ascii: ",)|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_099" as AccidentalKey,
                revo: {
                    ascii: ")|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_098" as AccidentalKey,
                revo: {
                    ascii: "`)|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2b_097" as AccidentalKey,
                revo: {
                    ascii: "``)|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]
        const expectedP2C: AccidentalExpectation[] = [
            {
                // Key: "p2c_096" as AccidentalKey,
                revo: {
                    ascii: ".)X(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_095" as AccidentalKey,
                revo: {
                    ascii: "`.)X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_094" as AccidentalKey,
                revo: {
                    ascii: ",,)X(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_093" as AccidentalKey,
                revo: {
                    ascii: ",)X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_092" as AccidentalKey,
                revo: {
                    ascii: ")X(" as Ascii<Flavor.REVO>,
                    smiley: ":)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_091" as AccidentalKey,
                revo: {
                    ascii: "`)X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_090" as AccidentalKey,
                revo: {
                    ascii: "``)X(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_089" as AccidentalKey,
                revo: {
                    ascii: ",')X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_088" as AccidentalKey,
                revo: {
                    ascii: "')X(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_087" as AccidentalKey,
                revo: {
                    ascii: "`')X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_086" as AccidentalKey,
                revo: {
                    ascii: ")~X" as Ascii<Flavor.REVO>,
                    smiley: ":)~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!/x" as Ascii<Flavor.EVO>,
                    smiley: ":~!/::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_085" as AccidentalKey,
                revo: {
                    ascii: ",~X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_084" as AccidentalKey,
                revo: {
                    ascii: "~X(" as Ascii<Flavor.REVO>,
                    smiley: ":~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_083" as AccidentalKey,
                revo: {
                    ascii: "`~X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_082" as AccidentalKey,
                revo: {
                    ascii: "``~X(" as Ascii<Flavor.REVO>,
                    smiley: ":``::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":``::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_081" as AccidentalKey,
                revo: {
                    ascii: "X~" as Ascii<Flavor.REVO>,
                    smiley: ":X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!~x" as Ascii<Flavor.EVO>,
                    smiley: ":\\!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_080" as AccidentalKey,
                revo: {
                    ascii: ".~~X" as Ascii<Flavor.REVO>,
                    smiley: ":.::~~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~!)x" as Ascii<Flavor.EVO>,
                    smiley: ":.::~!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_079" as AccidentalKey,
                revo: {
                    ascii: "'~X(" as Ascii<Flavor.REVO>,
                    smiley: ":'::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_078" as AccidentalKey,
                revo: {
                    ascii: "`'~X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_077" as AccidentalKey,
                revo: {
                    ascii: ",~~X" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_076" as AccidentalKey,
                revo: {
                    ascii: "~~X" as Ascii<Flavor.REVO>,
                    smiley: ":~~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!)x" as Ascii<Flavor.EVO>,
                    smiley: ":~!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_075" as AccidentalKey,
                revo: {
                    ascii: "`~~X" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_074" as AccidentalKey,
                revo: {
                    ascii: ".)X~" as Ascii<Flavor.REVO>,
                    smiley: ":.::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!x" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_073" as AccidentalKey,
                revo: {
                    ascii: "`.)X~" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_072" as AccidentalKey,
                revo: {
                    ascii: ",,)X~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_071" as AccidentalKey,
                revo: {
                    ascii: ",)X~" as Ascii<Flavor.REVO>,
                    smiley: ":,::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_070" as AccidentalKey,
                revo: {
                    ascii: ")X~" as Ascii<Flavor.REVO>,
                    smiley: ":)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!x" as Ascii<Flavor.EVO>,
                    smiley: ":(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_069" as AccidentalKey,
                revo: {
                    ascii: "`)X~" as Ascii<Flavor.REVO>,
                    smiley: ":`::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_068" as AccidentalKey,
                revo: {
                    ascii: ",/X" as Ascii<Flavor.REVO>,
                    smiley: ":,::/X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_067" as AccidentalKey,
                revo: {
                    ascii: "/X" as Ascii<Flavor.REVO>,
                    smiley: ":/X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/x" as Ascii<Flavor.EVO>,
                    smiley: ":!/::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_066" as AccidentalKey,
                revo: {
                    ascii: "')X~" as Ascii<Flavor.REVO>,
                    smiley: ":'::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_065" as AccidentalKey,
                revo: {
                    ascii: ")/X" as Ascii<Flavor.REVO>,
                    smiley: ":)/X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!)x" as Ascii<Flavor.EVO>,
                    smiley: ":)!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_064" as AccidentalKey,
                revo: {
                    ascii: "`)/X" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_063" as AccidentalKey,
                revo: {
                    ascii: ",.X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_062" as AccidentalKey,
                revo: {
                    ascii: ".X)" as Ascii<Flavor.REVO>,
                    smiley: ":.::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!)x" as Ascii<Flavor.EVO>,
                    smiley: ":.::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_061" as AccidentalKey,
                revo: {
                    ascii: "`.X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_060" as AccidentalKey,
                revo: {
                    ascii: ",,X)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_059" as AccidentalKey,
                revo: {
                    ascii: ",X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_058" as AccidentalKey,
                revo: {
                    ascii: "X)" as Ascii<Flavor.REVO>,
                    smiley: ":X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!)x" as Ascii<Flavor.EVO>,
                    smiley: ":!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_057" as AccidentalKey,
                revo: {
                    ascii: "`X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_056" as AccidentalKey,
                revo: {
                    ascii: "``X)" as Ascii<Flavor.REVO>,
                    smiley: ":``::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!)x" as Ascii<Flavor.EVO>,
                    smiley: ":``::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_055" as AccidentalKey,
                revo: {
                    ascii: ",'X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_054" as AccidentalKey,
                revo: {
                    ascii: "'X)" as Ascii<Flavor.REVO>,
                    smiley: ":'::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'!)x" as Ascii<Flavor.EVO>,
                    smiley: ":'::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_053" as AccidentalKey,
                revo: {
                    ascii: "`'X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_052" as AccidentalKey,
                revo: {
                    ascii: ")X)" as Ascii<Flavor.REVO>,
                    smiley: ":)X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_051" as AccidentalKey,
                revo: {
                    ascii: "`)X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::)X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_050" as AccidentalKey,
                revo: {
                    ascii: "``)X)" as Ascii<Flavor.REVO>,
                    smiley: ":``::)X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_049" as AccidentalKey,
                revo: {
                    ascii: ",.X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_048" as AccidentalKey,
                revo: {
                    ascii: ".X\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_047" as AccidentalKey,
                revo: {
                    ascii: "')X)" as Ascii<Flavor.REVO>,
                    smiley: ":'::)X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::)\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_046" as AccidentalKey,
                revo: {
                    ascii: ",,X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_045" as AccidentalKey,
                revo: {
                    ascii: ",X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_044" as AccidentalKey,
                revo: {
                    ascii: "X\\" as Ascii<Flavor.REVO>,
                    smiley: ":X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_043" as AccidentalKey,
                revo: {
                    ascii: "`X\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_042" as AccidentalKey,
                revo: {
                    ascii: "``X\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_041" as AccidentalKey,
                revo: {
                    ascii: "(X" as Ascii<Flavor.REVO>,
                    smiley: ":(X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!~x" as Ascii<Flavor.EVO>,
                    smiley: ":)!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_040" as AccidentalKey,
                revo: {
                    ascii: "'X\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_039" as AccidentalKey,
                revo: {
                    ascii: "`'X\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_038" as AccidentalKey,
                revo: {
                    ascii: ",,~X)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~~!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_037" as AccidentalKey,
                revo: {
                    ascii: ",~X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~~!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::~~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_036" as AccidentalKey,
                revo: {
                    ascii: "~X)" as Ascii<Flavor.REVO>,
                    smiley: ":~X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~!x" as Ascii<Flavor.EVO>,
                    smiley: ":~~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_035" as AccidentalKey,
                revo: {
                    ascii: ",/X~" as Ascii<Flavor.REVO>,
                    smiley: ":,::/X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!~x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_034" as AccidentalKey,
                revo: {
                    ascii: "/X~" as Ascii<Flavor.REVO>,
                    smiley: ":/X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!~x" as Ascii<Flavor.EVO>,
                    smiley: ":!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_033" as AccidentalKey,
                revo: {
                    ascii: "`/X~" as Ascii<Flavor.REVO>,
                    smiley: ":`::/X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!~x" as Ascii<Flavor.EVO>,
                    smiley: ":`::!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_032" as AccidentalKey,
                revo: {
                    ascii: "``/X~" as Ascii<Flavor.REVO>,
                    smiley: ":``::/X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!~x" as Ascii<Flavor.EVO>,
                    smiley: ":``::!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_031" as AccidentalKey,
                revo: {
                    ascii: ",(X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_030" as AccidentalKey,
                revo: {
                    ascii: "(X(" as Ascii<Flavor.REVO>,
                    smiley: ":(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_029" as AccidentalKey,
                revo: {
                    ascii: "`(X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_028" as AccidentalKey,
                revo: {
                    ascii: "``(X(" as Ascii<Flavor.REVO>,
                    smiley: ":``::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":``::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_027" as AccidentalKey,
                revo: {
                    ascii: ",'(X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_026" as AccidentalKey,
                revo: {
                    ascii: "'(X(" as Ascii<Flavor.REVO>,
                    smiley: ":'::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_025" as AccidentalKey,
                revo: {
                    ascii: "~X\\" as Ascii<Flavor.REVO>,
                    smiley: ":~X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~!x" as Ascii<Flavor.EVO>,
                    smiley: ":)~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_024" as AccidentalKey,
                revo: {
                    ascii: ".//X" as Ascii<Flavor.REVO>,
                    smiley: ":.::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":.::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_023" as AccidentalKey,
                revo: {
                    ascii: "`.//X" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_022" as AccidentalKey,
                revo: {
                    ascii: ",,//X" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_021" as AccidentalKey,
                revo: {
                    ascii: ",//X" as Ascii<Flavor.REVO>,
                    smiley: ":,::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_020" as AccidentalKey,
                revo: {
                    ascii: "//X" as Ascii<Flavor.REVO>,
                    smiley: ":/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!(x" as Ascii<Flavor.EVO>,
                    smiley: ":)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_019" as AccidentalKey,
                revo: {
                    ascii: "`//X" as Ascii<Flavor.REVO>,
                    smiley: ":`::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_018" as AccidentalKey,
                revo: {
                    ascii: ")//X" as Ascii<Flavor.REVO>,
                    smiley: ":)/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!x" as Ascii<Flavor.EVO>,
                    smiley: ":~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_017" as AccidentalKey,
                revo: {
                    ascii: "`)//X" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_016" as AccidentalKey,
                revo: {
                    ascii: "./X)" as Ascii<Flavor.REVO>,
                    smiley: ":.::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!(x" as Ascii<Flavor.EVO>,
                    smiley: ":.::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_015" as AccidentalKey,
                revo: {
                    ascii: "`./X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_014" as AccidentalKey,
                revo: {
                    ascii: "')//X" as Ascii<Flavor.REVO>,
                    smiley: ":'::)/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_013" as AccidentalKey,
                revo: {
                    ascii: ",/X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_012" as AccidentalKey,
                revo: {
                    ascii: "/X)" as Ascii<Flavor.REVO>,
                    smiley: ":/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!(x" as Ascii<Flavor.EVO>,
                    smiley: ":!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_011" as AccidentalKey,
                revo: {
                    ascii: "`/X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_010" as AccidentalKey,
                revo: {
                    ascii: "``/X)" as Ascii<Flavor.REVO>,
                    smiley: ":``::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!(x" as Ascii<Flavor.EVO>,
                    smiley: ":``::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_009" as AccidentalKey,
                revo: {
                    ascii: ",,(X~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_008" as AccidentalKey,
                revo: {
                    ascii: ",(X~" as Ascii<Flavor.REVO>,
                    smiley: ":,::(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_007" as AccidentalKey,
                revo: {
                    ascii: "(X~" as Ascii<Flavor.REVO>,
                    smiley: ":(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!x" as Ascii<Flavor.EVO>,
                    smiley: ":)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_006" as AccidentalKey,
                revo: {
                    ascii: "`(X~" as Ascii<Flavor.REVO>,
                    smiley: ":`::(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_005" as AccidentalKey,
                revo: {
                    ascii: ",./X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_004" as AccidentalKey,
                revo: {
                    ascii: "./X\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!x" as Ascii<Flavor.EVO>,
                    smiley: ":.::!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_003" as AccidentalKey,
                revo: {
                    ascii: "'(X~" as Ascii<Flavor.REVO>,
                    smiley: ":'::(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_002" as AccidentalKey,
                revo: {
                    ascii: ",,/X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_001" as AccidentalKey,
                revo: {
                    ascii: ",/X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                // Key: "p2c_000" as AccidentalKey,
                revo: {
                    ascii: "/X\\" as Ascii<Flavor.REVO>,
                    smiley: ":/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "x" as Ascii<Flavor.EVO>,
                    smiley: ":x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]

        const expected = [
            // ...expectedN2C,
            // ...expectedN2B,
            // ...expectedN2A,
            // ...expectedN1C,
            // ...expectedN1B,
            // ...expectedN1A,

            ...expectedP1A,
            ...expectedP1B,
            ...expectedP1C,
            ...expectedP2A,
            ...expectedP2B,
            ...expectedP2C,
        ] as AccidentalExpectation[]
        expect(accidentalExpectations).toEqual(expected)
    })
})
