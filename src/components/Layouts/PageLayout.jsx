import Footer from "../Fragments/Footer"
import Navbar from "../Fragments/Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import  { useEffect } from "react"; 

const PageLayout = (props) => {
    useEffect(() => {
        AOS.init({
          duration: 2000
        });
      },[])
    // eslint-disable-next-line react/prop-types
    const {children} = props
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default PageLayout