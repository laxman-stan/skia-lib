import { type ImageProps, type RectProps, type SkRect, type SkiaProps } from '@shopify/react-native-skia';
import { type ReactNode } from 'react';
type Props = SkiaProps<RectProps> & Omit<SkiaProps<ImageProps>, 'image'> & {
    image: string;
    rect: SkRect;
    loader?: ReactNode;
    blur?: number;
};
export declare function SkImage({ loader, image, blur, fit, ...rest }: Props): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map