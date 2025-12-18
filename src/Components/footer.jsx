function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row text-center text-white">

            <div className="col-md-4 mb-4 mb-md-0">
              <h4>LOCATION</h4>
              <p className="mt-3">
                2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <h4>AROUND THE WEB</h4>
              <div className="footer-icons mt-3">
                <span>f</span>
                <span>t</span>
                <span>in</span>
                <span>🌐</span>
              </div>
            </div>

            <div className="col-md-4">
              <h4>ABOUT FREELANCER</h4>
              <p className="mt-3">
                Freelance is a free to use, licensed Bootstrap theme
                created by Route
              </p>
            </div>

          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        Copyright © Your Website 2021
      </div>
    </>
  );
}

export default Footer;
