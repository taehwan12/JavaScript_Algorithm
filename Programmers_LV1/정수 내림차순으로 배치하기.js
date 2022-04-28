function solution(n) {
    var answer = n + '';
    answer = answer.split('');
    answer = answer.sort().reverse();
    answer = answer.join('');
    //join() -> ,로 원소 구분
    //join('*') -> *로 원소 구분
    return parseInt(answer);
}
