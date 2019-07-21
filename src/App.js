import React from 'react'
//import './__assets__/App.css'

function App() {
  return (
    <div className="App">
      <form className="App-form" action="/submit-feedback" target="form-response" method="post">
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text"/>
        </div>
        <label htmlFor="feedback">My feedback:</label>
        <textarea id="feedback" name="feedback"/>
        <div>
          <label htmlFor="emotion">This made me feel:</label>
          <select id="emotion" name="emotion">
            <option></option>
            <option>Happy</option>
            <option>Content</option>
            <option>Disappointed</option>
            <option>Angry</option>
          </select>
        </div>
        <div>
          <label htmlFor="send-email">Send me an email of my response:</label>
          <input id="send-email" name="send-email" type="checkbox"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <iframe title="form response" name="form-response"></iframe>
    </div>
  );
}

export default App
