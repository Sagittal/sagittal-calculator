import { Direction, Id, isUndefined } from "../../general"
import { EXTREME_NOTATION_CAPTURE_ZONE_ACCIDENTALS } from "./extremeNotationCaptureZoneAccidentals"
import { CommaClass, NotationCaptureZoneAccidental } from "./types"

// TODO: this needs a bit of work. There's something off about getting a "symbol" from this pre-packaged
//  Notation Capture Zone Accidental list which is for the Extreme level JI notation but lives up here, etc. etc...
//  And how these accidentals encompass everything from -2 to +2 apotomes when we only really need up to single shafts
//  Maybe really what it is is we should be querying the Flaccos, and this is a representative Flacco?
//  Er, well, maybe representative symbol is just fine, because Flacco carries the suggestion of reaching single-shaft
//  Whereas this only goes up to the half-apotome
//  So maybe there should be a method that goes from a Flacco to a Symbol, which will be its own type,
//  Like this: type Symbol = Ascii & { _SymbolBrand: boolean }
//  And that's what this should return
const getRepresentativeSymbol = (commaClassId: Id<CommaClass>): NotationCaptureZoneAccidental => {
    const maybeExtremeNotationCaptureZoneAccidental = EXTREME_NOTATION_CAPTURE_ZONE_ACCIDENTALS
        .find((maybeExtremeNotationCaptureZoneAccidental: NotationCaptureZoneAccidental): boolean => {
            const { apotomeCount, commaDirection } = maybeExtremeNotationCaptureZoneAccidental

            return maybeExtremeNotationCaptureZoneAccidental.commaClassId === commaClassId
                && apotomeCount === 0
                && commaDirection !== Direction.SUB
        })

    if (isUndefined(maybeExtremeNotationCaptureZoneAccidental)) {
        throw new Error(`Could not find representative symbol for comma class ID ${commaClassId}.`)
    }

    return maybeExtremeNotationCaptureZoneAccidental
}

export {
    getRepresentativeSymbol,
}
