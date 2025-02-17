import carpetproduct from '../../assets/images/Dustbin/dustbin-1.jpg';
import carpetproducttwo from '../../assets/images/Dustbin/dustbin-2.jpg';
import carpetproductthree from '../../assets/images/Dustbin/dustbin-3.jpg';
import carpetproductfour from '../../assets/images/Dustbin/dustbin-4.jpg';

function Dustbin(){
    const dustbins = [
    { id: 1, image: carpetproduct, title: 'Dustbins', button:'ADD TO CART' },
    { id: 2, image: carpetproducttwo, title: 'Dustbins', button:'ADD TO CART' },
    { id: 3, image: carpetproductthree, title: 'Dustbins', button:'ADD TO CART' },
    { id: 4, image: carpetproductfour, title: 'Dustbins', button:'ADD TO CART' },
    ];
    
   return(
     <section className="bestsellerbox-carpet"> 
     <div className="container">
     <div className='row'> 
     <div className='col-md-1'> <h2> Dustbin </h2> </div> 
     <div className='col-md-11'>  <hr/> </div> 
     </div> 

    <div className="row"> 
        {dustbins.map((dustbin) =>(
         <div className="col-md-3" key={dustbin.id}> 
          <div className="box"> 
            <div className='box-product'>
             <img src={dustbin.image}></img>
              </div>
              <div className="content-box"> 
               <h3> Sarrah Blue Quartz Rug </h3>
                <a href='#' className='btn btn-primary'>{dustbin.button} </a>
              </div>
           </div>
        </div>
        ))}
      </div>
     </div>
     </section>
     
   )
}
export default Dustbin;