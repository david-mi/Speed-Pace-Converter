import { Animated, Easing } from "react-native";
import { useRef, useEffect } from "react";

interface Props {
  focused: boolean
}

function useTextInputAnimations({ focused }: Props) {
  const animation = useRef(new Animated.Value(0)).current;
  const labelBackgroundColor = animation.interpolate(({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 165, 39)", "rgb(255, 187, 92)"]
  }))
  const inputContainerBackgroundColor = animation.interpolate(({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 232, 199)", "rgb(255, 255, 255)"]
  }))
  const currentAnimationValue = focused ? 0 : 1

  useEffect(() => {
    Animated
      .timing(animation, {
        toValue: currentAnimationValue,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.bezier(0, 0, 0.58, 1)
      })
      .start(() => animation.setValue(currentAnimationValue))
  }, [focused])

  return {
    labelBackgroundColor,
    inputContainerBackgroundColor
  }
}

export default useTextInputAnimations;