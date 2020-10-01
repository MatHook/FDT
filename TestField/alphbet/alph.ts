const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('')

function key(char1, char2) {
  for(let i in alphabet) {
    if(alphabet[i] === char1)
      var index1:any = i
    
    if(alphabet[i] === char2)
      var index2:any = i
  }

  var result:number = (index1+index2)%33
  console.log(alphabet[result])
}

key('а', 'д')