import { HTMLProps } from "react";

const omit = ['classname', 'rel', 'size'] as const;

export type AnchorProps = Omit<
  HTMLProps<HTMLAnchorElement>,
  typeof omit[number]
>;

export type TabContent = {
  slug: string;
  tabLabel: string;
  content: string;
}

export type indexContentType = {
  content: {
    [key: string]: string
  };
  cta: {
    [key: string]: AnchorProps;
  }
}

export type metadataType = {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
}