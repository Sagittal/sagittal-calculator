import { Monzo } from "../../../../src/general/music"
import { isSubunison } from "../../../../src/general/music/isSubunison"

describe("isSubunison", () => {
    it("returns true if the monzo is negative", () => {
        const monzo = [-40, 22, 1, 1] as Monzo

        const actual = isSubunison(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns true if the monzo is negative", () => {
        const monzo = [40, -22, -1, -1] as Monzo

        const actual = isSubunison(monzo)

        expect(actual).toBeFalsy()
    })
})
