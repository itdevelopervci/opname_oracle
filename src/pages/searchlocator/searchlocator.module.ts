import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchlocatorPage } from './searchlocator';

@NgModule({
  declarations: [
    SearchlocatorPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchlocatorPage),
  ],
})
export class SearchlocatorPageModule {}
