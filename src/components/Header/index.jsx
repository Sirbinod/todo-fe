import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div className="bg-[#1A2238] py-6">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/">
            {" "}
            <div className="text-2xl font-bold text-white">To-Do</div>
          </Link>
          {data ? (
            <Link to={`/create`}>
              <button className="text-white rounded py-2 px-4 border-2 text-base font-semibold">
                Add Todo
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
