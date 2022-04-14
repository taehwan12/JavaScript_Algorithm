function solution(x, n) {
    var answer = new Array(n);
    answer[0] = 0;
    for(let i = 0; i < n; i++){
        answer[i] = (i + 1) * x;
    }
    return answer;
}
