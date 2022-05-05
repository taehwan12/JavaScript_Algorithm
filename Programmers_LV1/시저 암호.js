function solution(s, n) {
    var answer = '';
    var letter = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == ' ')
            letter.push(s.charCodeAt(i));
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
            if(s.charCodeAt(i) + n > 90)
                letter.push(s.charCodeAt(i) + n - 26);
            else
                letter.push(s.charCodeAt(i) + n);
        }
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
            if(s.charCodeAt(i) + n > 122)
                letter.push(s.charCodeAt(i) + n - 26);
            else
                letter.push(s.charCodeAt(i) + n);
        }
    }
    console.log(letter);
    for(let i = 0; i < s.length; i++){
        answer += String.fromCharCode(letter[i]);
    }
    return answer;
}
