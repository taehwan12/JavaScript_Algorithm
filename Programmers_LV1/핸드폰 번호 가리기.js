function solution(phone_number) {
    var answer = '';
    for(let i = 0; i < phone_number.length - 4; i++){
        answer += '*';
    }
    answer += phone_number.substr(-4,4);    //뒤에서 -4번째 요소부터 자른다, 4개만큼
    return answer;
}
