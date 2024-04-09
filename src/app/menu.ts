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
    text: 'Disposition',
    isActive: false,
    isExpandable: true,
    isExpanded: false,
  },
  {
    level: 2,
    type: 'menu-link',
    text: 'Board',
    path: '/warehouse',
    isActive: false,
  },
  {
    level: 2,
    type: 'menu-link',
    text: 'Activities',
    path: '/warehouse/activities',
    isActive: false,
  },
];
