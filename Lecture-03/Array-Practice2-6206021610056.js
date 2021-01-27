let furniture = ["Table","Chaire",'Couch']
function SeparateString(furniture1){
    let i = 0;
    for(let j = 0 ;j < furniture1.length;j++){
        console.log("------",furniture1[j],"--------")
        for(let char of  furniture1[j]){
            console.log(char)
        }
    }
}
SeparateString(furniture)