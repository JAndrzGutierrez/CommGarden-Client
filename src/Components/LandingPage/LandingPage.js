import SignInForm from "../SignInForm/SignInForm";
import '../../Components/TheGarden/TheGarden.css';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <SignInForm />
      <footer>
      {/* <i class="fa fa-github-square github" id="github"></i> */}
      </footer>
    </div>
  );
};

export default LandingPage;
