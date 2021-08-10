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

// export const filterHouses = (filterData, houses) => {
//     let result;
//
//     if (filterData.)
// }
