import { MenuNode } from './menu-node.type';

export const menu: MenuNode[] = [
  {
    level: 0,
    type: 'menu-label',
    text: 'Warehouse',
    isActive: false,
    isExpandable: true,
    isExpanded: true,
  },
  {
    level: 1,
    type: 'menu-label',
    text: 'Personell Planning',
    isActive: false,
    isExpandable: true,
    isExpanded: false,
  },
  {
    level: 2,
    type: 'menu-link',
    text: 'Board',
    path: '/personell-planning/board',
    isActive: false,
  },
  {
    level: 2,
    type: 'menu-link',
    text: 'Activities',
    path: '/personell-planning/activities',
    isActive: false,
  },
];
