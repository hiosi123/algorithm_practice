function triangle(a,b,c){
    if(a+b < c || a+c < b || b+c < a){
      return 'NO'
  } else return 'YES'
    
}
  
triangle(13,33,17)


function divideby12(a){
    let answer
    answer = Math.floor(a/12)
    if(a%12){
      answer += 1
    }
    return answer
}
divideby12(25)
divideby12(178)
  
function addall(n){
let answer =0
    for(let i=1; i<=n; i++){
        answer += i
    }
    return answer
}
addall(5)
  
function findMin(a,b,c,d,e,f,g){
    return Math.min(a,b,c,d,e,f,g)
}
findMin(5,3,7,11,2,15,17)

function findMin(arr){
    return Math.min(...arr)
}
findMin([5,3,7,11,2,15,17])

function findSumOdd(arr){
    let odds = arr.filter((e) => e%2 === 1)
  minOdds = Math.min(...odds)
  answer = odds.reduce((a,b) => a+b)
  return [answer, minOdds]
}

findSumOdd([12,77,38,41,53,92,85])

function findNum(n, arr){
    let answer = 0
      arr.forEach((e)=> {
      if(e%10 === n){
        answer += 1
      }
    })
    return answer
  }
  
findNum(3,[25,23,11,47,53,17,33])