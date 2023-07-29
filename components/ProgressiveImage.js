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

    useEffect(() => {
        return () => {
            // Clean up any running animations and listeners when the component unmounts.
            defaultImageAnimated.removeAllListeners();
            imageAnimated.removeAllListeners();
        }
    }, [defaultImageAnimated, imageAnimated]);

    return (
        <View style={styles.container}>
            <Animated.Image {...props}
            source={defaultImageSource}
            style={[style, { opacity: defaultImageAnimated }]}
            onLoad={handleDefaultImageLoad}
            blurRadius={1}
            />
            <Animated.Image {...props}
            source={source} style={[style, { opacity: imageAnimated }, styles.imageOverlay]}
            onLoad={handleImageLoad}
            />
        </View>
    )
}

export default ProgressiveImage;