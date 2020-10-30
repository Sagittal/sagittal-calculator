import {ArmId, getArm, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeApotomeComplement, getCore, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("computeApotomeComplement", (): void => {
    it("returns the apotome complement of the given symbol", (): void => {
        const sagittal = getSagittal({headId: HeadId.LEFT_BARB})                                       //  /|

        const actual = computeApotomeComplement(sagittal)

        const expected = getSagittal({headId: HeadId.RIGHT_BARB, shafts: Shafts.DOUBLE})               // ||\\
        expect(actual).toEqual(expected)
    })

    it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
        const sagittal = getSagittal({headId: HeadId.LEFT_SCROLL_AND_BOATHOOK, shafts: Shafts.DOUBLE}) // )~||

        const actual = computeApotomeComplement(sagittal)

        const expected = getSagittal({headId: HeadId.BOATHOOK_AND_BARB})                               // ~|\\
        expect(actual).toEqual(expected)
    })

    it("reorients the arm, so that they will cancel each other out", (): void => {
        const sagittal = getSagittal({armId: ArmId.WING_AGAINST_TICK, headId: HeadId.DOUBLE_SCROLL})   // ,'|(

        const actual = computeApotomeComplement(sagittal)

        const expected = getSagittal({                                                                 // `./||)
            armId: ArmId.WING_AGAINST_TICK,
            against: true,
            headId: HeadId.DOUBLE_LEFT_BARB,
            shafts: Shafts.DOUBLE,
        })
        expect(actual).toEqual(expected)
    })

    it("can reorient arm the other way", (): void => {
        const sagittal = getSagittal({                                                                 // `./||)
            armId: ArmId.WING_AGAINST_TICK,
            against: true,
            headId: HeadId.DOUBLE_LEFT_BARB,
            shafts: Shafts.DOUBLE,
        })

        const actual = computeApotomeComplement(sagittal)

        const expected = getSagittal({armId: ArmId.WING_AGAINST_TICK, headId: HeadId.DOUBLE_SCROLL})   // ,'|(
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural), mapping it to the apotome", (): void => {
        const sagittal = undefined

        const actual = computeApotomeComplement(sagittal)

        const expected = getSagittal({headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE})
        expect(actual).toEqual(expected)
    })

    it("works for the apotome, mapping it to the null sagittal (the parenthetical natural", (): void => {
        const sagittal = getSagittal({headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE})

        const actual = computeApotomeComplement(sagittal)

        const expected = undefined
        expect(actual).toEqual(expected)
    })

    it("maps a bare shaft with arm to the apotome with a reoriented arm", (): void => {
        const sagittal = getSagittal({armId: ArmId.WING_AND_TICK, headId: HeadId.BARE_SHAFT})         // `'|

        const actual = computeApotomeComplement(sagittal)

        const expected = getSagittal({                                                                // ,./||\\
            armId: ArmId.WING_AND_TICK,
            against: true,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.DOUBLE,
        })
        expect(actual).toEqual(expected)
    })

    it("you really gotta be careful with these three different 1-scroll 2-barb symbols", (): void => {
        const sagittal = getSagittal({ headId: HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB })                 // )//|

        const actual = computeApotomeComplement(sagittal)   // *not* )/|\ which is HeadId.LEFT_SCROLL_AND_DOUBLE_BARB

        const expected = getSagittal({ headId: HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB })                // )|\\
        expect(actual).toEqual(expected)
    })

    it("has the correct apotome complements for symbols with the core which is its own apotome complement and therefore things get tricky with its arms which are not symmetrical about the half apotome mirror", (): void => {
        const core = getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB)
        expect(computeApotomeComplement({
            ...core, arm: getArm(ArmId.WING, {against: true}),
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
            ...core, arm: getArm(ArmId.WING, {against: true}),
        })
    })

    it("throws an error if passed a down symbol", (): void => {
        const sagittal = getSagittal({headId: HeadId.LEFT_BARB, down: true })                          //  \!

        expect((): void => {
            computeApotomeComplement(sagittal)
        }).toThrowError("Do not attempt to take apotome complement of downward-aiming sagittals.")
    })
})
