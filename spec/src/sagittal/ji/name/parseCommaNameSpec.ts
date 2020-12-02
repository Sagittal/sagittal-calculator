import {Io} from "../../../../../src/general"
import {parseCommaName} from "../../../../../src/sagittal"
import {CommaNameQuotient, SizeCategory} from "../../../../../src/sagittal/ji/name/types"

describe("parseCommaName", (): void => {
    const commaNameQuotient = [1, 5] as CommaNameQuotient

    it("works for any size category abbreviation", (): void => {
        expect(parseCommaName("1/5u" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.UNISON})
        expect(parseCommaName("1/5n" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SCHISMINA})
        expect(parseCommaName("1/5s" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SCHISMA})
        expect(parseCommaName("1/5k" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.KLEISMA})
        expect(parseCommaName("1/5C" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.COMMA})
        expect(parseCommaName("1/5S" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SMALL_DIESIS})
        expect(parseCommaName("1/5M" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.MEDIUM_DIESIS})
        expect(parseCommaName("1/5L" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LARGE_DIESIS})
        expect(parseCommaName("1/5SS" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SMALL_SEMITONE})
        expect(parseCommaName("1/5MS" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LIMMA})
        expect(parseCommaName("1/5LS" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LARGE_SEMITONE})
        expect(parseCommaName("1/5A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.APOTOME})
        expect(parseCommaName("1/5s+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SCHISMA_PLUS_APOTOME})
        expect(parseCommaName("1/5k+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.KLEISMA_PLUS_APOTOME})
        expect(parseCommaName("1/5C+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.COMMA_PLUS_APOTOME})
        expect(parseCommaName("1/5S+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SMALL_DIESIS_PLUS_APOTOME})
        expect(parseCommaName("1/5M+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME})
        expect(parseCommaName("1/5L+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LARGE_DIESIS_PLUS_APOTOME})
        expect(parseCommaName("1/5SS+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SMALL_SEMITONE_PLUS_APOTOME})
        expect(parseCommaName("1/5MS+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LIMMA_PLUS_APOTOME})
        expect(parseCommaName("1/5LS+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LARGE_SEMITONE_PLUS_APOTOME})
        expect(parseCommaName("1/5A+A" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.DOUBLE_APOTOME})
    })

    it("works for any size category name", (): void => {
        expect(parseCommaName("1/5-unison" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.UNISON})
        expect(parseCommaName("1/5-schismina" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SCHISMINA})
        expect(parseCommaName("1/5-schisma" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SCHISMA})
        expect(parseCommaName("1/5-kleisma" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.KLEISMA})
        expect(parseCommaName("1/5-Comma" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.COMMA})
        expect(parseCommaName("1/5-Small-Diesis" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SMALL_DIESIS})
        expect(parseCommaName("1/5-Medium-Diesis" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.MEDIUM_DIESIS})
        expect(parseCommaName("1/5-Large-Diesis" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LARGE_DIESIS})
        expect(parseCommaName("1/5-Small-Semitone" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SMALL_SEMITONE})
        expect(parseCommaName("1/5-Limma" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LIMMA})
        expect(parseCommaName("1/5-Large-Semitone" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LARGE_SEMITONE})
        expect(parseCommaName("1/5-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.APOTOME})
        expect(parseCommaName("1/5-schisma-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SCHISMA_PLUS_APOTOME})
        expect(parseCommaName("1/5-kleisma-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.KLEISMA_PLUS_APOTOME})
        expect(parseCommaName("1/5-Comma-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.COMMA_PLUS_APOTOME})
        expect(parseCommaName("1/5-Small-Diesis-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SMALL_DIESIS_PLUS_APOTOME})
        expect(parseCommaName("1/5-Medium-Diesis-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME})
        expect(parseCommaName("1/5-Large-Diesis-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LARGE_DIESIS_PLUS_APOTOME})
        expect(parseCommaName("1/5-Small-Semitone-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.SMALL_SEMITONE_PLUS_APOTOME})
        expect(parseCommaName("1/5-Limma-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LIMMA_PLUS_APOTOME})
        expect(parseCommaName("1/5-Large-Semitone-plus-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.LARGE_SEMITONE_PLUS_APOTOME})
        expect(parseCommaName("1/5-double-Apotome" as Io))
            .toEqual({commaNameQuotient, sizeCategory: SizeCategory.DOUBLE_APOTOME})
    })

    it("works for 3-limit names", (): void => {
        expect(parseCommaName("3k" as Io))
            .toEqual({commaNameQuotient: [3, 1] as CommaNameQuotient, sizeCategory: SizeCategory.KLEISMA})
        expect(parseCommaName("3C" as Io))
            .toEqual({commaNameQuotient: [3, 1] as CommaNameQuotient, sizeCategory: SizeCategory.COMMA})
    })

    // TODO: COMMA NAMES: support alternative names when parsing
    // tslint:disable max-line-length
    /*
    schismina	                n	    atom                skismina    skhismina
    schisma	                    s	    skisma	            skhisma
    kleisma	                    k	    semicomma
    comma	                    C	    diaschisma	        diaskisma   diaskhisma
    small-diesis	            S	    minor-diesis	    1/5-tone
    diesis	                    M	    medium-diesis	    1/4-tone	enharmonic-diesis	enharmonic
    large-diesis	            L	    major-diesis	    1/3-tone
    small-semitone	            SS	    chromatic-semitone
    limma	                    MS	    medium-semitone
    large-semitone	            LS	    diatonic-semitone
    apotome	                    A
    schisma-plus-apotome	    s+A
    kleisma-plus-apotome	    k+A
    comma-plus-apotome	        C+A
    small-diesis-plus-apotome	S+A	    neutral-second
    diesis-plus-apotome	        M+A
    large-diesis-plus-apotome	L+A
    small-semitone-plus-apotome	SS+A
    limma-plus-apotome	        MS+A
    large-semitone-plus-apotome	LS+A
    double-apotome	            A+A
     */
})
