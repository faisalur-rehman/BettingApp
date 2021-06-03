import React from "react";
import "./Football_Body.css";
import first_img from "../../../assets/img/1.png";
import sec_image from "../../../assets/img/2.png";
import third_image from "../../../assets/img/3.svg";

const Football_Body = () => {
  return (
    <div class="standing">
      <div class="container">
        <div class="col-md-8 mx-auto">
          <div class="standing-list-cover">
            <div class="standing-team-list">
              <h4 class="result-title text-left">COMPETITIONS</h4>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                          <a href="leagues.html">
                            <img src={first_img} alt="" />
                          </a>
                        </span>
                        <span class="text-center">
                          <a href="">Champions League</a>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                      <a href="">0 Matches Active</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                          <a href="#">
                            <img src={sec_image} alt="" />
                          </a>
                        </span>
                        <span class="text-center">
                          <a href="#">Premier League</a>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                      <a href="#">0 Matches Active</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                          <a href="#">
                            <img src={third_image} alt="" />
                          </a>
                        </span>
                        <span class="text-center">
                          <a href="#">La Liga</a>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                      <a href="#">0 Matches Active</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                          <a href="leagues.html">
                            <img src={first_img} alt="" />
                          </a>
                        </span>
                        <span class="text-center">
                          <a href="">Champions League</a>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                      <a href="">0 Matches Active</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                          <a href="#">
                            <img src={sec_image} alt="" />
                          </a>
                        </span>
                        <span class="text-center">
                          <a href="#">Premier League</a>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                      <a href="#">0 Matches Active</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="single-team">
                        <span class="logo">
                          <a href="#">
                            <img src={third_image} alt="" />
                          </a>
                        </span>
                        <span class="text-center">
                          <a href="#">La Liga</a>
                        </span>
                      </span>
                    </td>
                    <td class="text-right">
                      <a href="#">0 Matches Active</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Football_Body;
