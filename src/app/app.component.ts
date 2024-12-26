import { routes } from './app.routes';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { FooterComponent } from "./component/footer/footer.component";
import { GrowthComponent } from "./component/growth/growth.component";

import { PopelarTopComponent } from "./component/popelar-top/popelar-top.component";
import { OurExpertsComponent } from "./component/our-experts/our-experts.component";
import { PowerComponent } from "./component/power/power.component";
import { AiPowredComponent } from "./component/ai-powred/ai-powred.component";
import { OurLoveComponent } from "./component/our-love/our-love.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MenubarModule, NavbarComponent, FooterComponent, GrowthComponent, PopelarTopComponent, OurExpertsComponent, PowerComponent, AiPowredComponent, OurLoveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit  {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
          label: 'home',
          icon: 'pi pi-home',
        
         
      },
      {
          label: 'about',
          icon: 'pi pi-star',
          
      },
    
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
      
      }
  ]
  }
  
}
