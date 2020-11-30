import {Cents} from "../../../../../src/general"
import {computeCentsFromTinas, Minas, Tinas} from "../../../../../src/sagittal"
import {
    computeCentsFromHighinas,
    computeCentsFromMedinas,
    computeCentsFromMinas,
    computeCentsFromUltrinas,
} from "../../../../../src/sagittal/notations/ji/inaCents"
import {Highinas, Medinas, Ultrinas} from "../../../../../src/sagittal/notations/ji/types"

describe("computeCentsFromTinas", (): void => {
    it("computes the cents from tinas", (): void => {
        const tinas = 1 as Tinas

        const actual = computeCentsFromTinas(tinas)

        const expected = 0.140525 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeCentsFromMinas", (): void => {
    it("computes the cents from minas", (): void => {
        const minas = 1 as Minas

        const actual = computeCentsFromMinas(minas)

        const expected = 0.487918 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeCentsFromUltrinas", (): void => {
    it("computes the cents from ultrinas", (): void => {
        const ultrinas = 1 as Ultrinas

        const actual = computeCentsFromUltrinas(ultrinas)

        const expected = 1.960086 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeCentsFromHighinas", (): void => {
    it("computes the cents from highinas", (): void => {
        const highinas = 1 as Highinas

        const actual = computeCentsFromHighinas(highinas)

        const expected = 2.418830 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeCentsFromMedinas", (): void => {
    it("computes the cents from highinas", (): void => {
        const medinas = 1 as Medinas

        const actual = computeCentsFromMedinas(medinas)

        const expected = 5.413572 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})
