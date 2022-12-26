// 1)

const e1 = (arr) => {
    arr.pop()
    arr.shift()
    return arr
}

// 2)

const e2 = (string1, string_to_add) => {
    string1.push(string_to_add)
    string1.unshift(string_to_add)
    return string1
}

// 3)

const e3 = (arr) => {
   return arr.includes(5) 
} 

// 4)

const e4 = (arr1,arr2) => {
    return arr1.concat(arr2)
}

// 5)

const e5 = (arr,n) => {
    return arr.includes(n) 
 } 

// 6)

 const e6 = (arr, s) => {
    return arr.indexOf(s)
 }

// 7)

const e7 = (arr=[]) => {
    return arr.reverse()
}

// 8)

const e8 = (arr=[]) => {
    if (arr.length >= 5 && arr.length <= 10){
      return arr.reverse()  
    }
    return arr
}

// 9)

const e9 = (arr=[],n) => {
    if (arr.includes(n)){
        arr.reverse().shift()
        return arr
    }
    return arr
}

// 10)

const e10_array_Clone = (arr) => {
    let arr2 = [...arr]
    return arr2

}

// 11)

const e11 = (arr=[],n) => {
    if (n != null){
        return arr.splice(0,n)
    }
    return arr
}

// 12)

const e12 = (arr=[],n) => {
    if (n != null){
        return arr.splice(-n)
    }
    return arr
}

// 13)

const e13 = (arr=[]) => {
    if (arr[0] == arr[arr.length-1]){
        return true 
    }
    return false
}

// 14)

const e14 = (arr=[]) => {
    if (arr[0] == arr[arr.length-1]){
        return arr.length - 2 
    }
    return false
}

