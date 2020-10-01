import { useMutation, useQuery } from '@apollo/client';
import React, { createRef } from 'react';
import './App.css';
import { createMessageMutation, getAllMessages,  } from './gqlSchema';

function App() {
  const messageValue = createRef()
  const [addMessage] = useMutation(createMessageMutation)
  const {data, error, loading} = useQuery(getAllMessages);
  // console.log("data", data, "error", error)

  const submit = () => {
    let message = messageValue.current.value;
    addMessage({variables: {data: {message}}})
    .then(data => {
      console.log("response", data)
    }).catch(error => {
      console.log("error", error)
    })
  }
  return (
    <div className="App">
      <input ref={messageValue} placeholder="Your message..."/>
      <button onClick={submit}>Add</button>

    </div>
  );
}

export default App;
