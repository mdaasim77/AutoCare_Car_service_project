import axios from "axios";
import { useEffect, useState } from "react";

export default function Customer() {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="customerpage">
        <div>
          <h6 className="hc">
            Home {">"} <b>Customers</b>
          </h6>
        </div>
        <div className=" row">
          <div className=" col-md-6 col-sm-6">
            <h6 className="mt-3 " id="hc">
              Customer Details
            </h6>
          </div>
          <div className="d-flex justify-content-end p-2 flex-wrap col-md-6 col-sm-6">
            <button className="me-2" id="exportbtn">
              Export
            </button>
            <button className="me-2 filter">Filter</button>
            <button className="me-2 filter">+ Add Customer</button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Mobile no.</th>
                <th scope="col">Email Id</th>
                <th scope="col">Reg Number</th>
                <th scope="col">Make</th>
                <th scope="col">Make Year</th>
                <th scope="col">Odometer (KM)</th>
                <th scope="col">Last Job</th>
                <th scope="col">Reminders</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="styling" scope="row">
                  1
                </th>
                <td className="styling">Mark</td>
                <td className="styling">12345678996</td>
                <td className="styling">mark123@gmail.com</td>
                <td className="styling">123654789632</td>
                <td className="styling">Lexus</td>
                <td className="styling">2018</td>
                <td className="styling">24523</td>
                <td className="styling">Insbr 24 Nov 2025</td>
                <td className="styling">Not sent</td>
                <td className="d-flex justify-conntent-between">
                  <div>
                    <button className="me-2 border rounded-3 border-dark">
                      Edit
                    </button>
                    <button className=" border rounded-3 border-dark">
                      Vehical
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
