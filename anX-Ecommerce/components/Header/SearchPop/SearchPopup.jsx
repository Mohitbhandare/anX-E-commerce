/* eslint-disable react/prop-types */
import './SearchPopup.css';

function SearchPopup(props) {
  return props.trigger ? (
    <div>
      <input type="search" />
      <button>close</button>
    </div>
  ) : (
    ''
  );
}

export default SearchPopup;
