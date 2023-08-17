import PropTypes from 'prop-types';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(e.target.query.value);
      }}
    >
      <input
        type="text"
        autoFocus
        placeholder="Search movie"
        name="query" // добавили новое свойство в форму в children
        autoComplete="off"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
export default SearchForm;

SearchForm.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
