function solution(n) {
    var answer = 0;
    let num = new Array(n);
    for(let i = 0; i < n; i++){
        num[i] = i;
    }
    for(let i = 2; i <= n; i++){
        if(num[i] == 0)
            continue;
        for(let j = i * i; j <= n; j += i){
            num[j] = 0;
        }
    }
    for(let i = 2; i <= n; i++){
        if(num[i] != 0)
            answer++;
    }
    return answer;
}
