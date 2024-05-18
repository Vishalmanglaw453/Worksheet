import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import thefirm from "../assets/images/the-firm.png";
import dompong from "../assets/images/dompong.png";
import exculsive from "../assets/images/exculsive-games.png";
import compnay from "../assets/images/compnay.png";
import noblemind1 from "../assets/images/noble-mind1.png";
import noblemind2 from "../assets/images/noble-mind2.png";
import evergreen from "../assets/images/ever-green.png";
import julian from "../assets/images/julian.png";

import labs from "../assets/images/games.png";
import { jan } from "./Helper";
import { feb } from "./Helper";
import { march } from "./Helper";
import { april } from "./Helper";
import { may } from "./Helper";
import {Completedtsk} from "./Helper"

const Worksheet = () => {
  const [ActiveKey, setActiveKey] = useState("nav1");
  useEffect(() => {
    setActiveKey("nav1");
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className=" text-center my-5">WORKSHEET - 2024</h1>

        <p className=" text-uppercase text-end">vishal manglaw</p>
        <p className=" text-uppercase text-end">id :- 453</p>

        <div className="row">
          <div className="col-lg-3 col-12">
            <div className=" d-flex flex-lg-column  flex-row   overflow_scroll gap-4">
              <button
                className={`${
                  ActiveKey === "nav1"
                    ? "bg-black text-white "
                    : "bg-transparent"
                }  nav_btn  `}
                onClick={() => setActiveKey("nav1")}
              >
                January
              </button>
              <button
                className={`${
                  ActiveKey === "nav2"
                    ? " bg-black text-white "
                    : "bg-transparent"
                }    nav_btn `}
                onClick={() => setActiveKey("nav2")}
              >
                february
              </button>
              <button
                className={`${
                  ActiveKey === "nav3"
                    ? " bg-black text-white "
                    : "bg-transparent"
                }    nav_btn `}
                onClick={() => setActiveKey("nav3")}
              >
                March
              </button>
              <button
                className={`${
                  ActiveKey === "nav4"
                    ? " bg-black text-white "
                    : "bg-transparent"
                }    nav_btn `}
                onClick={() => setActiveKey("nav4")}
              >
                April
              </button>
              <button

                className={`${
                  ActiveKey === "nav5"
                    ? " bg-black text-white "
                    : "bg-transparent"
                }    nav_btn `}
                onClick={() => setActiveKey("nav5")}
              >
                may
              </button>
              <button
                className={`${
                  ActiveKey === "nav6"
                    ? " bg-black text-white "
                    : "bg-transparent"
                }    nav_btn `}
                onClick={() => setActiveKey("nav6")}
              >
              Completed task
              </button>
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <div
              className={`${
                ActiveKey === "nav1" ? "  d-block    " : "  d_none"
              }  `}
            >
              {jan.map((data, index) => (
                <>
                  <div className="row">
                    <div className="col-sm-4 mt-3">
                      <img className=" w-100" src={data.img} alt="" />
                    </div>
                    <div className="col-sm-8 mt-4">
                      <h2 className=" mb-0">
                        Github-link -:
                        <a target="blank" href={data.gitlink1}>
                          {data.gitlink1}
                        </a>
                      </h2>
                      <p className=" mb-0 pt-3">
                        Live-link-:
                        <a target="blank" href={data.livelink1}>
                          {data.livelink1}
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div
              className={`${
                ActiveKey === "nav2" ? "  d-block    " : "  d_none"
              }  `}
            >
              {feb.map((data, index) => (
                <>
                  <div className="row">
                    <div className="col-sm-4 mt-3">
                      <img className=" w-100" src={data.img} alt="" />
                    </div>
                    <div className="col-sm-8 mt-4">
                      <h2 className=" mb-0">
                        Github-link -:
                        <a target="blank" href={data.gitlink1}>
                          {data.gitlink1}
                        </a>
                      </h2>
                      <p className=" mb-0 pt-3">
                        Live-link-:
                        <a target="blank" href={data.livelink1}>
                          {data.livelink1}
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              className={`${
                ActiveKey === "nav3" ? "  d-block    " : "  d_none"
              }  `}
            >
              {march.map((data, index) => (
                <>
                  <div className="row">
                    <div className="col-sm-4 mt-3">
                      <img className=" w-100" src={data.img} alt="" />
                    </div>
                    <div className="col-sm-8 mt-4">
                      <h2 className=" mb-0">
                        Github-link -:
                        <a target="blank" href={data.gitlink1}>
                          {data.gitlink1}
                        </a>
                      </h2>
                      <p className=" mb-0 pt-3">
                        Live-link-:
                        <a target="blank" href={data.livelink1}>
                          {data.livelink1}
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              className={`${
                ActiveKey === "nav4" ? "  d-block    " : "  d_none"
              }  `}
            >
              {april.map((data, index) => (
                <>
                  <div className="row ">
                    <div className="col-sm-4 mt-3">
                      <img className=" w-100" src={data.img} alt="" />
                    </div>
                    <div className="col-sm-8 mt-4">
                      <h2 className=" mb-0">
                        Github-link -:
                        <a target="blank" href={data.gitlink1}>
                          {data.gitlink1}
                        </a>
                      </h2>
                      <p className=" mb-0 pt-3">
                        Live-link-:
                        <a target="blank" href={data.livelink1}>
                          {data.livelink1}
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              className={`${
                ActiveKey === "nav5" ? "  d-block    " : "  d_none"
              }  `}
            >
              {may.map((data, index) => (
                <>
                  <div className="row ">
                    <div className="col-sm-4 mt-3">
                      <img className=" w-100" src={data.img} alt="" />
                    </div>
                    <div className="col-sm-8 mt-4">
                      <h2 className=" mb-0">
                        Github-link -:
                        <a target="blank" href={data.gitlink1}>
                          {data.gitlink1}
                        </a>
                      </h2>
                      <p className=" mb-0 pt-3">
                        Live-link-:
                        <a target="blank" href={data.livelink1}>
                          {data.livelink1}
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              className={`${
                ActiveKey === "nav6" ? "  d-block    " : "  d_none"
              }  `}
            >
              {Completedtsk.map((data, index) => (
                <>
                  <div className="row ">
                    <div className="col-sm-4 mt-3">
                      <h2>{data.use}</h2>
                    </div>
                    <div className="col-sm-8 mt-4">
                      <h2 className=" mb-0">
                        Github-link -:
                        <a target="blank" href={data.gitlink1}>
                          {data.gitlink1}
                        </a>
                      </h2>
                      <p className=" mb-0 pt-3">
                        Live-link-:
                        <a target="blank" href={data.livelink1}>
                          {data.livelink1}
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worksheet;
