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