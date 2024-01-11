export const tokenize = (string) =>{
    return string.split('/');
}

export const toIntArray = (stringArray) =>{
    let intArray=[];
    stringArray.forEach(element => {
        intArray.push(parseInt(element));
    });

    return intArray;
}

const allNumbers = (intArray) =>{
    let allNums = true;
    intArray.forEach(element => {
        if (isNaN(element)) {
            allNums = false;
        }
    });

    return allNums;
}

const allRealNumbers = (intArray) =>{
    let allReal = true;
    intArray.forEach(element => {
        if (element <=0) {
            allNums = false;
        }
    });
    return allReal;
}

const validDateFormat = (intArray) =>{
    return intArray.length === 3;
}

const validYear = (year) =>{
    return year  >=1900 && year <= 2099;
}

const validMonth = (month) =>{
    return month >0 && month <= 12;
}

const validDay = (day, month, isLeap) =>{
    if(month === 2) {
        if(isLeap) {
            return day <=29;
        } else {
            return day <=28;
        }
    }
    if (month%2 != 0) {
        if(month <= 7) {
            return day <=31;
        } else {
            return day <=30;
        }
    }

    if (month %2 ===0) {
        if (month <=6) {
            return day <=30;
        } else {
            return day <=31;
        }
    }
}

const isLeap = (year) =>{
    return (year%4 ===0 && year%100 != 0 ) || (year %100===0 && year % 400 != 0);
}

export const validDate = (intArray)=>{
    const year = intArray[2];
    const month = intArray[1];
    const day = intArray[0];
    return allNumbers(intArray) && 
        allRealNumbers(intArray) && 
        validDateFormat(intArray) && 
        validYear(year) && 
        validMonth(month) && 
        validDay(day, month, isLeap(year));
}
