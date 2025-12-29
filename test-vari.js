function getInitials(string){
    return string.charAt(0)
}

function createSlug(string){
    return string.toLowerCase().replaceAll(" ","-");
}


function average(arrayNum){
    const arraySum = arrayNum.reduce((acc,num) => acc + num, 0)

    return arraySum / arrayNum.length
}

function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}


module.exports = {getInitials, createSlug, average, isPalindrome}