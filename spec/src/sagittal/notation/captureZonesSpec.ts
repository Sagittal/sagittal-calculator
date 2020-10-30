import {BoundClassId, CaptureZone, SymbolClassId} from "../../../../src/sagittal/notation"
import {computeCaptureZones} from "../../../../src/sagittal/notation/captureZones"
import {
    SECTION_N1A,
    SECTION_N1T,
    SECTION_N2A,
    SECTION_N2T,
    SECTION_P1A,
    SECTION_P1T,
    SECTION_P2A,
    SECTION_P2T,
} from "../../../../src/sagittal/notation/sections"
import {
    EXTREME_NOTATION,
    HIGH_NOTATION,
    MEDIUM_NOTATION,
    ULTRA_NOTATION,
} from "../../../../src/sagittal/notations/ji/notations"

describe("computeCaptureZones", (): void => {
    it("works for the Medium level", (): void => {
        const actual = computeCaptureZones(MEDIUM_NOTATION)

        const expectedN1A: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N1A,
            },
        ].reverse() as CaptureZone[]
        const expectedN1T: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N1T,
            },
        ].reverse() as CaptureZone[]
        const expectedN2A: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N2A,
            },
        ].reverse() as CaptureZone[]
        const expectedN2T: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N2T,
            },
        ].reverse() as CaptureZone[]

        const expectedP1A: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P1A,
            },
        ]
        const expectedP1T: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P1T,
            },
        ]
        const expectedP2A: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P2A,
            },
        ]
        const expectedP2T: CaptureZone[] = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P2T,
            },
        ]

        const expected = [
            ...expectedN2T,
            ...expectedN2A,
            ...expectedN1T,
            ...expectedN1A,

            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as CaptureZone[]
        expect(actual).toEqual(expected)
    })

    it("works for the High level, which is of interest because involves the topmost capture zone being split in the manner that the apotome-centered zones are", (): void => {
        const actual = computeCaptureZones(HIGH_NOTATION)

        const expectedN1A = [
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N1A,
            },
        ].reverse() as CaptureZone[]
        const expectedN1T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N1T,
            },
        ].reverse() as CaptureZone[]
        const expectedN2A = [
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N2A,
            },
        ].reverse() as CaptureZone[]
        const expectedN2T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N2T,
            },
        ].reverse() as CaptureZone[]

        const expectedP1A = [
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P1A,
            },
        ] as CaptureZone[]
        const expectedP1T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P1T,
            },
        ] as CaptureZone[]
        const expectedP2A = [
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P2A,
            },
        ] as CaptureZone[]
        const expectedP2T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P2T,
            },
        ] as CaptureZone[]

        const expected = [
            ...expectedN2T,
            ...expectedN2A,
            ...expectedN1T,
            ...expectedN1A,

            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as CaptureZone[]
        expect(actual).toEqual(expected)
    })

    it("works for the Ultra level, which is of interest for the same reason as the High level but also introduces accents", (): void => {
        const actual = computeCaptureZones(ULTRA_NOTATION)

        const expectedN1A = [
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N1A,
            },
        ].reverse() as CaptureZone[]
        const expectedN1T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N1T,
            },
        ].reverse() as CaptureZone[]
        const expectedN2A = [
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N2A,
            },
        ].reverse() as CaptureZone[]
        const expectedN2T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N2T,
            },
        ].reverse() as CaptureZone[]

        const expectedP1A = [
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P1A,
            },
        ] as CaptureZone[]
        const expectedP1T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P1T,
            },
        ] as CaptureZone[]
        const expectedP2A = [
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P2A,
            },
        ] as CaptureZone[]
        const expectedP2T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P2T,
            },
        ] as CaptureZone[]

        const expected = [
            ...expectedN2T,
            ...expectedN2A,
            ...expectedN1T,
            ...expectedN1A,

            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as CaptureZone[]
        expect(actual).toEqual(expected)
    })

    it("works for the Extreme level, and here's the main explanation: it can assemble the ±2 apotome sized areas divided into capture zones each with an accidental, from the given half apotome of bound and comma classes plus the given up-to-L|SS-bound's worth (single shaft max) of flaccos (all by ID)", (): void => {
        const actual = computeCaptureZones(EXTREME_NOTATION)

        const expectedN1A = [
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N1A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N1A,
            },
        ].reverse()
        const expectedN1T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                section: SECTION_N1T,
            },
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N1T,
            },
        ].reverse()
        const expectedN2A = [
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N2A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N2A,
            },
        ].reverse()
        const expectedN2T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                section: SECTION_N2T,
            },
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_N2T,
            },
        ].reverse()

        const expectedP1A = [
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P1A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P1A,
            },
        ]
        const expectedP1T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                section: SECTION_P1T,
            },
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P1T,
            },
        ]
        const expectedP2A = [
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P2A,
            },
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P2A,
            },
        ]
        const expectedP2T = [
            {
                boundClassId: BoundClassId.MINA_116,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_115,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_114,
                symbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_113_SPLIT,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_113,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_112,
                symbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_111,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_110,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_109,
                symbolClassId: SymbolClassId.DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_108,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_107,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_106,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_105_SPLIT,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_105,
                symbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_104,
                symbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_103,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_102,
                symbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_101,
                symbolClassId: SymbolClassId.WING_BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_100,
                symbolClassId: SymbolClassId.BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_99,
                symbolClassId: SymbolClassId.WING_AGAINST_BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_98,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BARB_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_97,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_96,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_95,
                symbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_94,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_93,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_92,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_91,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_90,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_89,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_88,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_87,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_86,
                symbolClassId: SymbolClassId.BIRD_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_85,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_84,
                symbolClassId: SymbolClassId.TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_83,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_DOUBLE_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_82,
                symbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_81,
                symbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_80,
                symbolClassId: SymbolClassId.ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_79,
                symbolClassId: SymbolClassId.WING_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_78_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_78,
                symbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_77,
                symbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_76,
                symbolClassId: SymbolClassId.TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_75,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_ARC_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_74,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_73,
                symbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_72_SPLIT,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_72,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_71,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_70,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_69,
                symbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_68,
                symbolClassId: SymbolClassId.LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_67,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_66,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_65,
                symbolClassId: SymbolClassId.RIGHT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_64,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_63,
                symbolClassId: SymbolClassId.SCROLL_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_62,
                symbolClassId: SymbolClassId.WING_AGAINST_SCROLL_AND_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_61,
                symbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_60,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_59,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_58,
                symbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_57,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_56,
                symbolClassId: SymbolClassId.RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_55,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_54,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_53,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_52,
                symbolClassId: SymbolClassId.TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_51_SPLIT,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_RIGHT_ARC,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_51,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_50,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_49_SPLIT,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_49,
                symbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_48,
                symbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_47,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL_AND_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_46,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_45,
                symbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_44,
                symbolClassId: SymbolClassId.LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_43,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_42,
                symbolClassId: SymbolClassId.BIRD_AGAINST_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_41,
                symbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_40,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_39,
                symbolClassId: SymbolClassId.WING_AND_TICK_AGAINST_LEFT_BARB,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_38,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_37,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_36,
                symbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_35,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_34,
                symbolClassId: SymbolClassId.RIGHT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_33,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_32,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_31,
                symbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_30,
                symbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_29,
                symbolClassId: SymbolClassId.WING_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_28,
                symbolClassId: SymbolClassId.BIRD_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_27,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_26,
                symbolClassId: SymbolClassId.TICK_AGAINST_BOATHOOK_AND_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_25,
                symbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_24,
                symbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_23,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_22,
                symbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_21,
                symbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_20,
                symbolClassId: SymbolClassId.DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_19,
                symbolClassId: SymbolClassId.WING_AGAINST_DOUBLE_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_18,
                symbolClassId: SymbolClassId.LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_17,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_16,
                symbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_15,
                symbolClassId: SymbolClassId.WING_AGAINST_TICK_AND_RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_14,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_BOATHOOK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_13,
                symbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_12,
                symbolClassId: SymbolClassId.RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_11,
                symbolClassId: SymbolClassId.WING_AGAINST_RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_10,
                symbolClassId: SymbolClassId.BIRD_AGAINST_RIGHT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_9,
                symbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_8,
                symbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_7,
                symbolClassId: SymbolClassId.LEFT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_6,
                symbolClassId: SymbolClassId.WING_AGAINST_LEFT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_5,
                symbolClassId: SymbolClassId.WING_AND_TICK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_4,
                symbolClassId: SymbolClassId.TICK,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_3,
                symbolClassId: SymbolClassId.TICK_AGAINST_LEFT_SCROLL,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_2,
                symbolClassId: SymbolClassId.BIRD,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_1,
                symbolClassId: SymbolClassId.WING,
                section: SECTION_P2T,
            },
            {
                boundClassId: BoundClassId.MINA_0,
                symbolClassId: SymbolClassId.NULL,
                section: SECTION_P2T,
            },
        ]

        const expected = [
            ...expectedN2T,
            ...expectedN2A,
            ...expectedN1T,
            ...expectedN1A,

            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as CaptureZone[]
        expect(actual).toEqual(expected)
    })
})
