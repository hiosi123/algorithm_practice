//11번 대문자 찾기

string = 'KoreaTimeGood'

function findUpperCase(str){
  let answer = 0
  str.split('').forEach((e) => {
    if(e === e.toUpperCase()){
      answer++
    }
  })
  return answer
}

findUpperCase(string)

//12.모두 대문자로 변경
string = 'ItisTimeToStudy'

function toUpperCase(str){
  let answer
  answer = str.split('').map(e=> e.toUpperCase()).join('')
  return answer
}

toUpperCase(string)

//13. 대문자는 소문자로, 소문자는 대문자로

string = "StuDY"

function UpperAndLower(str){
  let answer
  answer = str.split('').map((e)=> {
    if(e === e.toUpperCase()){
      return e.toLowerCase()
    } else{
      return e.toUpperCase()
    }
  }).join('')
  return answer
}

UpperAndLower(string)

//14. longestString 가장 긴 문자열

let N = ['5', 'teacher', 'time', 'student', 'beautiful', 'good']

function longestString(arr){
  let answer 
  answer = arr.reduce((a,b) => a.length >= b.length? a:b)
  return answer
}

longestString(N)

//15. 가운데 문자 출력 
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

let string = 'study'
let string1 = 'good'

function middlePrint(str){
  let answer
  let length = str.length
  if(length % 2 === 1){
    answer = str[Math.floor(str.length/2)]
  } else{
    answer = str.slice(str.length/2 -1, str.length/2+1)
  }
  return answer
}

middlePrint(string)
middlePrint(string1)

//16. 중복문자 제거

string = 'ksekkset'

function deleteDouble(str){
  let answer = str.split('')
  return answer = Array.from(new Set(answer)).join('')
}


deleteDouble(string)

//17. 중복단어 제거
N = ['5', 'good', 'time', 'good', 'time', 'student']

function deleteDoubleWord(arr){
  let answer = arr
  return answer = Array.from(new Set(answer))
}


deleteDoubleWord(N)