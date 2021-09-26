import { FC, ComponentProps, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ProfileImage.module.scss';

type ProfileImageProps = ComponentProps<typeof Image>;

/**
 * I'm not happy with this mess of nested divs, but I wanted
 * to use CSS grid to at least keep index.tsx relatively div-free.
 */
const ProfileImage: FC<ProfileImageProps> = ({
  width,
  height,
  alt = 'Profile image',
  ...props
}) => (
  <div className={styles.grid}>
    <div className={styles.ratio}>
      <div
        className={styles.container}
        data-container="image"
        style={{
          maxWidth: width,
          maxHeight: height
        }}
      >
        <Image
          width={width}
          height={height}
          alt={alt}
          {...props}
        />
      </div>
    </div>
  </div>
);

export default ProfileImage;