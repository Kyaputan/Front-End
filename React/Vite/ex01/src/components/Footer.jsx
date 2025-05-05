function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
      <footer className="bg-dark text-light py-4 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>MyWebsite</h5>
              <p>บริการออกแบบและพัฒนาเว็บไซต์คุณภาพสูง</p>
            </div>
            <div className="col-md-3">
              <h5>ลิงก์</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-light text-decoration-none">หน้าหลัก</a></li>
                <li><a href="/about" className="text-light text-decoration-none">เกี่ยวกับเรา</a></li>
                <li><a href="/services" className="text-light text-decoration-none">บริการ</a></li>
                <li><a href="/contact" className="text-light text-decoration-none">ติดต่อเรา</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>ติดต่อ</h5>
              <address className="mb-0">
                123 ถนนสุขุมวิท<br />
                กรุงเทพมหานคร 10110<br />
                โทร: 02-123-4567<br />
                อีเมล: info@mywebsite.com
              </address>
            </div>
          </div>
          <hr className="my-3" />
          <div className="text-center">
            <p className="mb-0">&copy; {currentYear} MyWebsite. สงวนลิขสิทธิ์</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer