
module.exports = function toReadable (sum) {
    var from0To19 = [
        'zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    var tens = [
        'ten', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];
    var hundreds = [
        'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
        'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
    ];
    var thousands = [
        'thousand'
    ];
    var result = [];
    if(sum == 0){
        return 'zero'
    }
    console.log(sum)
    let f = '';
    var numberParts = String(sum).replace(/(?=(\d{3})+(?!\d))/g, ' ').split(' ');


    var i = numberParts.length - 1;

  for (var j in numberParts) {
              var numberPart = parseInt(numberParts[j]);
              var hundred = Math.floor(numberPart / 100);
      if (numberPart) {
           var numberPartResult = [];
         var hundred = Math.floor(numberPart / 100);
         if (hundred) {
                      numberPartResult.push(hundreds[hundred - 1]);
                      numberPart -= hundred * 100;
                  }
                  if (numberPart > 19) {
                      var ten = Math.floor(numberPart / 10);
                      numberPartResult.push(tens[ten - 1]);
                      numberPart -= ten * 10;
                  }
        if (numberPart) {
                      numberPartResult.push(from0To19[numberPart]);
                  }
        if (thousands[i-1] !== undefined) {
                      numberPartResult.push(thousands[0]);
                  }
            result.push(numberPartResult.join(' '));
      }
      i--;
}
return result.join(' ')

}
