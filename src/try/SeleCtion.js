import {createSelector} from 'reselect';

const selectrole = state =>state.toggleCartHidden;

export const selectOne = createSelector(
    [selectrole],
    role =>role.role
)