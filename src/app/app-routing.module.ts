import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './feature/error/error.component';
import { HomeComponent } from './feature/home/home.component';
import { NextComponent } from './feature/next/next.component';
import { PrevComponent } from './feature/prev/prev.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "next", component: NextComponent },
  { path: "prev", component: PrevComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
