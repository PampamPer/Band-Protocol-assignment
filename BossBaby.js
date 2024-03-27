let input = ['SRSSRRR', 'RSSRR', 'SSSRRRRS', 'SRRSSR', 'SSRSRRR'];

for(i of input){
    console.log(isGoodBoy(i));
    console.log("-----------------------------------");
}

function isGoodBoy(str) {
    console.log(str)
    let s=0, r=0, idx=0; //s is amount of shot, r is amount of revenge, idx is index of String
    if (str.charAt(0)=="R" || str.charAt(str.length-1)=="S") return "Bad boy" //if Boss baby shot first or he didn't revenge in the last shot, he's a Bad boy.
    else {
        for (i of str) { //loop for each characters in str (each actions)
            console.log(`----- round ${idx+1} -----`)
            // console.log("idx", idx)
            if (i=="S") { // if current action is Boss baby got shot 
                s++ //increase s (Boss baby got shot s time(s))
                console.log("s", s)
            }
            else if (str.charAt(idx-1)=="S" || r>0){ // if previous action is Boss baby got shot or Boss baby had revenged at least 1 time,
                r++ // increase r (Boss baby had revenged r time(s))
                if(s<=r && str.charAt(idx+1)=="S") { // if Boss baby had revenged more than he got shot and next action he got shot, 
                    // console.log("next char", str.charAt(idx+1))
                    console.log("r", r)
                    console.log("reset")
                    // we'll re-consider the following actions as if he didn't get shot and had revenged before
                    s=0
                    r=0
                }
                console.log("r", r)
            }
            idx++ // add idx to check previous and next action in str
        }
    return (r>=s ? "Good boy" : "Bad boy") // if Boss baby had revenged more than he got shot, he's a Good boy.
    }
}