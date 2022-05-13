function solution(s){
    let cnt = 0;
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'p')
            cnt++;
        else if(s[i] == 'y')
            cnt--;
    }
    if(cnt == 0)
        return true;
    return false;
}
