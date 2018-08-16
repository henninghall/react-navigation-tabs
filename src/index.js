/* @flow */
/* eslint-disable import/no-commonjs */

module.exports = {
  /**
   * Navigators
   */
  get createBottomTabNavigator() {
    return require('./navigators/createBottomTabNavigator').default;
  },
  get createAdaptingTabNavigator() {
    return require('./navigators/createAdaptingTabNavigator').default;
  },
  get createMaterialTopTabNavigator() {
    return require('./navigators/createMaterialTopTabNavigator').default;
  },

  /**
   * Views
   */
  get BottomTabBar() {
    return require('./views/BottomTabBar').default;
  },
  get AdaptingTabBar() {
    return require('./views/AdaptingTabBar').default;
  },
  get MaterialTopTabBar() {
    return require('./views/MaterialTopTabBar').default;
  },

  /**
   * Utils
   */
  get createTabNavigator() {
    return require('./utils/createTabNavigator').default;
  },
};
