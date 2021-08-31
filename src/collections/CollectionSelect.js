import { createSelector } from "reselect";

const selectCollection = state =>state.collectionReducer;
export const CollectionSelect = createSelector(
    [selectCollection],
    collection => collection
)
