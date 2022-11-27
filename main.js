module.exports = function (array) {  
    // вспомогательный код 
    
    let arr = array;
    let newArr = [];
    for (let item = 0; item < arr.length; item++) {
        if (!(newArr.includes(arr[item]))) newArr.push(arr[item])
    }

    let setObject = {
        set: newArr,

        add (item) {
            newArr.push(item);
        },

        delete (item) {
            arr.splice(arr.indexOf(item), 1);
        },

        has (item) {
            return newArr.includes(item);
        }, 
        
        clear () {
            newArr = [];
        }
    }
    
    // реализация
    return setObject
}




