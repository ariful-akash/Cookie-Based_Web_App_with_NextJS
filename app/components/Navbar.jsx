import Link from "next/link";

const Navbar = () => {


    return (
       
        <div className="navBar navbar navbar-expand-sm fixed-top">
            <ul className="listDisplay">
               
                <li className="list">
                    <Link href="/"  className="list">Home</Link>                   
                </li>  
                <li className="list">
                    <Link href="/about"  className="list">About</Link>                   
                </li>             
                <li className="list">
                    <Link href="/blog"  className="list">Blog</Link>                   
                </li>          
                           
                <li className="list">
                    <Link href="/contact"  className="list">Contact</Link>                   
                </li>              
                          

            </ul>
        </div>

    );
};

export default Navbar;