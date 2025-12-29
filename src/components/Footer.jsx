const Footer = () => {
  return (
    <section className="footer--section">
      <div className="footer-section">
        <div className="footer-top">
          <div className="footer-detail">
            <div className="ft-top"></div>
            <div className="ft-bottom">
              <div>
                <h6>pages</h6>
                <div className="ft-menu">
                  <a href="/about-us" class="ft-link">About us</a>
                  <a href="/about-us" class="ft-link">Works</a>
                  <a href="/about-us" class="ft-link">Services</a>
                  <a href="/about-us" class="ft-link">Blogs</a>
                  <a href="/about-us" class="ft-link">FAQ</a>
                </div>
              </div>
              <div>
                <h6>resource</h6>
                <div className="ft-menu">
                  <a href="/about-us" class="ft-link">Review</a>
                  <a href="/about-us" class="ft-link">Pricing</a>
                  <a href="/about-us" class="ft-link">Contact us</a>
                  <a href="/about-us" class="ft-link">Licensing</a>
                  <a href="/about-us" class="ft-link">Style Guide</a>
                </div>
              </div>
              <div className="ft-data">
                <div>
                  <h6 class="ft-title">OUR &nbsp;ADDRESS</h6>
                  <div className="ft-info">
                    <span>
                      <img src="https://cdn.prod.website-files.com/67a1e1caa5c0cb17e5a0f745/67a2067bc46a74926bed9184_ic-location.svg" alt="Icon" />
                    </span>
                    <span>
                      2972 Westheimer Rd. Santa Ana, Illinois 85486
                    </span>
                  </div>
                </div>
                <div>
                  <h6 class="ft-title">CONTACT US</h6>
                  <div class="ft-info-data">
                    <div class="ft-info-wrap">
                      <img src="https://cdn.prod.website-files.com/67a1e1caa5c0cb17e5a0f745/67a2067b151ceb0ddb9ec55b_ic-phone.svg" loading="lazy" alt="Icon" />
                      <a href="tel:+(480)555-0103" class="ft-mail">+(480) 555-0103</a>
                    </div>
                    <div class="ft-info-wrap">
                      <img src="https://cdn.prod.website-files.com/67a1e1caa5c0cb17e5a0f745/67a2067cc6e5b5c62bc9b88a_ic-mail.svg" loading="lazy" alt="Icon" />
                      <a href="mailto:info@example.com" class="ft-mail">info@example.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="ft-bottom">
            <h5>
              © 2025 Tekzy.   Designed by 
              <a href="https://nixar.io/" target="_blank" class="footer-link">Nixar.</a>
              Powered by
              <a href="https://webflow.com/" target="_blank" class="footer-link">Webflow.</a>
            </h5>
            <div class="ft-policy">
              <a href="/terms-conditions" class="footer-link">
                Terms &amp; Conditions
              </a>
              <div class="ft-dot"></div>
              <a href="/privacy-policy" class="footer-link">
                Privacy Policy
              </a>
              <div class="ft-dot"></div>
              <a href="/cookie-policy" class="footer-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
