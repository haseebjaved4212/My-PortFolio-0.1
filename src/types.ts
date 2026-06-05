/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // percentage level for the progress indicators
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface NavItem {
  label: string;
  href: string;
}
