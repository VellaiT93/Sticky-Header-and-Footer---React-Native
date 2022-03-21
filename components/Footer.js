import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Easing } from "react-native";
import Animated from "react-native-reanimated"; // 60 FPS
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";
import * as shape from "d3-shape";

const FOOTER_HEIGHT = 50;
const screenHeight = Dimensions.get("window").height;
const height = 64;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

// Path shape
const getPath = () => {
  const tab = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)([
    { x: 0, y: 0 },
    { x: 5, y: 0 },
    { x: 15, y: 10 },
    { x: 20, y: height },
    { x: 75, y: height },
    { x: 80, y: 10 },
    { x: 90, y: 0 },
    { x: 95, y: 0 },
  ]);
  return `${tab}`;
};

/***
 * Footer JSX component
 * @param animatedValue
 ***/
const Footer = ({ animatedValue }) => {
  // Initial scale value of animated buttons
  const shapeX = useRef(new Animated.Value(0)).current;
  const settingVal = useRef(new Animated.Value(0)).current;
  const menuVal = useRef(new Animated.Value(0)).current;
  const greenVal = useRef(new Animated.Value(0)).current;
  const locationVal = useRef(new Animated.Value(0)).current;
  const plusVal = useRef(new Animated.Value(0)).current;

  const [settingScale, setSettingScale] = useState(false);
  const [menuScale, setMenuScale] = useState(false);
  const [greenScale, setGreenScale] = useState(false);
  const [locationScale, setLocationScale] = useState(false);
  const [plusScale, setPlusScale] = useState(false);

  const d = getPath();

  // Fix footer position while scrolling
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      screenHeight - FOOTER_HEIGHT,
      1 + screenHeight - FOOTER_HEIGHT,
    ],
    extrapolateLeft: "clamp",
  });

  // Translate X of shape
  const translateX = shapeX.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5],
    outputRange: [-100, 40, 100, 160, 220, 280],
  });

  // Setting button scale
  const setting = settingVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  // Setting button scale
  const settingY = settingVal.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -5],
  });

  // Menu button scale
  const menu = menuVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  // Menu button move
  const menuY = menuVal.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -5],
  });

  // Green button scale
  const green = greenVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  // Green button move
  const greenY = greenVal.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -5],
  });

  // Location button scale
  const location = locationVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  // Location button move
  const locationY = locationVal.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -5],
  });

  // Plus button scale
  const plus = plusVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  // Plus button move
  const plusY = plusVal.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -5],
  });

  // Clear
  const clear = () => {
    if (settingScale === true) setSettingScale(false);
    if (menuScale === true) setMenuScale(false);
    if (greenScale === true) setGreenScale(false);
    if (locationScale === true) setLocationScale(false);
    if (plusScale === true) setPlusScale(false);
  };

  useEffect(() => {
    Animated.timing(settingVal, {
      toValue: settingScale ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(menuVal, {
      toValue: menuScale ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(greenVal, {
      toValue: greenScale ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(locationVal, {
      toValue: locationScale ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(plusVal, {
      toValue: plusScale ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [settingScale, menuScale, greenScale, locationScale, plusScale]);

  // Footer JSX component
  return (
    <Animated.View
      style={[
        styles.footer,
        { height: FOOTER_HEIGHT },
        { transform: [{ translateY: translateY }] },
      ]}
    >
      <AnimatedSvg
        style={[styles.svg, { transform: [{ translateX: translateX }] }]}
        width={95}
      >
        <Path fill={"#fff"} {...{ d }} />
      </AnimatedSvg>
      <View style={styles.menu}>
        <TouchableWithoutFeedback
          style={styles.item}
          onPress={() => {
            clear();
            Animated.timing(shapeX, {
              toValue: 1,
              duration: 200,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start();
            setSettingScale(true);
          }}
        >
          <Animated.View
            style={[
              { transform: [{ scale: setting }, { translateY: settingY }] },
            ]}
          >
            <AntDesign name="setting" size={36} color="black" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.item}
          onPress={() => {
            clear();
            Animated.timing(shapeX, {
              toValue: 2,
              duration: 200,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start();
            setMenuScale(true);
          }}
        >
          <Animated.View
            style={[{ transform: [{ scale: menu }, { translateY: menuY }] }]}
          >
            <MaterialCommunityIcons name="menu" size={36} color="grey" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.item}
          onPress={() => {
            clear();
            Animated.timing(shapeX, {
              toValue: 3,
              duration: 200,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start();
            setGreenScale(true);
          }}
        >
          <Animated.View
            style={[{ transform: [{ scale: green }, { translateY: greenY }] }]}
          >
            <Ionicons name={"md-checkmark-circle"} color="green" size={36} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.item}
          onPress={() => {
            clear();
            Animated.timing(shapeX, {
              toValue: 4,
              duration: 200,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start();
            setLocationScale(true);
          }}
        >
          <Animated.View
            style={[
              { transform: [{ scale: location }, { translateY: locationY }] },
            ]}
          >
            <Entypo name="location-pin" size={36} color="red" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.item}
          onPress={() => {
            clear();
            Animated.timing(shapeX, {
              toValue: 5,
              duration: 200,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start();
            setPlusScale(true);
          }}
        >
          <Animated.View
            style={[, { transform: [{ scale: plus }, { translateY: plusY }] }]}
          >
            <AntDesign name="pluscircleo" size={36} color="black" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
    zIndex: 10,
    backgroundColor: "rgb(192,192,192)",
  },

  svg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
    left: 0,
  },

  menu: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    marginTop: 2,
    padding: 2,
    zIndex: 10,
  },

  item: {
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Footer;
