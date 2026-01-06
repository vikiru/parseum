function NavBar({ saveMarkdown, clearMarkdown }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="btn btn-circle btn-ghost" role="button" tabIndex={0}>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <ul className="menu dropdown-content menu-sm z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <a href="https://vikiru.github.io/parseum/">Documentation</a>
            </li>
            <li>
              <a href="https://vikiru.github.io/parseum/syntax/">Supported Syntax</a>
            </li>
            <li>
              <a href="https://github.com/vikiru/parseum">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Parseum</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-circle btn-ghost" onClick={saveMarkdown} title="Save Markdown">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path d="M14 3v5a1 1 0 001 1h5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M17 11l2 2m-2-2v4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
        <button className="btn btn-circle btn-ghost" onClick={clearMarkdown} title="Clear Markdown">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
