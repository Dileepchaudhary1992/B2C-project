import logo from '../../assets/images/logo-black.png';
import Tophead from './Tophead';
import Modalbox from './Modalbox';

function Header() {
return(
  <> 
  <Tophead> </Tophead>
    <section className="Header-top-box"> 
    <div className="container"> 
     <div className="row"> 
        <div className="col-md-2 col-3"> <img src={logo}  alt='logo' style={{width: "160px"}}   /> </div>
        <div className="col-md-8 col-6"> 
          <div className='Searchbox'> 
             <input type='searh' className='form-control input' placeholder='Search'/> 
               <span className='search-icon'> <i className="bi bi-search"></i> </span>
             </div>
         </div>
         <div className='col-md-2 col-3'> 
          <div className='cart-box-flex'> 
          <button className='cart-icon'> 
              <i className="bi bi-heart"></i>
                <span className='circle'> 0 </span>
          </button>
          <Modalbox></Modalbox>

          </div>
        </div>
     </div>
    </div>
    </section>
  
  </>



)
}
export default Header