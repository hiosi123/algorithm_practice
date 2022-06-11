array = [
[10,13,10,12,90],
[12,39,30,23,11],
[11,25,50,53,15],
[19,27,29,37,27],
[19,13,30,13,19]]


function findMaxNum(array){
  let findMax = []
  let countRow 
  let countCol
  let countCross1 = 0
  let countCross2 = 0

  for(let i=0; i< array.length; i++){
    countRow = 0
    countCol = 0
    for(let j=0; j<array.length; j++){
      countRow += array[i][j]
      countCol += array[j][i]
      if(i===j){
        countCross1 += array[i][j]
      }
      if(i+j === 4){
        countCross2 += array[i][j]
      }
    }
    findMax.push(countRow)
    findMax.push(countCol)
  }
  findMax.push(countCross1)
  findMax.push(countCross2)
  console.log(findMax)
  
  answer = Math.max(...findMax)
  console.log(answer)
  return answer
}

findMaxNum(array);