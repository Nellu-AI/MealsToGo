/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';

import {SafeArea} from '../../../components/safeArea/safe-area.component';
import RestaurantInfoCard from '../components/restaurant-info/restaurant-card';

const RestaurantDetail = ({route}) => {
  const [breakfastDrop, setBreakfastDrop] = useState(false);
  const [lunchDrop, setLunchDrop] = useState(false);

  const [dinnerDrop, setDinnerDrop] = useState(false);

  const [drinksDrop, setDrinksDrop] = useState(false);

  const {restaurant} = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />

      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={props => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastDrop}
          onPress={() => setBreakfastDrop(!breakfastDrop)}>
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchDrop}
          onPress={() => setLunchDrop(!lunchDrop)}>
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerDrop}
          onPress={() => setDinnerDrop(!dinnerDrop)}>
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          expanded={drinksDrop}
          onPress={() => setDrinksDrop(!drinksDrop)}>
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetail;
