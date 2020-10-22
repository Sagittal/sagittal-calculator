import {AccidentalSection, AimSection, ApotomeSection, Section, SectionName} from "./types"

// Todo: BLOCKED ON FLACOMBO, SECTION, NOTATION GENERATION
//  This could be generated. But wait until you sort this whole section out.
const SECTIONS: Record<SectionName, Section> = {
    [SectionName.D2C]: {
        aimSection: AimSection.D,
        apotomeSection: ApotomeSection._2,
        accidentalSection: AccidentalSection.C,
    },
    [SectionName.D2B]: {
        aimSection: AimSection.D,
        apotomeSection: ApotomeSection._2,
        accidentalSection: AccidentalSection.B,
    },
    [SectionName.D2A]: {
        aimSection: AimSection.D,
        apotomeSection: ApotomeSection._2,
        accidentalSection: AccidentalSection.A,
    },
    [SectionName.D1C]: {
        aimSection: AimSection.D,
        apotomeSection: ApotomeSection._1,
        accidentalSection: AccidentalSection.C,
    },
    [SectionName.D1B]: {
        aimSection: AimSection.D,
        apotomeSection: ApotomeSection._1,
        accidentalSection: AccidentalSection.B,
    },
    [SectionName.D1A]: {
        aimSection: AimSection.D,
        apotomeSection: ApotomeSection._1,
        accidentalSection: AccidentalSection.A,
    },
    [SectionName.U1A]: {
        aimSection: AimSection.U,
        apotomeSection: ApotomeSection._1,
        accidentalSection: AccidentalSection.A,
    },
    [SectionName.U1B]: {
        aimSection: AimSection.U,
        apotomeSection: ApotomeSection._1,
        accidentalSection: AccidentalSection.B,
    },
    [SectionName.U1C]: {
        aimSection: AimSection.U,
        apotomeSection: ApotomeSection._1,
        accidentalSection: AccidentalSection.C,
    },
    [SectionName.U2A]: {
        aimSection: AimSection.U,
        apotomeSection: ApotomeSection._2,
        accidentalSection: AccidentalSection.A,
    },
    [SectionName.U2B]: {
        aimSection: AimSection.U,
        apotomeSection: ApotomeSection._2,
        accidentalSection: AccidentalSection.B,
    },
    [SectionName.U2C]: {
        aimSection: AimSection.U,
        apotomeSection: ApotomeSection._2,
        accidentalSection: AccidentalSection.C,
    },
}

export {
    SECTIONS,
}
