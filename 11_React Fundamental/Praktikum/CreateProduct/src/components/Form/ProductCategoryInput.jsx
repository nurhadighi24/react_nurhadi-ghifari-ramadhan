export default function ProductCategoryInput() {
  return (
    <div className="mb-4">
      <label htmlFor="productCategory" className="form-label">
        Product Category
      </label>
      <select className="form-select" id="validationCustom04" required="">
        <option selected="" disabled="" value="">
          Choose...
        </option>
        <option>...</option>
      </select>
      <div className="invalid-feedback">Please select a valid state.</div>
    </div>
  );
}
