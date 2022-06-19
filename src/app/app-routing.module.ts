import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'twitter',
    loadChildren: () => import('./twitter/twitter.module').then(m => m.TwitterAccountModule),
  },
  {path: '**', redirectTo: 'twitter'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
