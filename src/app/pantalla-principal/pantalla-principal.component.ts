import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }


  ngOnInit(): void {
  }

}
