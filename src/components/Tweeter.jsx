import { useContext } from "react";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import { TweetContext } from "../providers/TweetProvider";
function Tweeter() {
  const { error, loading } = useContext(TweetContext);

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      {error && <ErrorPage message={error} />}

      <Home className="home" />
    </>
  );
}
export default Tweeter;
