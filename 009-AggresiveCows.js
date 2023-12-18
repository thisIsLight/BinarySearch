//Given an array of positions
//Given n number of cows
//Find the maximum distance between the cows so that they can't fight

const allocate = (arr,c) => {
    arr.sort((a,b) => {
        return a-b
    })
    let s = 0
    let e = arr[arr.length-1] - arr[0]
    let ans = -1
    let mid = Math.floor(s + ((e-s)/2))
    while(s<=e){
        if(isPossible(arr,mid,c)){
            ans = mid
            s = mid+1
        }
        else{
            e = mid-1
        }
        mid = Math.floor(s + ((e-s)/2))
    }
    return ans
}

const isPossible = (arr,val,c) => {
    let count = 1
    let last = arr[0]

    for(let i =1; i<arr.length;i++){
        if(arr[i] - last >= val){
            count++
            if(count == c){
                return true
            }
            last = arr[i]
        }
    }
    return false
}

let arr = [4,2,1,3,6]

let count = 3

console.log(`your maximum possible distance is ${allocate(arr,count)}`)