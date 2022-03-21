import React, { useRef } from "react";
import {
  StyleSheet,
  Button,
  Easing,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated"; // 60 FPS
import { FontAwesome } from "@expo/vector-icons";

// Header height
const HEADER_HEIGHT = 100;

/***
 * Header JSX component
 * @param animatedValue
 ***/
const Header = ({ animatedValue }) => {
  // New animated value for button scale
  const animatedButtonScale = useRef(new Animated.Value(0)).current;

  let val = 100;

  // Control header height on scroll
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, HEADER_HEIGHT / 2],
    extrapolate: "clamp",
  });

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      val,
      [-HEADER_HEIGHT, 0, HEADER_HEIGHT - 10, HEADER_HEIGHT],
      [
        "rgba(128, 128, 128, 0.1)",
        "rgba(128, 128, 128, 0.6)",
        "rgba(128, 128, 128, 0.8)",
        "rgba(128, 128, 128, 0.9)",
      ]
    );

    return { backgroundColor };
  });

  // Fix header position while scrolling
  const translateHeader = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, HEADER_HEIGHT],
    extrapolateLeft: "clamp",
  });

  // Translate title and menu on scroll
  const translateY = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT / 3],
    extrapolate: "clamp",
  });

  // Home button scale
  const buttonScale = animatedButtonScale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.3],
  });

  // When button is pressed in, animate the scale to 1
  const onPressIn = () => {
    Animated.timing(animatedButtonScale, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  // When button is pressed out, animate the scale back to 0
  const onPressOut = () => {
    Animated.timing(animatedButtonScale, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.header,
        { height: headerHeight },
        rStyle,
        { transform: [{ translateY: translateHeader }] },
      ]}
    >
      <Animated.Text
        style={[styles.title, { transform: [{ translateY: translateY }] }]}
      >
        Stick Header and Footer
      </Animated.Text>
      <Animated.View
        style={[styles.menu, { transform: [{ translateY: translateY }] }]}
      >
        <TouchableWithoutFeedback
          onPress={() => RootNavigation.navigate("Home", {})}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Animated.View style={[{ transform: [{ scale: buttonScale }] }]}>
            <FontAwesome name="home" size={36} color="black" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <Button title="Item" style={styles.button} onPress={() => {}} />
        <Button title="Item" style={styles.button} onPress={() => {}} />
        <Button title="Item" style={styles.button} onPress={() => {}} />
        <Button title="Item" style={styles.button} onPress={() => {}} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
  },

  title: {
    paddingBottom: 6,
    fontWeight: "bold",
    fontSize: 26,
    color: "#fff",
  },

  menu: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 3,
    padding: 5,
  },

  button: {
    fontWeight: "bold",
    backgroundColor: "red",
    color: "red",
    margin: 5,
  },
});

export default Header;
