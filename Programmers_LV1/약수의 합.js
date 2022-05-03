function solution(n) {
    var answer = 0;
    if(n == 0)
        return 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            if(i == Math.sqrt(n))   //4의 경우 n/i는 더하면 중복으로 더하게 됨
                answer += i;
            else
                answer += i + (n / i);
        }
    }
    return answer;
}
