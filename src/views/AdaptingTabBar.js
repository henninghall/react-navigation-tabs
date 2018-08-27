import React from 'react';
import { StyleSheet } from 'react-native';

import BottomTabBar from './BottomTabBar';
import RightTabBar from './RightTabBar';
import {
  ScreenOrientation,
  getScreenOrientation,
  Orientation,
} from 'react-native-screen-orientation-listener';

class AdaptingTabBar extends React.PureComponent {
  state = {
    orientation: getScreenOrientation(),
  };

  orientationChange = orientation => this.setState({ orientation });

  render() {
    const TabBar =
      this.state.orientation === Orientation.LANDSCAPE
        ? RightTabBar
        : BottomTabBar;
    return (
      <ScreenOrientation
        onRotate={this.orientationChange}
        style={styles.container}
      >
        <TabBar {...this.props} />
      </ScreenOrientation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default AdaptingTabBar;
