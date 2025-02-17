import slideone from '../../assets/images/Collection/img-1.jpg';
import slidetwo from '../../assets/images/Collection/img-2.jpg';
import slidethree from '../../assets/images/Collection/img-3.jpg';

function Latestcollection(){
    const collectionimg = [
        { id: 1, image: slideone, title: 'Shop Goop'},
        { id: 2, image: slidetwo, title: 'Carpet' },
        { id: 3, image: slidethree, title: 'Rug' },
      ];

 return(

    <section className="Collaborations"> 
      <div className="container"> 
        <div className='row'> 
         <div className='col-md-12'> 
            <div className='title'> 
                <h2> Latest Design Collaborations </h2>
                <p> Bring self-expression home with designs from the brands and artists you love. </p>
           </div>
         </div>
        </div>
         <div className="row"> 
         {collectionimg.map((collection) => (
            <div key={collection.id} className="col-md-4"> 
            <img src={collection.image}/> 
            <h3> {collection.title} </h3>
            </div>
         ))}

         </div>
      </div>
    </section>
 )
}
export default Latestcollection;