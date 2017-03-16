"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var caculator = require("../lib/caculator.js");


describe("Caculating Word Componet Test", function(){
    sinon.spy(console, 'log');

    it("should return 'hello 1' given 'hello' ", function(){
      // given
      var txt = "hello"

      //when
      var result = caculator(txt);

      //then
      var expectResult = {};
      expectResult['hello']=1;
      console.log(expectResult);
      expect(result).to.deep.equal(expectResult);
    });

});
