import { createSelector } from "reselect";


const selectDirectory = state => state.directoryReducer;
console.log(selectDirectory)
export const DirectorySelect = createSelector(
    [selectDirectory],
    directory => directory
)
console.log(DirectorySelect)

