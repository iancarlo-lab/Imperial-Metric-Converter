/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.splitInput = function(input){
    const regex = /[a-zA-Z]/;
    return input.indexOf(input.match(regex));
  }
  
  this.getNum = function(input) {
    var result;
    let firstLetter = this.splitInput(input);
    
    if(firstLetter == 0) return 1
    result = input.slice(0, firstLetter);
    
    const secondFraction = result.indexOf('/', input.indexOf('/') + 1)
    if(secondFraction > 0) result = 'invalid input';
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var firstLetter = this.splitInput(input)
    if(firstLetter < 0) return 'invalid input'
    
    const unit = input.slice(firstLetter)
    const validUnits = units.includes(unit)
    
    validUnits ? result = unit : result = 'invalid input'
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var initUnitLowerCase = initUnit.toLowerCase();
    const units = {
      'gal': 'l',
      'l': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs',
    };
    return units[initUnitLowerCase];
    
  };

  this.spellOutUnit = function(unit) {
    var unitLowerCase = unit.toLowerCase();
     const units = {
      'gal': 'gallons',
      'l': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms',
    };
    
    return units[unitLowerCase];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    const convertTable = {
      'gal': galToL,
      'l': 1/galToL,
      'lbs': lbsToKg,
      'kg': 1/lbsToKg,
      'mi': miToKm,
      'km': 1/miToKm
    };
    
    result = initNum * convertTable[initUnit.toLowerCase()];
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const spelledeOutInitUnits = this.spellOutUnit(initUnit) + 's';
    const spelledOutReturnUnits = this.spellOutUnit(returnUnit) + 's';
    var result = initNum + ' ' + spelledeOutInitUnits + ' ' + 'converts to '  + returnNum + ' '+ spelledOutReturnUnits 
    
    return result;
  };
  
  
}

module.exports = ConvertHandler;
