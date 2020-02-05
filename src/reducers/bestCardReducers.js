export default (state = [], action) => {
    if (action.type === 'FETCH_BEST_CARD') {
        return action.payload;
    }
    return state;
}