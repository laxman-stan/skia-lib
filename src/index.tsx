import {
  Blur,
  Image,
  type ImageProps,
  type RectProps,
  type SkRect,
  type SkiaProps,
  useImage,
} from '@shopify/react-native-skia';
import React from 'react';
import { type ReactNode } from 'react';

type Props = SkiaProps<RectProps> &
  Omit<SkiaProps<ImageProps>, 'image'> & {
    image: string;
    rect: SkRect;
    loader?: ReactNode;
    blur?: number;
  };

/**
 * @example
 *     <Canvas style={{flex: 1}}>
      <SkImage
        rect={rect(0, 0, 100, 100)}
        image="https://images.unsplash.com/photo-1695209387889-dd34362dc1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2334&q=80"
      />
    </Canvas>
 */

export function SkImage({
  loader,
  image,
  blur,
  fit = 'cover',
  ...rest
}: Props) {
  const imageSrc = useImage(image);
  if (!image && loader) {
    return <>{loader}</>;
  }

  return (
    <Image {...rest} fit={fit} image={imageSrc}>
      {blur && <Blur blur={blur} />}
    </Image>
  );
}
