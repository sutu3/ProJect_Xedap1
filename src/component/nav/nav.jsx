import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"; // Đảm bảo import file CSS vào component

const Nav = () => {
  const location = useLocation();
  const [display, setDisplay] = useState(true);
  const [display1, setDisplay1] = useState(true);
  const handleResize = () => {
    if (window.innerWidth < 500) {
      console.log(window.innerWidth)
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  useEffect(() => {
    handleResize(); // Kích hoạt ngay sau khi component render

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Xóa sự kiện khi component unmount
    };
  }, []); // Sử dụng dependency array rỗng để chỉ kích hoạt một lần sau khi render

  return (
    <div className="Nav">
      <div className="img"></div>
      <>
        <div className="image" style={{ display: display ? "flex" : "none" }}>
          <img
            onClick={() => {
              setDisplay1(!display1);
            }}
            src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small/bullet-menu-icon-free-vector.jpg"
            alt=""
          />
          <div
            className="list"
            style={{ display: display1 ? "none" : "block" }}
          >
            <ul className="nav1">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <li> Trang chủ</li>
              </Link>
              <Link to="/product">
                <li>Giới thiệu</li>
              </Link>
              <Link>
                <li>Sản Phẩm</li>
              </Link>
              {location.pathname === "/" && (
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({
                      top: 4600,
                      behavior: "smooth",
                    });
                  }}
                >
                  <li>Đăng Nhập</li>
                </Link>
              )}
              {location.pathname.split("/")[1] === "Admin" && (
                <Link to="/Admin/TaiKhoan">
                  <li>Tài Khoản</li>
                </Link>
              )}
              {location.pathname.split("/")[1] === "User" && (
                <Link to="/User/TaiKhoan">
                  <li>Tài Khoản</li>
                </Link>
              )}
              <li>
                <input type="text" placeholder="Enter KeyWords"></input>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDisplay1(!display1);
                  }}
                >
                  Thoát
                </button>
              </li>
            </ul>
          </div>
        </div>
        <ul className="nav2" style={{ display: !display ? "flex" : "none" }}>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <li> Trang chủ</li>
          </Link>
          <Link>
            <li>Giới thiệu</li>
          </Link>
          <Link to='/product'>
            <li>Sản Phẩm</li>
          </Link>
          {location.pathname === "/" && (
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 4600,
                  behavior: "smooth",
                });
              }}
            >
              <li>Đăng Nhập</li>
            </Link>
          )}
          {location.pathname.split("/")[1] === "Admin" && (
            <Link to="/Admin/TaiKhoan">
              <li>Tài Khoản</li>
            </Link>
          )}
          {location.pathname.split("/")[1] === "User" && (
            <Link to="/User/TaiKhoan">
              <li>Tài Khoản</li>
            </Link>
          )}
          <li>
            <input type="text" placeholder="Enter KeyWords"></input>
          </li>
        </ul>
      </>
    </div>
  );
};

export default Nav;
