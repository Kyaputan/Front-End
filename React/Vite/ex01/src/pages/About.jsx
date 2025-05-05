function About() {
    return (
      <div className="about-page">
        <h1 className="text-center mb-4">เกี่ยวกับเรา</h1>
        
        {/* Company Introduction */}
        <section className="mb-5">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="src/assets/about.jpg" 
                alt="เกี่ยวกับบริษัทของเรา" 
                className="img-fluid rounded shadow"
                style={{ height: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6">
              <h2>ประวัติความเป็นมา</h2>
              <p className="lead">
                บริษัทของเราก่อตั้งขึ้นในปี 2018 ด้วยวิสัยทัศน์ที่จะนำเสนอบริการพัฒนาเว็บไซต์ที่มีคุณภาพสูงในราคาที่เหมาะสม
              </p>
              <p>
                เรามีทีมงานผู้เชี่ยวชาญที่มีประสบการณ์กว่า 10 ปีในอุตสาหกรรมนี้ เรามุ่งมั่นที่จะมอบประสบการณ์การใช้งานที่ยอดเยี่ยมให้กับลูกค้าของเรา
                ด้วยการรวมเทคโนโลยีล่าสุดและการออกแบบที่ทันสมัย
              </p>
              <p>
                เราเชื่อว่าเว็บไซต์ที่ดีไม่เพียงแค่สวยงาม แต่ยังต้องใช้งานได้ง่ายและตอบสนองความต้องการทางธุรกิจของลูกค้าอีกด้วย
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4">ทีมงานของเรา</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card text-center h-100">
                <img 
                  src="src/assets/team-member1.jpg" 
                  className="card-img-top rounded-circle mx-auto mt-3" 
                  alt="CEO" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">สมชาย ใจดี</h5>
                  <p className="card-subtitle text-muted mb-2">CEO / ผู้ก่อตั้ง</p>
                  <p className="card-text">
                    ผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์และกลยุทธ์ทางธุรกิจ มีประสบการณ์มากกว่า 15 ปีในอุตสาหกรรมเทคโนโลยี
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card text-center h-100">
                <img 
                  src="src/assets/team-member2.jpg" 
                  className="card-img-top rounded-circle mx-auto mt-3" 
                  alt="Lead Developer" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">วิชัย เทคโน</h5>
                  <p className="card-subtitle text-muted mb-2">หัวหน้านักพัฒนา</p>
                  <p className="card-text">
                    ผู้เชี่ยวชาญด้าน React, Node.js และเทคโนโลยีเว็บสมัยใหม่ มีประสบการณ์การพัฒนาแอพพลิเคชันมากกว่า 10 ปี
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card text-center h-100">
                <img 
                  src="src/assets/team-member3.jpg" 
                  className="card-img-top rounded-circle mx-auto mt-3" 
                  alt="UX Designer" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">นภา ศิลป์งาม</h5>
                  <p className="card-subtitle text-muted mb-2">นักออกแบบ UX/UI</p>
                  <p className="card-text">
                    ผู้เชี่ยวชาญด้านการออกแบบประสบการณ์ผู้ใช้ มีความเชี่ยวชาญในการสร้างอินเตอร์เฟซที่สวยงามและใช้งานง่าย
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="bg-light p-5 rounded">
          <h2 className="text-center mb-4">ค่านิยมของเรา</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="bi bi-stars fs-1 text-primary mb-3"></i>
                <h4>คุณภาพ</h4>
                <p>เรามุ่งมั่นที่จะส่งมอบผลงานที่มีคุณภาพสูงสุดให้กับลูกค้าของเรา</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="bi bi-lightbulb fs-1 text-primary mb-3"></i>
                <h4>นวัตกรรม</h4>
                <p>เราไม่หยุดที่จะเรียนรู้และนำเทคโนโลยีใหม่ๆ มาใช้เพื่อพัฒนาผลงานของเรา</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="bi bi-people fs-1 text-primary mb-3"></i>
                <h4>ลูกค้าเป็นศูนย์กลาง</h4>
                <p>เราให้ความสำคัญกับความต้องการของลูกค้าและมุ่งมั่นที่จะสร้างความพึงพอใจสูงสุด</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default About