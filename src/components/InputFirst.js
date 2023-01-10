function InputFirst({services }) {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-10 mb-3">
          <select className="form-control" id="exampleFormControlSelect1">
            {services.map((item) => {
              return <option key={item.serviceId * 2}>{item.title}</option>;
            })}
          </select>
        </div>
        <div className="col-md-1 mb-3">
          <input type="number" className="form-control" />
        </div>
        <div className="col-md-1">
          <small className="text-muted">Hours</small>
        </div>
      </div>
    </div>
  );
}

export default InputFirst;
