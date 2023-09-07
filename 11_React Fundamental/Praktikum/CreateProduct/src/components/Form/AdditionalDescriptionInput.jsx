export default function AdditionalDescriptionInput() {
  return (
    <div className="mb-4">
      <label htmlFor="additionalDescription" className="form-label">
        Additional Description
      </label>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          style={{ height: 116, width: "100%" }}
          defaultValue={""}
        />
        <label htmlFor="floatingTextarea" />
      </div>
    </div>
  );
}
