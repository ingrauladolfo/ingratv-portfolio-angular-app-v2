import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHomeComponent } from './pages/about-home/about-home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';



@NgModule({
  declarations: [AboutHomeComponent, AboutMeComponent],
  imports: [
    CommonModule
  ],exports: [AboutHomeComponent]
})
export class AboutModule { }
