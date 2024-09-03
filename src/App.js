import Comments from "./components/comments";
import InfiniteScroll from "./components/InfiniteScroll";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="App">
      <Comments />
      {/* <InfiniteScroll /> */}
      <ProgressBar />
    </div>
  );
}

export default App;
