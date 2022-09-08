import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { SearchSymbolComponent } from './Components/search-symbol/search-symbol.component';
import { SentimentsDetailsComponent } from './Components/sentiments-details/sentiments-details.component';

const routes: Routes = [
  {path: 'stock-tracker', component: SearchSymbolComponent},
  {path: 'sentiment/:symbol', component: SentimentsDetailsComponent},
  {path: '', redirectTo: '/stock-tracker', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
