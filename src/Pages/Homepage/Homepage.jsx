/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import HomeView from "./HomeView";

const Homepage = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([false, false, false]);
  const featureRefs = useRef([]);
  const signupRef = useRef(null);
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false); // State for hero section animation

  useEffect(() => {
    // Trigger the hero fade-in animation when the component mounts
    setIsHeroVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleFeatures((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target);
          }

          if (entry.target === signupRef.current && entry.isIntersecting) {
            setIsSignupVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    featureRefs.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    if (signupRef.current) {
      observer.observe(signupRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <HomeView
      isHeroVisible={isHeroVisible}
      featureRefs={featureRefs}
      visibleFeatures={visibleFeatures}
      signupRef={signupRef}
      isSignupVisible={isSignupVisible}
    />
  );
};

export default Homepage;
