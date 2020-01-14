import React from 'react';

class TourMaps extends React.Component{

    render(){
        return(
            <section className="py-6 bg-gray-100">
                <div className="container">
                    <div className="text-center pb-lg-4">
                        <p className="subtitle text-secondary">One-of-a-kind vacation rentals </p>
                        <h2 className="mb-5">Booking with us is easy</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <span><strong>1</strong></span>
                                </div>
                                <h3 className="h5">Top Bikes of City</h3>
                                <p className="text-muted">Vestibulum sed tempor libero. Sed rutrum justo nunc, eu interdum sem vestibulum a</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <span><strong>2</strong></span>
                                </div>
                                <h3 className="h5">Search and Rent</h3>
                                <p className="text-muted">Vestibulum sed tempor libero. Sed rutrum justo nunc, eu interdum sem vestibulum a</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <span><strong>3</strong></span>
                                </div>
                                <h3 className="h5">Pay on Spot</h3>
                                <p className="text-muted">Vestibulum sed tempor libero. Sed rutrum justo nunc, eu interdum sem vestibulum a</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default TourMaps