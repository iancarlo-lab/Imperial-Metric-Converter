/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)

          DONE!!
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '3.';
      assert.equal(convertHandler.getNum(input), 3.);
      done();
      //done();
    });
    
    test('Fractional Input', function(done) {
      var input = '5/';
      assert.equal(convertHandler.getNum(input), 5/1);
      done();
      //done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '3.5/';
      assert.equal(convertHandler.getNum(input), 3.5);
      done();
      //done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '3/5/5';
      assert.strictEqual(convertHandler.getNum(input), 'invalid input');
      done();
      //done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'no_numerical_input';
      assert.strictEqual(convertHandler.getNum(input), 1)
      done();
      //done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var validinput = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      validinput.forEach(function(ele) {
        let input = '10' + ele
        assert.equal(convertHandler.getUnit(input), ele);
        //assert
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = '29Gals';
      assert.equal(convertHandler.getUnit(input), 'invalid input');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      input.forEach(function(ele,i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      }); //see above example for hint
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'l'];
      var expected = 1.32;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [5, 'mi'];
      var expected = 8.04672;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [5, 'km'];
      var expected = 3.10686;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [5, 'lbs'];
      var expected = 2.2679;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [5, 'kg'];
      var expected = 11.0231;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
    });
    
  });

});