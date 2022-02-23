import profilePic from '../img/1.jpeg';
import { FaWhatsapp, FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaSass, FaNodeJs, FaNpm, FaPhp, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
    return (
        <div className="About my-4">
            
            <div className="mx-8 xl:mx-24 flex justify-center items-center flex-col lg:flex-row">
                <div className="about-img md:w-full xl:w-3/4 md:p-8">
                    <img src={profilePic} alt="oluwamayowa"/>
                </div>
                <div className="about-content">
                    <h2 className="text-center text-2xl uppercase"><span className="text-blue-700 border-b-blue-700 font-bold">about</span> me </h2>
                    <div>
                        <p className="text-lg"><span className="text-2xl font-bold text-blue-700 uppercase">oluwamayowa</span> is a frontEnd developer and a graphics designer from lagos Nigeria💚. I create beautiful website that help small business do better online and gfenerate more sales. </p>
                        <div className="mt-4">
                            My skills are 
                           <div className="flex justify-center flex-col md:flex-row">
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaHtml5  className="w-12 h-12 text-orange-600"/>
                                    <p className="text-lg uppercase">Html</p>
                                 </div>
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaCss3Alt className="w-12 h-12 text-blue-700"/> 
                                    <p className="text-lg uppercase">css</p>
                                </div>
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaBootstrap className="w-12 h-12 text-blue-700"/> 
                                    <p className="text-lg uppercase">bootstrap</p>
                                </div>
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaSass className="w-12 h-12 text-purple-700"/> 
                                    <p className="text-lg uppercase">sass</p>
                                </div>
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaJs className="w-12 h-12 text-yellow-400"/>
                                    <p className="text-lg uppercase">javascript</p>
                                </div>
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaNodeJs className="w-12 h-12 text-green-700"/>
                                    <p className="text-lg uppercase">nodejs</p>
                                </div>
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaNpm className="w-12 h-12 text-orange-700"/>
                                    <p className="text-lg uppercase">npm</p>
                                </div>
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaReact className="w-12 h-12 text-blue-400"/>
                                    <p className="text-lg uppercase">reactjs</p>
                                </div>
                                <div className="flex items-center flex-col shadow-md p-4 rounded-md mb-2 md:mb-0 hover:shadow-lg">
                                    < FaPhp className="w-12 h-12 text-blue-900"/>
                                    <p className="text-lg uppercase">php</p>
                                </div>
                           </div>
                           <div className="mt-8">
                               <p>follow me on social media:</p>
                               <div className="flex">
                                   <a href="https://www.instagram.com/devmayowa" target="_blank" rel="noopener noreferrer"><FaInstagram className="w-8 h-8 mr-4 text-red-800"/> </a>
                                   <a href="https://www.instagram.com/devmayowa" target="_blank" rel="noopener noreferrer"><FaTwitter className="w-8 h-8 mr-4 text-blue-400" /> </a>
                                   <a href="https://www.instagram.com/devmayowa" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="w-8 h-8 text-green-800" /> </a>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
