import Comments from "./components/comments";
import InfiniteScroll from "./components/InfiniteScroll";
import ProgressBar from "./components/ProgressBar";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Comments />
      {/* <InfiniteScroll /> */}
      <ProgressBar />
      <Tabs />
    </div>
  );
}

export default App;
