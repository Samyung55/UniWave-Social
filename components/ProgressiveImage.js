import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const ProgressiveImage = ({ defaultImageSource, source, style, ...props }) => {
    const [defaultImageAnimated, setDefaultImageAnimated] = useState(new Animated.Value(0));
    const [imageAnimated, setImageAnimated] = useState(new Animated.Value(0));

    const handleDefaultImageLoad = () => {
        Animated.timing(defaultImageAnimated, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const handleImageLoad = () => {
        Animated.timing(imageAnimated, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    }
}