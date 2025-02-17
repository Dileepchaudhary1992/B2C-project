import bathimage from '../../assets/images/Bath-Set.jpg';
import '../../assets/css/menu.css';
function Category() {
  return (
    <>
      <nav>
        <div className="wrapper">
          <input type="radio" name="slider" id="menu-btn" />
           <input type="radio" name="slider" id="close-btn" />
           <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="bi bi-x"></i>
            </label>
            <li>
              <a href="#">BATH SET</a>
            </li>
            <li>
              <a href="#" className="desktop-item">
              DUSTBINS
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                Dropdown Menu
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
              FLOOR COVERING
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Mega Menu
              </label>
              <div className="mega-box">
                <div className="content">
                 
                  <div className="row">
                    {/* <header>Design Services</header> */}
                    <ul className="mega-links">
                      <li>
                        <a href="#">Bath Mat</a>
                      </li>
                      <li>
                        <a href="#">Bath Set</a>
                      </li>
                      <li>
                        <a href="#">Shower Curtain</a>
                      </li>
                      <li>
                        <a href="#">Shower Mat</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    {/* <header>Email Services</header> */}
                    <ul className="mega-links">
                      <li>
                        <a href="#">Soap Dish</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    {/* <header>Security services</header> */}
                    <ul className="mega-links">
                      <li>
                        <a href="#">Site Seal</a>
                      </li>
                      <li>
                        <a href="#">VPS Hosting</a>
                      </li>
                      <li>
                        <a href="#">Privacy Seal</a>
                      </li>
                      <li>
                        <a href="#">Website design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={bathimage} alt="" /> 
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
              KITCHEN
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                Dropdown Menu
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
              ORGANISERS
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                ORGANISERS
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
              TABLEWARE
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                ORGANISERS
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
              YOGA MAT
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                ORGANISERS
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn" style={{ color:"#000" }}>
            <i className="bi bi-list"></i>
          </label>
        </div>
      </nav>
    </>
  );
}
export default Category;