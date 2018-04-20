import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { MenuListComponent } from './../../components/menu-list/menu-list';

@NgModule({
  declarations: [
    HomePage,
    MenuListComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
