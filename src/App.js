// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./components/layouts/Layout";
import InnerLayout from "./components/layouts/InnerLayout";
import InputSecond from "./components/InputSecond";
import InputFirst from "./components/InputFirst";
import FavoritesContext from "./store/appcontext";
import { useContext, useRef, useState } from "react";

const services = [
  { serviceId: 1, title: "Personal training", price: 5000 },
  { serviceId: 2, title: "Diet consulting", price: 4000 },
  { serviceId: 3, title: "Sport massage", wage: 6500 },
  { serviceId: 4, title: "Adobe Premier", wage: 7000 },
  { serviceId: 5, title: "Lightroom", wage: 7400 },
  { serviceId: 7, title: "Adobe Photoshop", wage: 3999 },
];

function App() {
  const appcontext = useContext(FavoritesContext);

  const title = useRef();
  function Onchange() {
    appcontext.subscription.title = title.current.value;
  }

  const [components, setComponents] = useState([
    <InputFirst services={services} key={1} />,
  ]);

  const handleAddFirstClick = () => {
    setComponents([
      ...components,
      <InputFirst services={services} key={components.length + 1} />,
    ]);
  };

  function Save(e) {
    e.preventDefault();
    console.log(appcontext);
  }

  return (
    <Layout>
      <form className="p-5" style={{ border: "1px solid gray" }}>
        <h3 className="text-primary">Subscription</h3>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input onChange={Onchange} type="email" className="form-control" ref={title} />
        </div>
        <hr className="hr mt-5" />
        <h4 className="text-muted">Including</h4>
        <InnerLayout>
          <InputFirst services={services} />
          {components.map((component, index) => component)}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={handleAddFirstClick}
              className="my-2 btn btn-outline-primary"
            >
              add
            </button>
          </div>
        </InnerLayout>
        <InnerLayout>
          <InputSecond services={services} />
          <div className="d-flex justify-content-center">
            <button className="my-2 btn btn-outline-primary rounded">
              Add
            </button>
          </div>
        </InnerLayout>
        <button className="btn btn-lg btn-primary">Add+</button>
        <hr className="hr" />
        <div className="text-right">
          <button
            type="button"
            className="float-right mx-2 btn btn-outline-secondary"
          >
            Cancel
          </button>
          <button
            onClick={Save}
            type="button"
            className="float-right mx-2 btn btn-primary"
          >
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default App;
