/** @format */

import { Carousel, Col, Container, Row } from "react-bootstrap";
import NoTransitionExample from "../../components/carousel";
import LeftNav from "../../components/leftNav";
import NavBar from "../../components/nav";
import logo from "../../images/logo1.png";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NavBar />
      <LeftNav />

      <div className='home-conten-bg'>
        <h1 className='home-content-title'>
          Professional Dog Trainer Certification Course
        </h1>
        <p className='home-content-p'>
          <b>
            Welcome to our Professional Dog Trainer Certification Course! If you
            have a passion for working with dogs and want to pursue a rewarding
            career in dog training, this course is the perfect stepping stone
            towards achieving that goal. Our comprehensive program is designed
            to provide you with the knowledge, skills, and practical experience
            necessary to become a successful professional dog trainer. Whether
            you're just starting your journey or looking to enhance your
            existing skills, our course will equip you with the expertise to
            effectively train and communicate with dogs of all breeds and
            temperaments. Join us as we dive into the fascinating world of dog
            behavior, training techniques, and the art of building strong
            human-canine relationships. Get ready to embark on an exciting and
            fulfilling path as a certified professional dog trainer!
          </b>
        </p>
      </div>
    </>
  );
};

export default HomePage;
