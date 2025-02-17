import Herobanner from '../../component/Home/Herobanner';
import  Latestcollection from '../../component/Home/Latestcollection';
import Bestseller from '../../component/Home/Bestseller';
import Carpet from '../../component/Home/Carpet';

function Homepage() {
  return (
    <>
     <Herobanner></Herobanner>
     <Latestcollection></Latestcollection>
     <Bestseller></Bestseller>
     <Carpet></Carpet>
    </>
  );
}
export default Homepage;
