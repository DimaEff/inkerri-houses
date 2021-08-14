import {createSelector} from "reselect";


export const getStateHouses = (state) => state.houses.houses;

export const getPrices = (state) => state.houses.prices;
export const getSquares = (state) => state.houses.squares;

const housesFilter = (houses, filterValues) => {
    const filterHouses = houses
        .filter(house => {
            return (house.minPrice >= filterValues.minPrice && house.maxPrice >= filterValues.minPrice) ||
                (house.minPrice <= filterValues.maxPrice && house.maxPrice <= filterValues.maxPrice)
        })
        .filter(house => (house.totalArea >= filterValues.minSquares) && (house.totalArea <= filterValues.maxSquares))
        .filter(house => {
            switch (filterValues.bedRooms) {
                case 'all':
                    return true;
                case '5+':
                    return house.bedRooms >= 5;
                default:
                    return +filterValues.bedRooms === house.bedRooms;

            }
        })
        .filter(house => {
            switch (filterValues.bathRooms) {
                case 'all':
                    return true;
                case '4+':
                    return house.bathRooms >= 4;
                default:
                    return +filterValues.bathRooms === house.bathRooms;

            }
        })
        .filter(house => {
            switch (filterValues.floors) {
                case 'all':
                    return true;
                default:
                    return filterValues.floors === house.floors;

            }
        })

    return filterHouses;
}

export const getFilterHousesValues = (state) => state.houses.filterValues;

export const getFilterHouses = createSelector(getStateHouses, getFilterHousesValues,
    (houses, filterValues) => {
        let filterHouses = houses;

        if (filterValues && Object.keys(filterValues).length === 1 && filterValues.floors) {
            filterHouses = filterHouses.filter(house => {
                switch (filterValues.floors) {
                    case 'all':
                        return true;
                    default:
                        return filterValues.floors === house.floors;

                }
            })
        } else if (filterValues && Object.keys(filterValues).length > 1) {
            filterHouses = housesFilter(filterHouses, filterValues);
        }

        return filterHouses;
})