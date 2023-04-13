import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slice/post';
import { useNavigate } from 'react-router-dom';
import '../App.css';
function Posts({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  if (state.post.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!state.post.data) {
    dispatch(fetchPosts());
  }

  return (
    <div className="App">
      <h1>Posts by {state.user.data[id - 1].name}</h1>
      <button
        className="primary"
        onClick={() => {
          navigate('/');
        }}
      >
        List of users
      </button>
      {state.post.data &&
        state.post.data
          .filter((e) => e.userId === id)
          .map((e) => (
            <ul
              className="list-posts"
              key={e.userId.toString() + e.id.toString()}
            >
              <li className="title-post" key={e.id}>
                {e.title}
              </li>
              <li key={e.id.toString() + e.body.toString()}>{e.body}</li>
            </ul>
          ))}
    </div>
  );
}

export default Posts;
