import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // จำลองการส่งข้อมูลไปยังเซิร์ฟเวอร์
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // รีเซ็ตฟอร์ม
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            // รีเซ็ตสถานะหลังจาก 5 วินาที
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="contact-page">
            <h1 className="text-center mb-5">ติดต่อเรา</h1>

            {/* Contact Info Section */}
            <div className="row mb-5">
                <div className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                <i className="bi bi-geo-alt text-white fs-3"></i>
                            </div>
                            <h4>ที่อยู่</h4>
                            <p className="mb-0">
                                123 ถนนสุขุมวิท
                                <br />
                                แขวงคลองตันเหนือ เขตวัฒนา
                                <br />
                                กรุงเทพมหานคร 10110
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                <i className="bi bi-telephone text-white fs-3"></i>
                            </div>
                            <h4>โทรศัพท์</h4>
                            <p className="mb-1">ฝ่ายขาย: 02-123-4567</p>
                            <p className="mb-1">ฝ่ายสนับสนุน: 02-765-4321</p>
                            <p className="mb-0">มือถือ: 081-234-5678</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                <i className="bi bi-envelope text-white fs-3"></i>
                            </div>
                            <h4>อีเมล</h4>
                            <p className="mb-1">ข้อมูลทั่วไป: info@mywebsite.com</p>
                            <p className="mb-1">ฝ่ายขาย: sales@mywebsite.com</p>
                            <p className="mb-0">ฝ่ายสนับสนุน: support@mywebsite.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map and Form Section */}
            <div className="row mb-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="bg-light p-3 rounded">
                        <h3 className="mb-3">แผนที่</h3>
                        <div className="ratio ratio-16x9 bg-secondary rounded">
                            {/* ในโปรเจคจริง ให้ใส่ Google Maps iframe ตรงนี้ */}
                            <div className="d-flex align-items-center justify-content-center text-white">
                                <div className="text-center">
                                    <i className="bi bi-geo-alt fs-1 mb-2"></i>
                                    <p>แผนที่จะแสดงที่นี่</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h5>เวลาทำการ</h5>
                            <p className="mb-1">วันจันทร์ - วันศุกร์: 9:00 - 18:00 น.</p>
                            <p className="mb-0">วันเสาร์: 9:00 - 15:00 น.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="mb-3">ส่งข้อความถึงเรา</h3>

                            {submitSuccess && (
                                <div className="alert alert-success" role="alert">
                                    <i className="bi bi-check-circle me-2"></i>
                                    ขอบคุณที่ติดต่อเรา! เราจะติดต่อกลับโดยเร็วที่สุด
                                </div>
                            )}

                            {submitError && (
                                <div className="alert alert-danger" role="alert">
                                    <i className="bi bi-exclamation-triangle me-2"></i>
                                    เกิดข้อผิดพลาดในการส่งข้อความ โปรดลองอีกครั้ง
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        ชื่อ-นามสกุล <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        อีเมล <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        เบอร์โทรศัพท์
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">
                                        หัวข้อ <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        ข้อความ <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            กำลังส่ง...
                                        </>
                                    ) : (
                                        "ส่งข้อความ"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="text-center mb-5">
                <h3 className="mb-4">ติดตามเราได้ที่</h3>
                <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="btn btn-outline-primary rounded-circle p-3">
                        <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="#" className="btn btn-outline-info rounded-circle p-3">
                        <i className="bi bi-twitter fs-4"></i>
                    </a>
                    <a href="#" className="btn btn-outline-danger rounded-circle p-3">
                        <i className="bi bi-instagram fs-4"></i>
                    </a>
                    <a href="#" className="btn btn-outline-dark rounded-circle p-3">
                        <i className="bi bi-github fs-4"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary rounded-circle p-3">
                        <i className="bi bi-linkedin fs-4"></i>
                    </a>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-light p-4 rounded mb-5">
                <h3 className="text-center mb-4">คำถามที่พบบ่อย</h3>
                <div className="accordion" id="contactFAQ">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                ใช้เวลานานแค่ไหนในการพัฒนาเว็บไซต์?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#contactFAQ"
                        >
                            <div className="accordion-body">
                                โดยทั่วไปแล้ว การพัฒนาเว็บไซต์พื้นฐานใช้เวลาประมาณ 2-4 สัปดาห์
                                ส่วนโปรเจกต์ที่ซับซ้อนมากขึ้นอาจใช้เวลา 8-12
                                สัปดาห์หรือมากกว่านั้น
                                ทั้งนี้ขึ้นอยู่กับข้อกำหนดและฟีเจอร์ที่ต้องการ
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                คุณรับดูแลและบำรุงรักษาเว็บไซต์หรือไม่?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#contactFAQ"
                        >
                            <div className="accordion-body">
                                ใช่ เรามีบริการดูแลและบำรุงรักษาเว็บไซต์แบบรายเดือนและรายปี
                                ซึ่งครอบคลุมการอัปเดตเนื้อหา การอัปเดตซอฟต์แวร์ การสำรองข้อมูล
                                และการแก้ไขปัญหาทางเทคนิคต่างๆ
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                ราคาในการพัฒนาเว็บไซต์คิดอย่างไร?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#contactFAQ"
                        >
                            <div className="accordion-body">
                                ราคาขึ้นอยู่กับความซับซ้อนของโปรเจกต์ จำนวนหน้า
                                และฟีเจอร์ที่ต้องการ เว็บไซต์พื้นฐานเริ่มต้นที่ 15,000 บาท
                                ในขณะที่เว็บแอปพลิเคชันที่ซับซ้อนอาจมีราคาสูงกว่า
                                เราสามารถให้การประเมินราคาที่แม่นยำหลังจากที่เราได้พูดคุยเกี่ยวกับความต้องการของคุณแล้ว
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
