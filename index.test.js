const index = require("./index")

let dougie = index.dougie

test("that our first test passes", () => {
    expect(true).toBe(true)
})

test("that dougie is in fact orange", () => {
    expect(dougie.color).toBe("Orange")
})

test("that dougie has four legs", () => {
    expect(dougie.legs).toBe(4)
})