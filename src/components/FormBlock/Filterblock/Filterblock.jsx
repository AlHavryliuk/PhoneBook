import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Filterblock.module.scss';
import { useDispatch } from 'react-redux';
import { setFilterKeyword } from 'store/filterReducer/filterSlice';

const Filterblock = ({ title }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const handleFilter = event => {
    const inputValue = event.target.value;
    setKeyword(inputValue);
    dispatch(setFilterKeyword(inputValue.toLowerCase()));
  };

  return (
    <form className={css.filteblock}>
      <label htmlFor="filterInput">{title}</label>
      <div className={keyword ? css.ActiveInputWrapper : css.inputWrapper}>
        <input
          type="text"
          id="filterInput"
          name="filter"
          value={keyword}
          onChange={handleFilter}
          placeholder="Enter keyword..."
        />
      </div>
    </form>
  );
};

Filterblock.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filterblock;
