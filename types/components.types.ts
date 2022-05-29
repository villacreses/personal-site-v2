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

export type metadataType = {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
}

type SectionCTA = {
  href: string;
  text: string;
}

export type HeaderOptions = {
  showHeader?: boolean;
  titleStyle?: 'small' | 'default'
};

type Schema = Array<{
  component: string;
  props: {
    id: string;
    [key: string]: any;
  }
}>;


export type Section = {
  id: string;
  header: string;
  headerOptions?: HeaderOptions;
  navHeader?: string;
  markdown?: string;
  miscLayout?: Schema;
  callToAction?: SectionCTA;
}