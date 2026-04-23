export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
  description: string;
  location: string | null;
  is_placeholder: boolean;
}

export const HAS_REAL_PROJECTS = false;
export const SECTION_LABEL = "Recent Work";
export const PLACEHOLDER_NOTE = "";

export const projects: Project[] = [];
export const categories: string[] = [];
