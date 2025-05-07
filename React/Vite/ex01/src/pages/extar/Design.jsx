import React from 'react'
import Card from '../../components/Card'

function Design() {
  return (
    <div className="services-page">
        <h1 className="text-center mb-5">บริการของเรา</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card title="บริการ 1" description="รายละเอียดบริการ 1" button="Read More" />
                </div>
                <div className="col-md-4">  
                    <Card title="บริการ 2" description="รายละเอียดบริการ 2" button="Read More" />
                </div>
                <div className="col-md-4">
                    <Card title="บริการ 3" description="รายละเอียดบริการ 3" button="Read More" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Design