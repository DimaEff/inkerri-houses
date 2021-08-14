export const getFloorTitle = (floorsNumber) => {
    switch (floorsNumber) {
        case '1':
            return 'Одноэтажные дома';

        case '1.5' || '1,5':
            return 'Дома с мансардным этажем';

        case '2':
            return 'Двухэтажные дома';

        default:
            return '';
    }
}

export const getStringPrice = (price) => {
    return price?.toString().split( /(?=(?:...)*$)/ ).join(' ');
}

export const getPriceTemplate = (minPrice, maxPrice) => {
    const min = getStringPrice(minPrice);
    const max = getStringPrice(maxPrice);

    return `${min} - ${max} ₽`;
}

export const getMinMaxArrValue = (arr, prop, type) => {
    const propArr = arr.map(a => a[prop]);

    let result = [];

    if (type === 'min' || type === 'all') result.push(Math.min(...propArr))
    if (type === 'max' || type === 'all') result.push(Math.max(...propArr))

    return result;
}

export const splitArray = (array, size) => {
    const subarray = [];

    for (let i = 0; i <Math.ceil(array.length/size); i++){
        subarray[i] = array.slice((i*size), (i*size) + size);
    }

    return subarray;
}

export const getDateTemplate = (date) => {
    let day = date.getDate().toString();
    let month = (+date.getMonth() + 1).toString();
    const year = date.getFullYear().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${day}.${month}.${year}`;
}

export const toNumber = (str) => {
    if (typeof str === 'number') return str;

    return +str.split(',').join('.');
}

// export const filterHouses = (filterData, houses) => {
//     let result;
//
//     if (filterData.)
// }
