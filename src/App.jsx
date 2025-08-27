import { useState } from "react";
import Profile from "./components/Profile";
import RepoList from "./components/RepoList";

function App() {
  const [userName, setUserName] = useState('');
  return(
    <div>
      <input type="text" onBlur={(e) => setUserName(e.target.value)} placeholder="Type your username"/>
      {userName.length > 4 && (
        <>
          <Profile userName={userName} />
          <RepoList userName={userName} />
        </>
      )}
    </div>
  )
}

export default App
