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


//9.
//대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

string = "BANANA"

string.split('').map((e,i) => e === 'A'? '#':e).join('')

//정규표현식을 쓴다면..
string.replace(/A/g, '#') 
// 아주 간단하다

//10.
string = 'COMPUTERPROGRAMMING'
find = 'R'
let count = 0
string.split('').forEach(e=> e === 'R'? count++: count+=0)

count