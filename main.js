module.exports = function (array) {  
    // вспомогательный код 
    
    let newArr = [];
    for (let item = 0; item < array.length; item++) {
        if (!(newArr.includes(array[item]))) newArr.push(array[item])
    }

    let setObject = {
        add (item){
            if( !newArr.includes(item) ) {
                newArr.push(item);
            }
            return this
        },

        delete(elem){
            for ( let i = 0; i <= newArr.length; i++){
            
                //проверка на NaN
                if ( (elem === elem) === false ){
                    if ( (newArr[i] === newArr[i]) === false ){
                        newArr.splice(i, 1)
                        return true
                    }
                }

                //обычная проверка
                else if ( newArr.includes(elem) ){
                    let elemArrNum = newArr.indexOf(elem)
                    newArr.splice(elemArrNum, 1)
                    return true
                }
        
                else {
                    return false
                }
            }
        },

        has (item) {
            return newArr.includes(item)
        }, 
        
        clear () {
            newArr = [];
            return true
        },

        get size() {
            return newArr.length;
        },
    }
    
    // реализация
    return setObject
}
