import {resultsAuction} from "../../API/api";

const initState = []

export const resultsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET-RESULTS':
      return action.results.map(res => ({...res}))
    default:
      return state
  }
}

export const setResultsAC = (results) => ({
  type: 'SET-RESULTS',
  results
});

export const fetchResultsAuction = () => async (dispatch) => {
  try {
    const res = await resultsAuction.getResults()
    dispatch(setResultsAC(res.data))
  } catch (err) {
    console.log(err)
  }
}

