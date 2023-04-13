import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slice/user';

import { useNavigate } from 'react-router-dom';
import Albums from './Albums';
import '../App.css';

function Home({ id, setId }) {
  console.log('Home');
  const [modal, setModal] = useState(false);
  const [albumNumber, setAlbumNumber] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  // I tried to fix
  // error: "Cannot update a component (`Home`) while rendering a different component (`Posts`)."
  // but the error still remained so i decided keep navigate('/posts'); in the button onClick
  // useEffect(() => {
  //   if (typeof response === 'object' && Object.keys(response).length === 0) {
  //     return;
  //   }
  //   navigate('/posts');
  // }, [response]);

  if (state.user.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="App">
        <button className="primary" onClick={(e) => dispatch(fetchUsers())}>
          Fetch users
        </button>
        {state.user.data &&
          state.user.data.map((e) => (
            <ul className="list" key={e.id}>
              <li key={e.name}>
                {e.id}. {e.name}
              </li>
              <div className="buttons">
                <button
                  key={e.id + 10}
                  onClick={() => {
                    navigate('/posts');
                    setId(e.id);
                  }}
                  className="firstly"
                >
                  Posts
                </button>
                <button
                  className="secondary"
                  onClick={() => {
                    setAlbumNumber(e.id);
                    setModal(!modal);
                  }}
                  key={e.id + 100}
                >
                  Albums
                </button>
              </div>
            </ul>
          ))}
      </div>
      <Albums modal={modal} setModal={setModal} albumNumber={albumNumber} />
    </div>
  );
}

export default Home;
