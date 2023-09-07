export default function ProductPriceInput() {
  return (
    <div className="mb-4">
      <label htmlFor="productPrice" className="form-label">
        Product Price
      </label>
      <div id="alertMessagePrice" />
      <input
        type="text"
        className="form-control"
        id="productPrice"
        aria-describedby=""
        placeholder="$ 1"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-title="Enter Product Price"
        pattern="[0-9]+"
        required=""
      />
    </div>
  );
}
