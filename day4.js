//2-1 큰 수 출력하기
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)

numbers = [7,3,9,5,6,12]

function compareNums(arr){
  return arr.filter((e,i) => e > arr[i-1] || e === arr[0])
}

compareNums(numbers)

//2-2 보이는 학생
//선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그 램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

numbers = [130,200,5,148 ,140 ,145 ,150 ,150, 153]

function findCanSee(arr){
    let count = 1
    arr.reduce((a,b) => {
      if(a<b){
        count++
        return b
      } else{
        return a
      }
    })
	return count
}

findCanSee(numbers)

//2-3 가위 바위 보
num = 5
A = [2,3,3,1,3]
B = [1,1,2,2,3]
// 1 scissors 2 rock 3 paper
function RockPaperScissors(count, arr1,arr2){
  let list = []
  for(let i=0; i < count; i++){
  	if(arr1[i] - arr2[i] === 1){
      list.push("A")
    } else if(arr1[i] - arr2[i] === -2){
      list.push("A")
    } else if(arr1[i] - arr2[i] === 0){
      list.push("D")
    }	else {
      list.push("B")
    }
  }
  return list
}

RockPaperScissors(num, A, B)
