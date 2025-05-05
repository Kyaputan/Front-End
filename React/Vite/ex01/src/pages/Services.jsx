function Services() {
    return (
      <div className="services-page">
        <h1 className="text-center mb-5">บริการของเรา</h1>
        
        {/* Services Introduction */}
        <div className="text-center mb-5">
          <p className="lead">
            เรานำเสนอบริการออกแบบและพัฒนาเว็บไซต์ที่ครบวงจร เพื่อตอบสนองความต้องการของธุรกิจทุกขนาด
          </p>
        </div>
        
        {/* Main Services */}
        <div className="row mb-5">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="rounded-circle bg-primary p-3 d-inline-flex mb-4">
                  <i className="bi bi-laptop text-white fs-2"></i>
                </div>
                <h3 className="card-title">การออกแบบเว็บไซต์</h3>
                <p className="card-text">
                  เราออกแบบเว็บไซต์ที่สวยงาม ทันสมัย และตอบสนองได้ดีบนทุกอุปกรณ์ 
                  ด้วยการใช้เทคโนโลยีล่าสุดเพื่อให้ได้ผลลัพธ์ที่ดีที่สุด
                </p>
                <ul className="list-unstyled text-start">
                  <li><i className="bi bi-check-circle text-primary me-2"></i>การออกแบบ UI/UX</li>
                  <li><i className="bi bi-check-circle text-primary me-2"></i>เว็บไซต์แบบ Responsive</li>
                  <li><i className="bi bi-check-circle text-primary me-2"></i>การออกแบบที่เน้นการแปลงผู้เข้าชม</li>
                </ul>
              </div>
              <div className="card-footer bg-transparent border-0 text-center">
                <a href="services/design" className="btn btn-outline-primary">เรียนรู้เพิ่มเติม</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="rounded-circle bg-primary p-3 d-inline-flex mb-4">
                  <i className="bi bi-code-square text-white fs-2"></i>
                </div>
                <h3 className="card-title">การพัฒนาเว็บแอปพลิเคชัน</h3>
                <p className="card-text">
                  เราพัฒนาเว็บแอปพลิเคชันที่มีประสิทธิภาพสูง ใช้งานง่าย และรองรับการขยายตัวในอนาคต
                  ด้วยเทคโนโลยีทันสมัย
                </p>
                <ul className="list-unstyled text-start">
                  <li><i className="bi bi-check-circle text-primary me-2"></i>Single Page Applications (SPA)</li>
                  <li><i className="bi bi-check-circle text-primary me-2"></i>ระบบจัดการเนื้อหา (CMS)</li>
                  <li><i className="bi bi-check-circle text-primary me-2"></i>ระบบอีคอมเมิร์ซ</li>
                </ul>
              </div>
              <div className="card-footer bg-transparent border-0 text-center">
                
              <a href="services/system" className="btn btn-outline-primary">เรียนรู้เพิ่มเติม</a>

              </div>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="rounded-circle bg-primary p-3 d-inline-flex mb-4">
                  <i className="bi bi-graph-up text-white fs-2"></i>
                </div>
                <h3 className="card-title">การตลาดออนไลน์</h3>
                <p className="card-text">
                  เราช่วยให้ธุรกิจของคุณเติบโตด้วยกลยุทธ์การตลาดออนไลน์ที่มีประสิทธิภาพ
                  เพื่อเพิ่มการเข้าชมเว็บไซต์และยอดขาย
                </p>
                <ul className="list-unstyled text-start">
                  <li><i className="bi bi-check-circle text-primary me-2"></i>การปรับแต่ง SEO</li>
                  <li><i className="bi bi-check-circle text-primary me-2"></i>การตลาดผ่านสื่อสังคมออนไลน์</li>
                  <li><i className="bi bi-check-circle text-primary me-2"></i>การโฆษณาออนไลน์</li>
                </ul>
              </div>
              <div className="card-footer bg-transparent border-0 text-center">
                <a href="services/market" className="btn btn-outline-primary">เรียนรู้เพิ่มเติม</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Services */}
        <h2 className="text-center mb-4">บริการเสริม</h2>
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4><i className="bi bi-gear-fill text-primary me-2"></i>การดูแลและบำรุงรักษาเว็บไซต์</h4>
                <p>
                  เราให้บริการดูแลและบำรุงรักษาเว็บไซต์แบบครบวงจร เพื่อให้เว็บไซต์ของคุณทำงานได้อย่างราบรื่นและปลอดภัย
                  บริการนี้รวมถึงการอัปเดตซอฟต์แวร์ การสำรองข้อมูล และการแก้ไขปัญหาทางเทคนิคต่างๆ
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4><i className="bi bi-speedometer2 text-primary me-2"></i>การปรับแต่งประสิทธิภาพเว็บไซต์</h4>
                <p>
                  เราช่วยปรับแต่งเว็บไซต์ของคุณให้ทำงานได้เร็วขึ้นและมีประสิทธิภาพมากขึ้น
                  ซึ่งจะช่วยปรับปรุงประสบการณ์ผู้ใช้และอันดับใน Search Engine
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing */}
        <section className="bg-light p-5 rounded mb-5">
          <h2 className="text-center mb-4">ราคาแพ็กเกจ</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-header bg-white text-center border-0 pt-4">
                  <h3 className="mb-0">แพ็กเกจพื้นฐาน</h3>
                  <div className="display-4 mt-3">฿15,000</div>
                  <p className="text-muted">จ่ายครั้งเดียว</p>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent">เว็บไซต์ 5 หน้า</li>
                    <li className="list-group-item bg-transparent">การออกแบบ Responsive</li>
                    <li className="list-group-item bg-transparent">รองรับ SEO พื้นฐาน</li>
                    <li className="list-group-item bg-transparent">ฟอร์มติดต่อ</li>
                    <li className="list-group-item bg-transparent">โดเมนฟรี 1 ปี</li>
                  </ul>
                </div>
                <div className="card-footer bg-white border-0 text-center pb-4">
                  <button className="btn btn-outline-primary btn-lg">เลือกแพ็กเกจนี้</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow border-primary">
                <div className="card-header text-white bg-primary text-center border-0 pt-4">
                  <span className="badge bg-warning position-absolute top-0 start-50 translate-middle">แนะนำ</span>
                  <h3 className="mb-0">แพ็กเกจธุรกิจ</h3>
                  <div className="display-4 mt-3">฿45,000</div>
                  <p className="text-white opacity-75">จ่ายครั้งเดียว</p>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent">เว็บไซต์ไม่จำกัดจำนวนหน้า</li>
                    <li className="list-group-item bg-transparent">การออกแบบ Responsive แบบพรีเมียม</li>
                    <li className="list-group-item bg-transparent">ระบบจัดการเนื้อหา (CMS)</li>
                    <li className="list-group-item bg-transparent">การปรับแต่ง SEO แบบเต็มรูปแบบ</li>
                    <li className="list-group-item bg-transparent">การเชื่อมต่อกับโซเชียลมีเดีย</li>
                    <li className="list-group-item bg-transparent">โดเมนและโฮสติ้งฟรี 1 ปี</li>
                  </ul>
                </div>
                <div className="card-footer bg-white border-0 text-center pb-4">
                  <button className="btn btn-primary btn-lg">เลือกแพ็กเกจนี้</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-header bg-white text-center border-0 pt-4">
                  <h3 className="mb-0">แพ็กเกจองค์กร</h3>
                  <div className="display-4 mt-3">฿95,000+</div>
                  <p className="text-muted">ราคาเริ่มต้น</p>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent">เว็บแอปพลิเคชันแบบ Custom</li>
                    <li className="list-group-item bg-transparent">การออกแบบที่เป็นเอกลักษณ์</li>
                    <li className="list-group-item bg-transparent">ระบบจัดการฐานข้อมูลขั้นสูง</li>
                    <li className="list-group-item bg-transparent">ระบบรักษาความปลอดภัยขั้นสูง</li>
                    <li className="list-group-item bg-transparent">การวิเคราะห์และรายงานข้อมูล</li>
                    <li className="list-group-item bg-transparent">การดูแลและบำรุงรักษา 1 ปี</li>
                  </ul>
                </div>
                <div className="card-footer bg-white border-0 text-center pb-4">
                  <button className="btn btn-outline-primary btn-lg">ติดต่อเรา</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="text-center p-5 bg-primary text-white rounded">
          <h2>พร้อมที่จะเริ่มโปรเจกต์ของคุณ?</h2>
          <p className="lead mb-4">ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรีและใบเสนอราคา</p>
          <button className="btn btn-light btn-lg">ติดต่อเรา</button>
        </div>
      </div>
    )
  }
  
  export default Services