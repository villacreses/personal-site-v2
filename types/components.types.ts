import {HTMLProps} from "react";

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
  callToActionText?: string;
}

export interface TTimelineEntry {
  slug: string,
  tabLabel: string,
  startDate: string,
  endDate?: string,
  content: string,
} 

export type ProjectGridItemProps = {
  slug: string;
  title: string;
  description: string;
  tools?: Array<string>;
  github?: string;
  website?: string;
  note?: string;
}

export enum ExperienceCategory {
  JOBS = "JOBS",
  HACKATHON = "HACKATHON",
  EDUCATION = "EDUCATION",
}

/**
 * NOTE: In the case of `endDate`, we make use of all three possible 
 * types: `string`, `null`, and `undefined`. A null end date means the 
 * listed position is ongoing (corresponding to an end date of "Present"),
 * while and undefined end date signals that the listed position was a 
 * single-day occurence (thus using an end date makes no sense)
 */
export type ExperienceMetadata = {
  slug: string;
  category: ExperienceCategory;
  shortLabel: string;
  companyName: string;
  companyUrl?: string;
  positions: Array<{
    title: string;
    location: string;
    startDate: string;
    endDate?: string | null;
    flavorText?: string;
    impact?: string[];
    impactShort?: string[]; // truncated version
  }>;
}