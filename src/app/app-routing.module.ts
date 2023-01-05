import { BookComponent } from './book/book.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'blog',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'blog',
  //   component: BlogComponent
  // },
  // {
  //   path: 'book',
  //   component: BookComponent
  // },
  // {
  //   path: 'user-item',
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
