import {Direction, Id, stringify} from "../../general"
import {SECTIONS} from "./sections"
import {Flacombo, Section, SectionName} from "./types"

// Todo: BLOCKED ON FLACOMBO, SECTION, NOTATION GENERATION
//  Test, but maybe wait until we have this whole area sorted out

const computeSectionName = (flacombo: Flacombo): SectionName => {
    const {commaClassId, commaDirection, apotomeCount, flaccoId} = flacombo

    if (commaClassId as Id !== flaccoId as Id) {                                // AKA apotomeSection: B
        if (commaDirection === Direction.SUB) {                                 // AKA aimSection: P
            return apotomeCount === 1 ? SectionName.U1B : SectionName.U2B
        } else {
            return apotomeCount === -1 ? SectionName.D1B : SectionName.D2B
        }
    }

    switch (apotomeCount) {
        case -2:
            return SectionName.D2C
        case -1:
            return commaDirection === Direction.SUB ? SectionName.D2A : SectionName.D1C
        case 0:
            return commaDirection === Direction.SUB ? SectionName.D1A : SectionName.U1A
        case 1:
            return commaDirection === Direction.SUB ? SectionName.U1C : SectionName.U2A
        case 2:
            return SectionName.U2C
    }

    throw new Error(`Unable to determine section for flacombo ${stringify(flacombo)}`)
}

const computeSection = (flacombo: Flacombo): Section => {
    const sectionName = computeSectionName(flacombo)

    return SECTIONS[sectionName]
}

export {
    computeSection,
}
