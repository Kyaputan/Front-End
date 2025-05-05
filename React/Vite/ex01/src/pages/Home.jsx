import { useState, useEffect } from "react";
import { Heart, Award, Users, Zap, Check, Star, Code } from "lucide-react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`about-page ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ transition: "opacity 0.8s ease-in" }}
    >
      {/* Hero Section with Parallax Effect */}
      <div className="position-relative mb-5 bg-dark text-white">
        <div
          className="parallax-bg"
          style={{
            height: "50vh",
            background:
              'url("src/assets/team-member1.jpg") center/cover no-repeat fixed',
            position: "relative",
          }}
        >
          <div
            className="position-absolute w-full h-full bg-black bg-opacity-50"
            style={{ top: 0, left: 0 }}
          ></div>
          <div className="container h-full d-flex flex-column justify-content-center align-items-center position-relative text-center">
            <h1 className="display-3 fw-bold mb-2">เกี่ยวกับเรา</h1>
            <p className="lead">
              เราคือผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์คุณภาพสูง
            </p>
            <div className="mt-4">
              <button className="btn btn-primary btn-lg me-2">ติดต่อเรา</button>
              <button className="btn btn-outline-light btn-lg">ดูผลงาน</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Company Introduction with Animation */}
        <section className="mb-5 py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 animate-fade-right">
              <div className="position-relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="src/assets/team-member1.jpg"
                  alt="เกี่ยวกับบริษัทของเรา"
                  className="img-fluid rounded"
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
                <div className="position-absolute bottom-0 end-0 bg-primary text-white p-3 rounded-tl-lg">
                  <p className="m-0 fw-bold">ก่อตั้งเมื่อ 2018</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-fade-left">
              <div className="border-start border-4 border-primary ps-4">
                <h2 className="display-5 fw-bold text-primary mb-3">
                  ประวัติความเป็นมา
                </h2>
              </div>
              <p className="lead text-dark">
                บริษัทของเราก่อตั้งขึ้นในปี 2018
                ด้วยวิสัยทัศน์ที่จะนำเสนอบริการพัฒนาเว็บไซต์ที่มีคุณภาพสูงในราคาที่เหมาะสม
              </p>
              <p className="text-muted">
                เรามีทีมงานผู้เชี่ยวชาญที่มีประสบการณ์กว่า 10 ปีในอุตสาหกรรมนี้
                เรามุ่งมั่นที่จะมอบประสบการณ์การใช้งานที่ยอดเยี่ยมให้กับลูกค้าของเรา
                ด้วยการรวมเทคโนโลยีล่าสุดและการออกแบบที่ทันสมัย
              </p>
              <p className="text-muted mb-4">
                เราเชื่อว่าเว็บไซต์ที่ดีไม่เพียงแค่สวยงาม
                แต่ยังต้องใช้งานได้ง่ายและตอบสนองความต้องการทางธุรกิจของลูกค้าอีกด้วย
              </p>

              <div className="d-flex flex-wrap">
                <div className="me-4 mb-3 d-flex align-items-center">
                  <span className="bg-success rounded-circle d-flex align-items-center justify-content-center p-2 me-2">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>เทคโนโลยีล่าสุด</span>
                </div>
                <div className="me-4 mb-3 d-flex align-items-center">
                  <span className="bg-success rounded-circle d-flex align-items-center justify-content-center p-2 me-2">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>การออกแบบที่ทันสมัย</span>
                </div>
                <div className="me-4 mb-3 d-flex align-items-center">
                  <span className="bg-success rounded-circle d-flex align-items-center justify-content-center p-2 me-2">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>ทีมงานมืออาชีพ</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Counter */}
        <section className="mb-5">
          <div className="bg-primary text-white p-5 rounded-lg shadow">
            <div className="row text-center">
              <div className="col-md-3 mb-4 mb-md-0">
                <div className="display-4 fw-bold mb-1">7+</div>
                <p className="mb-0">ปีประสบการณ์</p>
              </div>
              <div className="col-md-3 mb-4 mb-md-0">
                <div className="display-4 fw-bold mb-1">350+</div>
                <p className="mb-0">โปรเจกต์สำเร็จ</p>
              </div>
              <div className="col-md-3 mb-4 mb-md-0">
                <div className="display-4 fw-bold mb-1">220+</div>
                <p className="mb-0">ลูกค้าที่พึงพอใจ</p>
              </div>
              <div className="col-md-3">
                <div className="display-4 fw-bold mb-1">15+</div>
                <p className="mb-0">รางวัลยอดเยี่ยม</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Hover Effects */}
        <section className="mb-5 py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary fw-bold">ทีมงานของเรา</h6>
            <h2 className="display-5 fw-bold">เรามีทีมผู้เชี่ยวชาญ</h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              ทีมงานของเราประกอบด้วยมืออาชีพที่มีประสบการณ์และความเชี่ยวชาญในด้านต่างๆ
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100 team-card">
                <div className="position-relative overflow-hidden">
                  <img
                    src="src/assets/team-member1.jpg"
                    className="card-img-top"
                    alt="CEO"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div
                    className="team-overlay position-absolute w-full h-full bg-primary d-flex flex-column justify-content-center align-items-center opacity-0 top-0 start-0"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <div className="d-flex gap-2 mb-3">
                      <a
                        href="#"
                        className="btn btn-sm btn-light rounded-circle"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light rounded-circle"
                      >
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light rounded-circle"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">สมชาย ใจดี</h5>
                  <p className="card-subtitle text-primary mb-2">
                    CEO / ผู้ก่อตั้ง
                  </p>
                  <p className="card-text text-muted">
                    ผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์และกลยุทธ์ทางธุรกิจ
                    มีประสบการณ์มากกว่า 15 ปีในอุตสาหกรรมเทคโนโลยี
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100 team-card">
                <div className="position-relative overflow-hidden">
                  <img
                    src="src/assets/team-member2.jpg"
                    className="card-img-top"
                    alt="Lead Developer"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div
                    className="team-overlay position-absolute w-full h-full bg-primary d-flex flex-column justify-content-center align-items-center opacity-0 top-0 start-0"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <div className="d-flex gap-2 mb-3">
                      <a href="#" className="btn btn-sm btn-light rounded-circle">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-light rounded-circle">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-light rounded-circle">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">วิชัย เทคโน</h5>
                  <p className="card-subtitle text-primary mb-2">
                    หัวหน้านักพัฒนา
                  </p>
                  <p className="card-text text-muted">
                    ผู้เชี่ยวชาญด้าน React, Node.js และเทคโนโลยีเว็บสมัยใหม่
                    มีประสบการณ์การพัฒนาแอพพลิเคชันมากกว่า 10 ปี
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100 team-card">
                <div className="position-relative overflow-hidden">
                  <img
                    src="src/assets/team-member3.jpg"
                    className="card-img-top"
                    alt="UX Designer"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div
                    className="team-overlay position-absolute w-full h-full bg-primary d-flex flex-column justify-content-center align-items-center opacity-0 top-0 start-0"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <div className="d-flex gap-2 mb-3">
                      <a href="#" className="btn btn-sm btn-light rounded-circle">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-light rounded-circle">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-light rounded-circle">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">นภา ศิลป์งาม</h5>
                  <p className="card-subtitle text-primary mb-2">
                    นักออกแบบ UX/UI
                  </p>
                  <p className="card-text text-muted">
                    ผู้เชี่ยวชาญด้านการออกแบบประสบการณ์ผู้ใช้
                    มีความเชี่ยวชาญในการสร้างอินเตอร์เฟซที่สวยงามและใช้งานง่าย
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section with Icons */}
        <section className="mb-5 py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary fw-bold">ค่านิยมของเรา</h6>
            <h2 className="display-5 fw-bold">สิ่งที่เราให้ความสำคัญ</h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              หลักการทำงานของเราที่ช่วยขับเคลื่อนความสำเร็จให้กับลูกค้าของเรา
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100 p-4 text-center values-card">
                <div
                  className="rounded-circle bg-primary bg-opacity-10 mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Star className="text-primary" size={36} />
                </div>
                <h4 className="fw-bold mb-3">คุณภาพ</h4>
                <p className="text-muted">
                  เรามุ่งมั่นที่จะส่งมอบผลงานที่มีคุณภาพสูงสุดให้กับลูกค้าของเรา
                  ทุกโปรเจกต์ได้รับการดูแลอย่างใกล้ชิดและพัฒนาด้วยมาตรฐานระดับสูง
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100 p-4 text-center values-card">
                <div
                  className="rounded-circle bg-primary bg-opacity-10 mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Zap className="text-primary" size={36} />
                </div>
                <h4 className="fw-bold mb-3">นวัตกรรม</h4>
                <p className="text-muted">
                  เราไม่หยุดที่จะเรียนรู้และนำเทคโนโลยีใหม่ๆ
                  มาใช้เพื่อพัฒนาผลงานของเรา
                  เราติดตามเทรนด์และเทคโนโลยีล่าสุดเพื่อให้ลูกค้าได้รับสิ่งที่ดีที่สุด
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100 p-4 text-center values-card">
                <div
                  className="rounded-circle bg-primary bg-opacity-10 mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Users className="text-primary" size={36} />
                </div>
                <h4 className="fw-bold mb-3">ลูกค้าเป็นศูนย์กลาง</h4>
                <p className="text-muted">
                  เราให้ความสำคัญกับความต้องการของลูกค้าและมุ่งมั่นที่จะสร้างความพึงพอใจสูงสุด
                  เรารับฟังและทำงานร่วมกับลูกค้าอย่างใกล้ชิดตลอดกระบวนการ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-5 py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="mb-5">
                <h6 className="text-primary fw-bold">ทักษะของเรา</h6>
                <h2 className="display-5 fw-bold">เทคโนโลยีที่เราเชี่ยวชาญ</h2>
                <p className="lead text-muted">
                  เรามีความเชี่ยวชาญในเทคโนโลยีหลากหลายเพื่อให้บริการลูกค้าได้อย่างครบวงจร
                </p>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-bold">HTML/CSS</span>
                  <span>95%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-bold">JavaScript/React</span>
                  <span>90%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-bold">Node.js/Express</span>
                  <span>85%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-bold">UI/UX Design</span>
                  <span>92%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "92%" }}
                    aria-valuenow="92"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="src/assets/about.jpg"
                  alt="ทักษะของเรา"
                  className="img-fluid rounded shadow-lg"
                />
                <div className="position-absolute bg-white shadow p-4 rounded end-0 top-0 translate-middle-y">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary p-3 me-3">
                      <Code className="text-white" size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">10+ ปี</h5>
                      <p className="text-muted mb-0">ประสบการณ์</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-5">
          <div className="bg-primary text-white p-5 rounded-4 shadow-lg position-relative overflow-hidden">
            {/* Background icon */}
            <div className="position-absolute top-0 end-0 opacity-10 pe-4 pt-3">
              <Code size={20} />
            </div>

            <div className="container">
              <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-lg-8 mb-4 mb-lg-0">
                  <h2 className="display-5 fw-bold mb-3">
                    พร้อมที่จะเริ่มต้นโปรเจกต์ใหม่กับเรา?
                  </h2>
                  <p className="lead mb-0">
                    ติดต่อเราวันนี้เพื่อปรึกษาเกี่ยวกับโปรเจกต์ของคุณ
                    และรับการเสนอราคาฟรี
                  </p>
                </div>

                {/* Button Section */}
                <div className="col-lg-4 text-lg-end text-center">
                  <a href="contact" className="btn btn-light btn-lg px-4 py-2 rounded-pill shadow-sm">
                    ติดต่อเราตอนนี้
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .team-card:hover .team-overlay {
          opacity: 0.9 !important;
        }

        .values-card {
          transition: transform 0.3s ease;
        }

        .values-card:hover {
          transform: translateY(-10px);
        }

        .animate-fade-right {
          animation: fadeInRight 1s ease-out;
        }

        .animate-fade-left {
          animation: fadeInLeft 1s ease-out;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default About;
