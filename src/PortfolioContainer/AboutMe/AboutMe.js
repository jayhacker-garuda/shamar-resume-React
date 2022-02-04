import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";

function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "It’s amazing how much ground is constantly being broken in this field, so I’m constantly learning new concepts and technologies. Being a full-stack developer means being able to code for both the frontend and backend of a web application.",
        highlights: {
            bullets: [
                "React JS",
                "laravel",
                "liveWire",
                "PHP",
                "HTML",
            ],
            heading: "Learning Threads:",
        }
    }

    const renderHihlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Different Typa'} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHihlight()}
                        </div>
                        <div className="about-me-options">
                            <button className='btn primary-btn'>
                                {""}
                                Wave{" "}
                            </button>
                            <button className='btn highlighted-btn'>
                                {""}
                                Connect Your Eth Wallet{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
