
export default function Navbar(props) {

    const buttonSytle = {
        color: 'black',
        textDecoration: 'none'
    };

    if (props.authenticated) {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className='btn btn-link' style={buttonSytle} onClick={() => props.changeView('landing-page')}>GCODEdeck</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-2" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <button className='btn btn-link nav-item nav-link active' onClick={() => props.changeView('landing-page')}>Home</button>
                        <button className='btn btn-link nav-item nav-link' onClick={() => props.changeView('community')}>Community</button>
                        <button className='btn btn-link nav-item nav-link' onClick={() => props.changeView('account')}>Account</button>
                    </div>
                </div>
            </nav>
        );
    } else {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand mx-2" href="/">GCODEdeck</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-2" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <button className='btn btn-link nav-item nav-link active' onClick={() => props.changeView('landing-page')}>Home</button>
                        <button className='btn btn-link nav-item nav-link' onClick={() => props.changeView('about-us')}>About Us</button>
                        <button className='btn btn-link nav-item nav-link' onClick={() => props.changeView('community')}>Community</button>
                    </div>
                </div>
            </nav>
        );
    }
};
