export const TOGGLE_FILTER_OPEN = "TOGGLE_FILTER_OPEN";
export const RESET_NUMBER_FILTER = "RESET_NUMBER_FILTER";
export const UPDATE_FILTER = "UPDATE_FILTER"

export const toggleFilterOpen = () => ({
    type: TOGGLE_FILTER_OPEN,
  });

export const resetNumberFilter = () =>({
    type: RESET_NUMBER_FILTER,
});

export const udapteFilter = (filterTag, filterValue) =>({
    type : UPDATE_FILTER,
    filterTag, 
    filterValue,
    numberFilter: 1
});




  