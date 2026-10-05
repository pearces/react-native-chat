import React, { type ReactNode } from 'react';
import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import clsx from 'clsx';
import { useHeaderHeight } from '@react-navigation/elements';

interface SafeAreaViewProps extends ViewProps {
  children: ReactNode;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  className?: string;
}

const SafeAreaView = ({
  children,
  className,
  style,
  edges = ['top', 'bottom'],
  ...props
}: SafeAreaViewProps) => {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();

  const paddingTop = edges.includes('top')
    ? headerHeight > 0
      ? 0
      : insets.top
    : 0;

  const paddingBottom = edges.includes('bottom') ? insets.bottom : 0;
  const paddingLeft = edges.includes('left') ? insets.left : 0;
  const paddingRight = edges.includes('right') ? insets.right : 0;

  return (
    <View
      className={clsx('flex-1', className)}
      style={[
        {
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight
        },
        style
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default SafeAreaView;
