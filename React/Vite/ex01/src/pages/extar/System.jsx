import React from 'react'

function System() {
  return (
    <div className="services-page">
        <h1 className="text-center mb-5">บริการของเรา</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">บริการ 1</h5>
                            <p className="card-text">รายละเอียดบริการ 1</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">บริการ 2</h5>
                            <p className="card-text">รายละเอียดบริการ 2</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">บริการ 3</h5>
                            <p className="card-text">รายละเอียดบริการ 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default System