function equation(string1){
    let cal = string1;
    let a = "";
    let b ="";
    let x  = 0;
    for(var i=0;i < string1.length;i++){
        if(cal[i] === "*"){
            a += '*';
        }
        else if(cal[i] === "+"){
            a += "+"
        }
        else if(cal[i] === "-"){
            a += "-"
        }else{
            b += cal[i]
        }
    }
    let c = 0;
    c += parseInt(b[0]); 
    for(i = 0; i < a.length ;i++){
        if(a[i] === "*"){
            c *= parseInt(b[i+1])
        }else if(a[i] === "+"){
            c += parseInt(b[i+1])
        }else if(a[i] === "-"){
            c -= parseInt(b[i+1])
        }
    }
    return(c);
}
console.log (equation("5+6*2"))
console.log (equation("5-6+2*9"))
console.log (eval("10+6+9"))