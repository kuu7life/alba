function InputSecond({services}) {
  return (
    <div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-10 mb-3">
            <select className="form-control" id="exampleFormControlSelect1">
              {services.map((item) => {
                return <option key={item.serviceId}>{item.title}</option>;
              })}
            </select>
          </div>
          <div className="col-md-1 mb-3">
            <input type="number" className="form-control" />
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
