function solution(n, m) {
    var answer = [];
    if(n < m){
        let temp = n;
        n = m;
        m = temp;
    }
    let gcd = getGCD(n, m);
    answer.push(gcd);
    answer.push(n * m / gcd);
    return answer;
}

function getGCD(n, m){
    if(m == 0)
        return n;
    return getGCD(m, n % m)
}
