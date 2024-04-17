import "./Category.css";

 function Category() {
  return(
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Hightop
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Lows
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Designer
        </label>
      </div>
    </div>
     
  );
  
}

export default Category;