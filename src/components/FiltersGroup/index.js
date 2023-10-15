import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    onSearch,
    ratingsList,
    onTapCategory,
    onTapStars,
    onTapClear,
  } = props
  const onSearchinput = event => {
    onSearch(event.target.value)
  }
  const onClickCategory = event => {
    onTapCategory(event.target.value)
  }
  const onClickStars = event => {
    onTapStars(event.target.id)
  }
  const onClickClear = () => {
    onTapClear()
  }
  return (
    <div className="filters-group-container">
      <div>
        <div className="input-container">
          <input
            onChange={onSearchinput}
            className="inputEl"
            placeholder="Search"
            type="search"
          />
          <BsSearch />
        </div>
        <div>
          <h1 className="filter-heading1">Category</h1>
          <div className="category-container">
            {categoryOptions.map(each => (
              <button
                key={each.categoryId}
                type="button"
                onClick={onClickCategory}
                value={each.categoryId}
              >
                <p className="category-btn">{each.name}</p>
              </button>
            ))}
          </div>
        </div>
        <div>
          {ratingsList.map(each => (
            <div key={each.ratingId} className="stars-container">
              <button
                onClick={onClickStars}
                value={each.ratingId}
                type="button"
                className="category-btn"
              >
                <img
                  className="starts-img"
                  alt={`rating ${each.ratingId}`}
                  src={each.imageUrl}
                />
              </button>
              <p>&up</p>
            </div>
          ))}
        </div>
        <button onClick={onClickClear} type="button" className="clear-btn">
          Clear Filters
        </button>
      </div>
    </div>
  )
}
export default FiltersGroup
