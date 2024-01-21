import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <div className="d-flex flex-column">
        {/* //!Absulote path (tam adres vermek) */}
        <Link to={"/instructors/1"}>Instructor1</Link>
        {/* //!Relative Path (goreceli adres vermek) */}
        <Link to="2">Instructor2</Link>
        <Link to={"3"}> Instructor3</Link>
      </div>
    </div>
  );
};

export default Instructors;
