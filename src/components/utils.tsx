import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

/**
 * A custom hook that returns the width of a character in a given font and size.
 *
 * @param {number} fontSize - The font size to use for the measurement.
 * @param {string} fontFamily - The font family to use for the measurement.
 * @param {string} [chars="mmm"] - The text to be measured for calculating the character width. Defaults to "mmm".
 * @returns {number} The width of a character in the given font and size, or `5` if the width has not been measured yet.
 */
export const useCharWidth = (
  fontSize: number,
  fontFamily: string,
  chars = 'mmm'
) => {
  const [charWidth, setCharWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const OffscreenComponent = () => (
      <View style={{ position: 'absolute', left: -10000, top: 0, opacity: 0 }}>
        <Text
          onTextLayout={(e) => {
            const textWidth = e.nativeEvent.lines[0]?.width ?? 5;
            const charCount = e.nativeEvent.lines[0]?.text.length ?? 5;

            setCharWidth(textWidth / charCount);
          }}
          style={{ fontSize, fontFamily }}
        >
          {chars}
        </Text>
      </View>
    );

    // Create a hidden Text component offscreen, so that it doesn't interfere
    // with the actual UI rendering. By placing it offscreen, you can measure
    // the width of the text and calculate the character width without displaying
    // it on the screen.
    const offscreenComponent = <OffscreenComponent />;

    return () => {
      setCharWidth(undefined);
    };
  }, [fontSize, fontFamily, chars]);

  return charWidth;
};
