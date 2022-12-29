import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'fal fa-box-open',
    label: 'Products',
    items: [
      {
        routeLink: 'product/list',
        label: 'List Products',
      },
      {
        routeLink: 'product/create',
        label: 'Create Products',
      },
    ],
  },
  {
    routeLink: 'statistics',
    icon: 'fal fa-chart-bar',
    label: 'Statistics',
  },
  {
    routeLink: 'pages',
    icon: 'fal fa-file',
    label: 'Pages',
    items: [
      {
        routeLink: 'pages/list',
        label: 'List Pages',
        items: [
          {
            routeLink: 'pages/list1.1',
            label: 'List Pages 1',
          },
        ],
      },
      {
        routeLink: 'pages/create',
        label: 'Create Pages',
      },
    ],
  },
  {
    routeLink: 'media',
    icon: 'fal fa-camera',
    label: 'Media',
    expanded: true,
    items: [
      {
        routeLink: 'media/list',
        label: 'List Media',
      },
      {
        routeLink: 'media/create',
        label: 'Create Media',
      },
    ],
  },
];
