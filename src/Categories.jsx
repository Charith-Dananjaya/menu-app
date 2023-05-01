const Categories = ({ categories, fillterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => {
              fillterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
