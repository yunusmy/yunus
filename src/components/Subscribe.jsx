import ShadowImg from '../assets/bg-shadow.png';

const Subscribe = () => {
  return (
    <>
      <div
        className="container mx-auto py-16"
        style={{
          backgroundImage: `url(${ShadowImg})`,
        }}
      >
        <form className="flex flex-col justify-center items-center">
          <h6 className="footer-title">Subscribe to our Newsletter</h6>
          <p>Get the latest updates and news right in your inbox!</p>
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
      </div>
    </>
  );
};

export default Subscribe;
