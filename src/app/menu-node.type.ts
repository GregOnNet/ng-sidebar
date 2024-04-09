export type MenuNode = MenuLabel | MenuLink;

type MenuLink = {
  type: 'menu-link';

  level: number;

  text: string;
  path: string;
  icon?: string;

  isActive: boolean;
};

type MenuLabel = {
  type: 'menu-label';

  level: number;

  text: string;
  icon?: string;

  isExpandable: boolean;
  isExpanded: boolean;
  isActive: boolean;
};
