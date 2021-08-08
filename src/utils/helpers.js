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

export const getPriceTemplate = (minPrice, maxPrice) => {
    const min = minPrice.toString().split( /(?=(?:...)*$)/ ).join(' ');
    const max = maxPrice.toString().split( /(?=(?:...)*$)/ ).join(' ');

    return `${min} - ${max}`;
}

export const getMinMaxArrValue = (arr, prop, type) => {
    const propArr = arr.map(a => a[prop]);

    let result = [];

    if (type === 'min' || 'all') result.push(Math.min(...propArr))
    if (type === 'max' || 'all') result.push(Math.max(...propArr))

    return result;
}