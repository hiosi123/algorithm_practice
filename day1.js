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
  