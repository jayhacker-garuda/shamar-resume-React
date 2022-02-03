import Profile from "./Profile/Profile";
import Footer from "../Footer/Footer";
import Header from "./Header/Header";

function Home() {
    return (
        <div className="home-container">
            <Header />
            <Profile />
            <Footer />
        </div>
    );
}

export default Home;
