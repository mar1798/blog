import React, {useEffect} from 'react';
import {useActions} from "./hooks/useActions";

function App() {
  const {getPostsFetch} = useActions()

  useEffect(()=>{
    getPostsFetch()
  }, [getPostsFetch])


  return (
    <h1>hello</h1>
  );
}

export default App;
