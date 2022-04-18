function solution(x) {
    let digitSum = 0;
    let temp = x;
    while(x > 0){
        digitSum += x % 10;
        x = Math.floor(x / 10);
    }
    return !(temp % digitSum);
}
