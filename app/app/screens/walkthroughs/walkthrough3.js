import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { RkText, RkStyleSheet, RkTheme } from 'react-native-ui-kitten';

export class Walkthrough3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { width } = Dimensions.get('window');
    let image =
      RkTheme.current.name === 'light' ? (
        <Image
          style={{ width }}
          source={require('../../assets/images/screensImage2.png')}
        />
      ) : (
        <Image
          style={{ width }}
          source={require('../../assets/images/screensImageDark.png')}
        />
      );

    return (
      <View style={styles.screen}>
        {image}
        <RkText rkType="header2" style={styles.text}>
          Get legal help from a big network of law firms and lawyers
        </RkText>
      </View>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 30
  }
}));
