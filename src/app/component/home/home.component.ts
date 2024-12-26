import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../user.service';
import { IUser } from '../../iuser';
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, CommonModule, HttpClientModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  
}
