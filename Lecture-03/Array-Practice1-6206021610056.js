let values1 = ['Apple',1,false]
let values2 = ['Fries',2,true]
let values3 = ['Mars',9,'Apple']
function chacktype(values1 ,values2){
    let valuesf = values1;
    let valuest = values2;
    let txt1 =[]
    let txt2 =[]
    for(let i = 0 ;i < valuesf.length;i++ ){
        txt1.push( typeof(values1[i]));
        txt2.push( typeof(values2[i]));
    }
    let Ans = []
    for(let j = 0;j < txt1.length;j++){
        if(txt1[j] === txt2[j]){
            Ans.push("true")
        }else{
            Ans.push("false")
        }
    }

    return(Ans)
}

console.log(chacktype(values1,values2))
console.log(chacktype(values2,values3))
console.log(chacktype(values3,values1))