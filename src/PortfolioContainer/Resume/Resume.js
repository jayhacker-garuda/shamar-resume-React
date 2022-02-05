import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import { useState } from "react";



function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet">
                        <span>{props.heading ? props.heading : ''}</span>
                        {props.fromDate && props.toDate ? (
                            <div className="heading-date">
                                {props.fromDate + "-" + props.toDate}
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ""}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>{props.description ? props.description : ""}</span>
                    </div>
                </div>
            </div>
        )
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillDetails = [
        { skill: "JavaScript", ratingPercentage: 65 },
        { skill: "HTML", ratingPercentage: 70 },
        { skill: "React Js", ratingPercentage: 40 },
        { skill: "CSS", ratingPercentage: 40 },
        { skill: "PHP", ratingPercentage: 70 },
        { skill: "Solidity", ratingPercentage: 10 },
        { skill: "MySQL", ratingPercentage: 60 },
    ];

    const projectDetails = [
        {

            title: "Resume - Website",
            duration: { fromDate: "2021", toDate: "2021" },
            description: "A website to display all the attributes learnt and also to showcase my resume",
            subHeading: "Technologies Used: HTML, PHP, MySQL",
        },
        {

            title: "Youtube Converter - Website",
            duration: { fromDate: "2021", toDate: "2021" },
            description: "You can grab your youtube link and paste it and BOOM! mp3 ready to download",
            subHeading: "Technologies Used: HTML, PHP, MySQL, API",
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Amber HEART Academy"}
                subHeading={"PHP Web Developer"}
                fromDate={'2021'}
                toDate={'2022'}
            />
            <ResumeHeading
                heading={"HEART Eastern TVET Institute Stony Hill Campus"}
                subHeading={"Customer Service Supervision Level 3"}
                fromDate={'2019'}
                toDate={'2020'}
            />
            <ResumeHeading
                heading={"High School"}
                subHeading={"Norman Manley High School"}
                fromDate={'2010'}
                toDate={'2016'}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
                heading={"Pending"}
                subHeading={"Pending"}
                fromDate={'...'}
                toDate={'...'}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    ..........
                </span>
            </div>

            <div className="experience-description">
                <span className="resume-description-text">
                    .....
                </span>
                <br />
                <span className="resume-description-text">
                    .....
                </span>
                <br />
                <span className="resume-description-text">
                    .....
                </span>

            </div>
        </div>,
        <div className="resume-screen-container" key="programming-skills">
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{
                            width: skill.ratingPercentage + "%"
                        }} className="active-percentage">

                        </div>
                    </div>
                </div>
            ))}
        </div>,
        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetail, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectDetail.title}
                    subheading={projectDetail.subHeading}
                    description={projectDetail.description}
                    fromDate={projectDetail.duration.fromDate}
                    toDate={projectDetail.duration.toDate}
                />
            ))}
        </div>,
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading='Coding'
                description='Knowledge of coding (or, as some call it, coding literacy) can help in other ways, too. It can mean you are quicker to learn other aspects or tech, plus mean you are more digitally fluent. In today`s ever more digital job market, this can only be of benefit.'
            />
            <ResumeHeading
                heading='Music'
                description='Not Css alone have style check out my recent songs released.'
                subHeading=''
            />
            <ResumeHeading
                heading='Sports'
                description='Football a game everyone love, "diff stilz" I enjoy playing Table Tennis.'
                subHeading='NOTE...!!!"diff stilz" is not a typo'
            />
        </div>

    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img className="bullet-logo" src={require('../../assets/Resume/' + bullet.logoSrc + '')} alt="no internet" />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style}
                className="resume-details-carousal"
            >
                {/* {console.log(carousalOffSetStyle.style)} */}
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

    return (
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'Bio Details'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
