import { useRef, useContext } from "react";
import FavoritesContext from "../store/appcontext";

function InputSecond({ services }) {
  const favContext = useContext(FavoritesContext);
  const credits = useRef();
  const serviceId = useRef();

  function Onchange() {
    favContext.credits[1]["credits"] = credits.current.value;
    favContext.credits[1].serviceIds = serviceId.current.value;
  }
  return (
    <div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-10 mb-3">
            <select className="form-control" id="exampleFormControlSelect1">
              {services.map((item) => {
                return (
                  <option key={item.serviceId} ref={serviceId}>
                    {item.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-1 mb-3">
            <input
              onChange={Onchange}
              type="number"
              className="form-control"
              ref={credits}
            />
          </div>
          <div className="col-md-1 mb-3">
            <small className="text-muted">Courses</small>
          </div>
        </div>
      </div>
      <div className="col-md-10 my-2 form-group">
        <select className="form-control">
          {services.map((item) => {
            return <option key={item.serviceId}>{item.title}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default InputSecond;
