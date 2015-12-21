/**
 * Created by mtala1 on 12/21/15.
 */
var should = require("should"),
    assert = require("assert");

describe("intial test case", function () {
    it("should mocha installed & running", function () {
        assert.equal(true, true);
    });

    it("should libarary installed & runnning", function () {
        true.should.eql(true);
    })
})