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

    // it("should return 'hello 1' given 'hello' ", function(){
    //   // given
    //   var txt = "hello"
    //
    //   //when
    //   var result = caculator(txt);
    //
    //   //then
    //   var expectResult = {};
    //   expectResult['hello']=1;
    //   console.log(expectResult);
    //   expect(result).to.deep.equal(expectResult);
    // });

    it("should return 'hello 4 test 3' given 'hello hello hello hello test test test' ", function(){
      // given
      var txt = ['hello', 'hello', 'hello', 'hello', 'test' ,'test' ,'test']
      //when
      var result = caculator.wordCount(txt);

      //then
      var expectResult = [
        {name:'hello',count:4},
        {name:'test',count:3},
    ]
      expect(result).to.deep.equal(expectResult);
    });

    // it("should return 'hello 4 test 3' given 'hello hello hello hello test test test' ", function(){
    //   // given
    //   var txt = {
    //     {test}
    //   }
    //
    //   //when
    //   var result = caculator(txt);
    //
    //   //then
    //   var expectResult = { name : "hello" ,count : }
    //   expect(result).to.deep.equal(expectResult);
    // });


});
