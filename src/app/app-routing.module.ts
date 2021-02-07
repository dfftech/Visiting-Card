import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { VisitingCardComponent } from './components/visiting-card/visiting-card.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'visiting', component: VisitingCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
