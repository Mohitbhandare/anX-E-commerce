/* eslint-disable react/prop-types */
import './SearchPopup.css';

function SearchPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="inner-popup">
        <button className="btn-close" onClick={() => props.setTrigger(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="15px"
            height="15px"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </button>
        <div className="search-input">
          <input
            className="search-input"
            type="search"
            placeholder="search"
            value={props.setSearch}
            onChange={(e) => props.setSearchTrigger(e.target.value)}
          />
          {/* TODO:condition has to give to process */}
          <div className="search-data">No Search Data</div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default SearchPopup;
