let input = ['SRSSRRR', 'RSSRR', 'SSSRRRRS', 'SRRSSR', 'SSRSRRR'];

for(i of input){
    console.log(isGoodBoy(i));
    console.log("-----------------------------------");
}

function isGoodBoy(str) {
    console.log(str)
    // s is amount of shot, r is amount of revenge, idx is index of String
    let s=0, r=0, idx=0; 

    // if Boss baby shot first or he didn't revenge in the last shot, he's a Bad boy.
    if (str.charAt(0)=="R" || str.charAt(str.length-1)=="S") return "Bad boy" 
    else {
        // loop for each characters in str (each actions)
        for (i of str) { 
            // if current action is Boss baby got shot 
            if (i=="S") { 
                s++ // increase s (Boss baby got shot s time(s))
            }
            
            // if previous action is Boss baby got shot or Boss baby had revenged at least 1 time,
            else if (str.charAt(idx-1)=="S" || r>0){ 
                r++ // increase r (Boss baby had revenged r time(s))
                
                // if Boss baby had revenged more than he got shot and next action he got shot, 
                // we'll re-consider the following actions as if he didn't get shot and had revenged before
                if(s<=r && str.charAt(idx+1)=="S") { 
                    s=0
                    r=0
                }
            }
            idx++ // add idx to check previous and next action in str
        }
    
        // if Boss baby had revenged more than he got shot, he's a Good boy.
        return (r>=s ? "Good boy" : "Bad boy") 
    }
}