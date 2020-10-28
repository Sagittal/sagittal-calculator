import {NullSagittal, Sagittal} from "../../../../../src/sagittal/accidental"
import {ArmId, getArm, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeApotomeComplement, getCore, Shafts} from "../../../../../src/sagittal/accidental/sagittal"

describe("computeApotomeComplement", (): void => {
    it("returns the apotome complement of the given symbol", (): void => {
        const sagittal: Sagittal = {...getCore(HeadId.LEFT_BARB)}                                       //  /|

        const actual = computeApotomeComplement(sagittal)

        const expected = {...getCore(HeadId.RIGHT_BARB, Shafts.DOUBLE)}                                 // ||\\
        expect(actual).toEqual(expected)
    })

    it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
        const sagittal: Sagittal = {...getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE)}         // )~||

        const actual = computeApotomeComplement(sagittal)

        const expected = {...getCore(HeadId.BOATHOOK_AND_BARB)}                                         // ~|\\
        expect(actual).toEqual(expected)
    })

    it("reorients the arm, so that they will cancel each other out", (): void => {
        const sagittal: Sagittal = {                                                                    // ,'|(
            arm: getArm(ArmId.WING_AGAINST_TICK),
            ...getCore(HeadId.RIGHT_SCROLL),
        }

        const actual = computeApotomeComplement(sagittal)

        const expected = {                                                                              // `./||)
            arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
            ...getCore(HeadId.BARB_AND_ARC, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("can reorient arm the other way", (): void => {
        const sagittal: Sagittal = {                                                                    // `./||)
            arm: getArm(ArmId.WING_AGAINST_TICK, { against: true }),
            ...getCore(HeadId.BARB_AND_ARC, Shafts.DOUBLE),
        }

        const actual = computeApotomeComplement(sagittal)

        const expected = {                                                                              // ,'|(
            arm: getArm(ArmId.WING_AGAINST_TICK),
            ...getCore(HeadId.RIGHT_SCROLL),
        }
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural), mapping it to the apotome", (): void => {
        const sagittal: NullSagittal = {}

        const actual = computeApotomeComplement(sagittal)

        const expected = {
            ...getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("maps a bare shaft with arm to the apotome with a reoriented arm", (): void => {
        // TODO: GET SAGITTAL OR SOMETHING?
        //  Hmm yeah shouldn't I not be allowed/encouraged to construct these Sagittals by arm and core separately
        //  When I might not get a valid combination? I should be grabbing these by flacco, right?
        const sagittal: Sagittal = {                                                                    // `'|
            arm: getArm(ArmId.WING_AND_TICK),
            ...getCore(HeadId.BARE_SHAFT),
        }

        const actual = computeApotomeComplement(sagittal)

        const expected = {                                                                              // ,./||\\
            arm: getArm(ArmId.WING_AND_TICK, { against: true }),
            ...getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("you really gotta be careful with these three different 1-scroll 2-barb symbols", (): void => {
        const sagittal: Sagittal = {
            ...getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),                                         // )//|
        }

        const actual = computeApotomeComplement(sagittal)   // *not* )/|\ which is HeadId.LEFT_SCROLL_AND_DOUBLE_BARB

        const expected = {
            ...getCore(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB),                                        // )|\\
        }
        expect(actual).toEqual(expected)
    })

    it("has the correct apotome complements for symbols with the core which is its own apotome complement and therefore things get tricky with its arms which are not symmetrical about the half apotome mirror", (): void => {
        const core = getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB)
        expect(computeApotomeComplement({
            ...core, arm: getArm(ArmId.WING, { against: true }),
        })).toEqual({
            ...core, arm: getArm(ArmId.BIRD),
        })
        expect(computeApotomeComplement({
            ...core,
        })).toEqual({
            ...core, arm: getArm(ArmId.WING),
        })
        expect(computeApotomeComplement({
            ...core, arm: getArm(ArmId.WING),
        })).toEqual({
            ...core,
        })
        expect(computeApotomeComplement({
            ...core, arm: getArm(ArmId.BIRD),
        })).toEqual({
            ...core, arm: getArm(ArmId.WING, { against: true }),
        })
    })
})
