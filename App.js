import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Listing from './components/Listing/Listing.js';
import ListingPreview from './components/ListingPreview/ListingPreview.js'

export default function App() {
  return(
    //Uncomment this seciton to test ListingPreview
    <View>
      <ListingPreview
      Title = '[Trade] Bazaar title'
      Content = 'Information about the item here. What are you looking to trade it for, etc. Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. Dolore exercitation nulla tempor consequat aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure quis nulla eu consequat fugiat Lorem sunt magna et consequat labore. Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod culpa exercitation consectetur.{"\n"}{"\n"}Fugiat do aliqua laboris cillum sint dolor officia adipisicing excepteur fugiat officia. Cupidatat ut elit consequat ea laborum occaecat laborum aute consectetur Lorem exercitation. Lorem anim minim officia aliquip commodo deserunt mollit. Duis deserunt quis cillum voluptate duis ipsum quis incididunt elit excepteur excepteur labore duis cillum. Voluptate sint nulla minim eiusmod in nulla. Ea id ad duis esse adipisicing culpa ex esse ea dolore consequat. Reprehenderit eu minim veniam aliquip do ipsum duis do qui adipisicing aliquip ad occaecat.{"\n"}{"\n"}Enim reprehenderit sunt do do. Ex fugiat nisi sit anim culpa nisi. Non labore fugiat culpa magna. Commodo esse Lorem ex duis do et do. Est laboris cupidatat ad est anim adipisicing sit labore do dolor officia. Fugiat consequat in excepteur reprehenderit id aliquip voluptate sint enim proident aliquip occaecat quis non. Ad nulla aliqua est amet aliqua sint est occaecat amet sunt.{"\n"}{"\n"}Ullamco laborum qui sint officia officia ad Lorem culpa minim voluptate occaecat id duis esse. Ullamco sunt magna consectetur excepteur. Id cupidatat proident ex ad elit laboris. Nulla aute sit occaecat laboris. Laboris minim aliquip exercitation elit commodo ipsum et fugiat sit anim laborum proident cillum laboris.{"\n"}{"\n"}Et cillum tempor esse sit anim et veniam. Tempor magna irure ex ea id fugiat. Ex eu sint tempor quis exercitation amet ut deserunt sit fugiat aliquip nostrud nulla. Eu sunt laborum elit consectetur tempor sunt dolore in sunt reprehenderit voluptate dolore adipisicing. Proident eiusmod reprehenderit quis sint exercitation voluptate non labore. Sunt non sint in Lorem occaecat dolore tempor ipsum et proident sit Lorem ipsum officia.'
      Header = 'Poster'
      />
    </View>

//Uncomment this section to test Listing
/*
    <View>
      <Listing
      data = {[
        {key: 1, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 2, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 3, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 4, Title: 'Free item 4', Content: 'This is a free item'},
        {key: 5, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 6, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 7, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 8, Title: 'Free item 4', Content: 'This is a free item'},
        {key: 9, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 10, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 11, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 12, Title: 'Free item 4', Content: 'This is a free item'},
        {key: 13, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 14, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 15, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 16, Title: 'Free item 4', Content: 'This is a free item'},
        {key: 17, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 18, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 19, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 20, Title: 'Free item 4', Content: 'This is a free item'},
      ]}
      />
    </View>*/
  );
};