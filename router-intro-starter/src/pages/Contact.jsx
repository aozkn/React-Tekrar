import { useNavigate } from "react-router";
//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

const Contact = () => {
  let navigate = useNavigate();
  return (
    <div className="p-3">
      <h1>Contact</h1>
      <button className="btn btn-success m-3" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <button className="btn btn-danger m-3" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default Contact;
