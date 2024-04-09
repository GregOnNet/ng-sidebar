import { Routes } from '@angular/router';
import {
  ActivitiesComponent,
  BoardComponent,
  WarehouseComponent,
} from './personell-planning';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/personell-planning/board',
  },
  {
    path: 'personell-planning',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WarehouseComponent,
      },
      {
        path: 'board',
        component: BoardComponent,
      },
      {
        path: 'activities',
        component: ActivitiesComponent,
      },
    ],
  },
];
