import HomeLayout from "../src/components/Layouts/HomeLayout";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import  { useEffect } from "react"; 

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },[])
  return (
    <HomeLayout></HomeLayout>
  );
};

export default HomePage;
