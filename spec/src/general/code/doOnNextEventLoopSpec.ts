import { doOnNextEventLoop } from "../../../../src/general/code/doOnNextEventLoop"

describe("doOnNextEventLoop", () => {
    it("resolves on the next event loop", async (done) => {
        let thing = 0
        const fn = () => {
            thing = 1
        }

        doOnNextEventLoop(fn).then(() => {
            expect(thing).toBe(1)
            done()
        })

        expect(thing).toBe(0)
    })

    it("works when the function passed in is itself async", async (done) => {
        let thing = 0
        const fn = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    thing = 1
                    resolve()
                }, 0)
            })
        }

        doOnNextEventLoop(fn).then(() => {
            expect(thing).toBe(1)
            done()
        })

        expect(thing).toBe(0)
    })

    it("supports having a longer timeout", async (done) => {
        let thing = 0
        const fn = () => {
            thing = 1
        }

        doOnNextEventLoop(fn, 500).then(() => {
            expect(thing).toBe(1)
        })

        setTimeout(() => {
            expect(thing).toBe(0)
        }, 300)

        setTimeout(() => {
            expect(thing).toBe(1)
            done()
        }, 700)

        expect(thing).toBe(0)
    })
})
