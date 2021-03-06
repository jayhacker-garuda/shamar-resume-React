import Typical from 'react-typical'

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className='colz-icon'>
                            <a href="https://www.twitch.tv/donxhatake">
                                <i className="fa fa-twitch"></i>
                            </a>
                            <a href="https://github.com/jayhacker-garuda">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/shamar-stewart-583304195/">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span>
                            {" "}
                            Hello, I'm <span className="highlighted-text">SHAM DON</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Top Coder 💻",
                                        1000,
                                        "Music Engineer 🎶",
                                        1000,
                                        "Into Crypto 🔮",
                                        1000,
                                        "Play's Brawlhalla 🎮",
                                        1000,
                                        "Enjoy Playing Sports ⚽",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Train your mind to see the good in every situation.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
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
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    );
}


export default Profile;
