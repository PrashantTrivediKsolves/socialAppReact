const SideBarComponents = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center m
        
        b-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            handleOnClick("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            handleOnClick("CreatePost");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "CreatePost" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            createPost
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default SideBarComponents;
