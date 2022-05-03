function solution(s) {
    let word = s.split('');
    var answer = '';
    let cnt = 0;
    for(let i = 0; i < s.length; i++){
        if(word[i] == ' '){
            answer += word[i];
            cnt = 0;    //새 단어가 나올 것이다
        }
        else{
            if(cnt % 2 == 0){
                answer += word[i].toUpperCase();
                cnt++;
            }
            else{
                answer += word[i].toLowerCase();
                cnt++;
            }
        }
    }
    return answer;
}
