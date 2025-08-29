import Profile from "./components/Profile";
import RepoList from "./components/RepoList";

function App() {
  return(
    <div>
      <>
        <Profile userName={'umfrancisco'} />
        <RepoList userName={'umfrancisco'} />
      </>
    </div>
  )
}

export default App
