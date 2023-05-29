import React, { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useCharWidth } from './utils';

export interface IconProps {
  icon: any;
  text: string;
  space?: number | string;
  label?: string;
}

/**
 * The Icon component for inline icon insertion.
 *
 * @param {IconProps} props - The properties for the Icon component.
 * @param {any} props.icon - The source of the SVG icon, either a local asset or a
 * remote URL.
 * @param {string} props.text - The text that will appear next to the icon.
 * @param {number | string} [props.space] - The space between the text and the icon.
 * If not provided, natural word spacing is preserved.
 * @param {string} [props.label] - The label for the icon, which will be read by
 * assistive technologies like screen readers.
 * @returns {React.ReactElement} The rendered Icon component.
 */
export const Icon: FC<IconProps> = ({ icon, text, space = 0, label }) => {
  // TODO: provid the font size via theme.
  const charWidth = useCharWidth(16, 'System');

  const styles = StyleSheet.create({
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    icon: {
      marginRight: space,
      width: charWidth,
      height: charWidth,
    },
  });

  return (
    <View
      style={styles.iconContainer}
      accessible={!!label}
      accessibilityLabel={label}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text>{text}</Text>
    </View>
  );
};
