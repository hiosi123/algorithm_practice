//등수구하기

array5 = [87, 89, 92, 100, 76]
let n = array5.length
answer = Array.from({length:n}, () => 1)

for(let i = 0; i< array5.length; i++){
  for(let j= 0; j<array5.length; j++){
    if(array5[j] > array5[i]){
      answer[i]++
    }
  }
}

answer