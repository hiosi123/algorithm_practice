function findMin(A,B,C) {
    return Math.min(A,B,C)
}

const answer = findMin(6,5,11)
console.log(answer)

function findTriangle(A,B,C) {
    if(A+B > C && A+C > B && B+C > A){
        return 'yes'
    } else {
        return 'no'
    }
}
console.log(findTriangle(13,33,17))