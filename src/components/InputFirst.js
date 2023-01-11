import { useRef, useContext } from "react";
import FavoritesContext from "../store/appcontext";

function InputFirst({ services }) {
  const favContext = useContext(FavoritesContext);
  const credits = useRef();
  const serviceId = useRef();

  function Onchange() {
    favContext.credits[0]["credits"] = credits.current.value;
    favContext.credits[0].serviceIds = serviceId.current.value;
  }

  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-10 mb-3">
          <select className="form-control" id="exampleFormControlSelect1">
            {services.map((item) => {
              return (
                <option
                  key={item.serviceId * 2}
                  ref={serviceId}
                >
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
        <div className="col-md-1">
          <small className="text-muted">Hours</small>
        </div>
      </div>
    </div>
  );
}

export default InputFirst;
