function criticalCode(){
    throw "throwing an exceptuion";
}

function logError(theException){
    console.log(theException);
}

console.log("\n*********Try...casdasd")

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\nadsasjkdhasasdasdjioaysd\n")

try{
    throw"asdasghdasu8hdasd";
}catch(ex){
    console.log("asdasda");
    logError(ex);
}

console.log("\ndaugsudgasdasdasd\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an error")
}