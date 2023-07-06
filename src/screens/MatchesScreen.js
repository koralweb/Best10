import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import matches from '../data/matches';
import colors from '../data/colors';

const MatchesScreen = ({navigation}) => {
  const renderMathes = () => {
    return matches
      .filter(el => el.date >= new Date().getDate())
      .map(match => {
        return (
          <View style={styles.item} key={Math.random()}>
            <View style={styles.topLine}>
              <Text style={{color: 'grey'}}>
                {match.date}.07.2023 - {match.time}
              </Text>
              <Text style={{color: colors.green}}>{match.liga}</Text>
            </View>
            <Text style={styles.team}>{match.team1}</Text>
            <Text style={styles.team}>{match.team2}</Text>
          </View>
        );
      });
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView>{renderMathes()}</ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#252525',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  team: {
    color: '#fff',
    marginTop: 10,
    fontSize: 20,
  },
});

export default MatchesScreen;
