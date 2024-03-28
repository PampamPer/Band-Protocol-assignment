let input = [[[2, 5, 10, 12, 15], 5], [[1, 11, 30, 34, 35, 37], 10]]

for(i of input) {
    console.log(i[0])
    console.log(isRescue(i))
    console.log("---------------")
}

function isRescue(arr) {
    let position = arr[0], k = arr[1], maxChick =1; // position array is position of chicken, maxChick is maximum chicken which is saved.

    for(i in position) {
        //rescueChick is possibly maximum chicken which is saved. range is last index of roof compared to chicken position.
        let rescueChick = 0, range = position[i]+k; 
        let newArr = position.slice(i); // array of possible position which might be saved by superman

        for(j of newArr){
            if(j >= range) break // if chicken current position is not under range, check next possible chicken position
            else rescueChick++ // increase amount of saved chicken
        }

        if(rescueChick>maxChick) maxChick=rescueChick
    }

    return maxChick
}