import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/entities/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  listaNoticias: Noticia[];
  constructor(private NoticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.NoticiasService.noticiasSelect().subscribe(
      (res: Noticia[]) => {
        console.log(res);

        this.listaNoticias = res['noticias'];
       }
    )
  }


} 