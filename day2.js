//모듈로를 써줌으로써 끝자리가 무엇인지 찾을 수 있다
function findNum(n, arr){
    let answer = 0
      arr.forEach((e)=> {
        if(e%10 === n){
            answer += 1
        }
    })
    return answer
  }
  
  findNum(0,[12,20,54,30,87,91,30])



let arr = [20,7,23,19,10,15,25,8,13]

//합이 100 이 되는 부분을 찾아준다
function sum100(arr){
    let sum = arr.reduce((a,b) => a+b)
    console.log(sum)
    for(let i=0; i< arr.length-1; i++){
        for(let j=i+1; j< arr.length; j++){
            if((sum - (arr[i]+arr[j])) === 100){
                arr = arr.filter((e) => e !== arr[i] &&  e !== arr[j])
                return arr
            }
        }
    }

}
  
sum100(arr)

// 뒤에서 부터 지워준다면 안전하다..


function sum100(arr){
  let sum = arr.reduce((a,b) => a+b)
  console.log(sum)
	for(let i=0; i< arr.length; i++){
    for(let j=i+1; j< arr.length; j++){
      if((sum - (arr[i]+arr[j])) === 100){
        arr.splice(j,1)
        arr.splice(i,1)
      	return arr
      }
    }
  }
  
}

sum100(arr)
