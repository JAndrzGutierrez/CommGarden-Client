import NavBar from "../NavBar/NavBar"
import Container from "react-bootstrap/Container"
import SignInForm from "../SignInForm/SignInForm"



const LandingPage = () => {
    return(
        <div className="landing-page">
         <NavBar/>
         <SignInForm/>
        </div>
    )
}

export default LandingPage