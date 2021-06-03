import React from "react";
import "./MyBets_Body.css";
import { Link } from "react-router-dom";

const MyBets_Body = () => {
  return (
    <section className="myBets">
      <div className="pt-4 pb-4">
        <div className="container">
          <h3 className="text-center mt-5">Hello Name here</h3>
          <div className="table-wrap">
            <table className="table table-dark table-hover table-striped mt-5 text-center table-bordered">
              <thead>
                <tr>
                  <th scope="col">Match</th>
                  <th scope="col">Bet Placed on Team</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount Won/Lost</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th>
                    <button className="btn">
                      <i className="fa fa-trash"></i>
                    </button>
                  </th>
                </tr>
                <tr>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th>
                    <button className="btn">
                      <i className="fa fa-trash"></i>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-center mt-5">Specials</h3>

          <div className="table-wrap">
            <table className="table table-dark table-hover table-striped mt-5 text-center table-bordered">
              <thead>
                <tr>
                  <th scope="col">Bet Description</th>
                  <th scope="col">Odds</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount Won/Lost</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th>
                    <button className="btn">
                      <i className="fa fa-trash"></i>
                    </button>
                  </th>
                </tr>
                <tr>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th scope="col">dummy</th>
                  <th>
                    <button className="btn">
                      <i className="fa fa-trash"></i>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-center mt-5">Accumulators</h3>

          <div className="table-wrap">
            <table className="table table-hover table-striped mt-5 text-center">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Total Odds</th>
                  <th scope="col">Number of Bets</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount Won/Lost</th>
                  <th scope="col">View</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">PSG</th>
                  <th scope="col">1.00</th>
                  <th scope="col">0</th>
                  <th scope="col">Cancelled</th>
                  <th scope="col">0000</th>
                  <th>
                    <Link className="btn" to="/accumulator_data">
                      <i className="fa fa-eye"></i>
                    </Link>
                  </th>
                  <th>
                    <button className="btn">
                      <i className="fa fa-trash"></i>
                    </button>
                  </th>
                </tr>
                <tr>
                  <th scope="col">PSG</th>
                  <th scope="col">1.00</th>
                  <th scope="col">0</th>
                  <th scope="col">Cancelled</th>
                  <th scope="col">0000</th>
                  <th>
                    <Link className="btn " to="/accumulator_data">
                      <i className="fa fa-eye"></i>
                    </Link>
                  </th>
                  <th>
                    <button className="btn">
                      <i className="fa fa-trash"></i>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyBets_Body;
