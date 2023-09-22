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

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

type Props = SkiaProps<RectProps> &
  Omit<SkiaProps<ImageProps>, 'image'> & {
    image: string;
    rect: SkRect;
    loader?: ReactNode;
    blur?: number;
  };

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
