import React from 'react'
import Navigation from "../navigation/Navigation";
import Jumbo from '../upperBody/jumbotron';
import Membership from '../upperBody/Membeship';
import News from '../upperBody/News';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Jumbo />
            <News />
            <Membership />
            <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
                <div class="container text-center">
                    <small>Copyright &copy; Your Website</small>
                </div>
            </footer>
        </div>
    )
}

export default Home