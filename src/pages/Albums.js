import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../redux/slice/album';
import '../App.css';
function Albums({ modal, setModal, albumNumber }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (state.album.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!state.album.data) {
    dispatch(fetchAlbums());
  }

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="title-albums">
              <div>Albums by {state.user.data[albumNumber - 1].name}</div>
              <div
                className="close-modal"
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </div>
            </div>
            {state.album.data &&
              state.album.data
                .filter((e) => e.userId === albumNumber)
                .map((e) => (
                  <ul key={e.userId.toString() + e.id.toString()}>
                    <li key={e.id}>{e.title}</li>
                  </ul>
                ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Albums;
