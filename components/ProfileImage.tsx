import { FC, ComponentProps, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ProfileImage.module.scss';

type ProfileImageProps = ComponentProps<typeof Image>;

const ProfileImage: FC<ProfileImageProps> = ({
  width,
  height,
  alt = 'Profile image',
  ...props
}) => (
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
);


export default ProfileImage;