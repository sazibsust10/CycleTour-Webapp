import React from 'react';



class FooterBottom extends React.Component {
    render(){
        return(
            <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-left">
                            <Logo />
                        </div>
                        <div className="col-md-6">
                            <p className="text-sm mb-md-0 text-md-right">© 2020 Your company.  All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterBottom;