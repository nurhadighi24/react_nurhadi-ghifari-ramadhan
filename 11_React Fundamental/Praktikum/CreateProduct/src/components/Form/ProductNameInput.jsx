export default function ProductNameInput() {
  return (
    <div className="mb-4">
      <label htmlFor="productName" className="form-label">
        Product Name
      </label>
      <input
        type="text"
        className="form-control"
        id="productName"
        aria-describedby="emailHelp"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-title="Enter Product Name"
        defaultValue=""
        required=""
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
}
