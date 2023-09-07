export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Simple header
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Features
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-pricing-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-pricing"
                type="button"
                role="tab"
                aria-controls="pills-pricing"
                aria-selected="false"
              >
                Pricing
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-faqs-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-faqs"
                type="button"
                role="tab"
                aria-controls="pills-faqs"
                aria-selected="false"
              >
                FAQs
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-about-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-about"
                type="button"
                role="tab"
                aria-controls="pills-about"
                aria-selected="false"
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
