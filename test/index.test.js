const assert = require('chai').assert
const index = require('../index')

describe("Warmup Test", ()=> {
    describe("#getSum", ()=> {
        it("gets the sum of two numbers", ()=> {
            assert.deepEqual(index.getSum(2, 3, 10), 15)

        })
    })
})
