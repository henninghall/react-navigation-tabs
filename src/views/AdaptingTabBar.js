/* @flow */
import React from 'react';

import withDimensions from '../utils/withDimensions';
import BottomTabBar from './BottomTabBar';
import RightTabBar from './RightTabBar';

class AdaptingTabBar extends React.PureComponent<*> {
  render() {
    const TabBar = this.props.isLandscape ? RightTabBar : BottomTabBar;
    return <TabBar {...this.props} />;
  }
}

export default withDimensions(AdaptingTabBar);
