function solution(n) {
    var answer = 0;
    answer = Math.sqrt(n);
    if(answer != parseInt(answer))
        return -1;
    return (answer + 1) * (answer + 1);
}
