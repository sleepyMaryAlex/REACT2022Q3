import React from 'react';
import './About.css';
import rickAndMortyImage from '../../assets/images/rick-and-morty.png';

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <img src={rickAndMortyImage} alt="image" />
        <p>
          Rick and Morty is an American adult animated science-fiction sitcom created by Justin
          Roiland and Dan Harmon for Cartoon Network&apos;s nighttime programming block Adult Swim.
          It is distributed internationally by Warner Bros. Domestic Television. The series follows
          the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful
          grandson Morty Smith, who split their time between domestic life and interdimensional
          adventures that take place across an infinite number of realities, often travelling to
          other planets and dimensions through portals and on Rick&apos;s flying saucer. The general
          concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and
          an alcoholic grandfather dragging his grandson into high jinks.
        </p>
      </div>
    </div>
  );
}

export default About;
