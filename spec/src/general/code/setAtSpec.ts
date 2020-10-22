import {KeyPath, Obj, setAt} from "../../../../src/general/code"

describe("setAt", (): void => {
    it("sets the value on the object at the specified key path", (): void => {
        const object = {polygons: {rectangles: {squares: {}}}} as Obj
        const keyPath = ["polygons", "rectangles", "squares", "magicSquare"] as KeyPath
        const value = true

        setAt(object, keyPath, value)

        expect(object).toEqual({polygons: {rectangles: {squares: {magicSquare: true}}}})
    })

    it("can create the path if necessary, with the 'parents' options", (): void => {
        const object = {} as Obj
        const keyPath = ["polygons", 2, "squares", "magicSquare"] as KeyPath
        const value = true
        const options = {parents: {}}

        setAt(object, keyPath, value, options)

        expect(object).toEqual({polygons: {2: {squares: {magicSquare: true}}}})
    })

    it("can create the path if necessary, with the 'parents' options", (): void => {
        const object = [] as unknown[] as Obj
        const keyPath = [3, 2, 0] as KeyPath
        const value = true
        const options = {parents: []}

        setAt(object, keyPath, value, options)

        expect(object).toEqual([undefined, undefined, undefined, [undefined, undefined, [true]]] as Obj)
    })
})
