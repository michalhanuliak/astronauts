import React from 'react';

import AstronautList from '../../containers/astronautList';
import Navbar from '../../containers/navbar';

import {
  HomePageContainer,
  HomePageContent,
  HomePageSubtitle,
  HomePageTitle,
} from './homePage';

const HomePage = () => (
  <HomePageContainer>
    <Navbar />
    <HomePageContent>
      <HomePageTitle> Astronauts </HomePageTitle>
      <HomePageSubtitle>
        Bonbon sesame snaps liquorice fruitcake chupa chups.
        Chocolate cake chocolate cake candy canes marzipan
        sugar plum bear claw toffee chupa chups caramels.
        Chupa chups caramels candy canes ice cream gummi bears.
        Jelly-o apple pie sugar plum jelly. Brownie gummies sweet.
        Pudding croissant apple pie tootsie roll.
        Wafer macaroon chocolate bar.
        Croissant powder sweet roll muffin icing gummies.
      </HomePageSubtitle>
      <AstronautList />
    </HomePageContent>
  </HomePageContainer>
);
export default HomePage;
