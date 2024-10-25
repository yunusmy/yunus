import FootrLogo from '../assets/logo-footer.png';

const Footer = () => {
  return (
    <div className="bg-stone-400">
      <div className="flex justify-center items-center">
        <img src={FootrLogo} alt="" className="inline" />
      </div>
      <footer
        className="grid gird-cols-1 lg:grid-cols-3 container mx-auto
        text-base-content p-10"
      >
        <nav>
          <h6 className="footer-title ">About Us</h6>
          <p>
            We are a passionate team <br /> dedicated to providing the best
            <br />
            services to our customers.
          </p>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Quick Links</h6>

          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">About us</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="text-center my-2">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
