export default function ImageOfProductInput() {
  return (
    <div className="mb-4">
      <label htmlFor="imageOfProduct" className="form-label">
        Image Of Product
      </label>
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile01"
          style={{ color: "#0D6EFD", borderColor: "#0D6EFD" }}
        />
      </div>
    </div>
  );
}
