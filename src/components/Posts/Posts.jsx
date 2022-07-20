import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import Post from "../Post/Post";
import { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className="Posts">
      {loading
        ? "Loading..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
