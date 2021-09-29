import React, {useEffect} from "react";
import {MainPage} from "./components/MainPage/MainPage";
import './App.css';
import {fetchResultsAuction} from "./redux/reducers/resultsReducer";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const results = useSelector(state => state.results)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResultsAuction())
  }, [])

  return (
    <div className="App">
      <MainPage results={results}/>
    </div>
  );
}

export default App;
