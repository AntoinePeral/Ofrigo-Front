export const TOGGLE_FILTER_OPEN = "TOGGLE_FILTER_OPEN";
export const RESET_NUMBER_FILTER = "RESET_NUMBER_FILTER";
export const UPDATE_FILTER = "UPDATE_FILTER"
export const SAVE_TAGS = "SAVE_TAGS";
export const FETCH_TAG = "FETCH_TAG"

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

export const saveTags = (tags) => ({
    type: SAVE_TAGS,
    tags
});

export const FetchTags = () => ({
    type: FETCH_TAG
});



  