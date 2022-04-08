import SignInForm from "../SignInForm/SignInForm";
import '../../Components/TheGarden/TheGarden.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SignInForm />
      <h1></h1>
       <iframe
       width="686"
        height="386"
        src="https://www.youtube.com/embed/9iwEASoxi70"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
       ></iframe>
    </div>
  );
};

export default LandingPage;
