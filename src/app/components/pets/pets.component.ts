import { Component } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import { PetsService } from '../../shared/pets.service';
import { RouterLink } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [RouterLink, PaginatorModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  myPets: Pet[] = [];
  trn: number = 0;
  arrImgs2 = [
    { id: '0', img: '../../../assets/images/amy_2.jpg' },
    { id: '1', img: '../../../assets/images/tonton_2.jpg' },
    { id: '2', img: '../../../assets/images/molly_2.jpg' },
    { id: '3', img: '../../../assets/images/pato_2.jpg' },
    { id: '4', img: '../../../assets/images/sasil_2.jpg' },
    { id: '5', img: '../../../assets/images/yuyis_2.jpg' },
    { id: '6', img: '../../../assets/images/trixie_2.jpg' },
    { id: '7', img: '../../../assets/images/rayito_2.jpg' },
    { id: '8', img: '../../../assets/images/itzia&temmy_2.jpg' },
    { id: '9', img: '../../../assets/images/rocko_2.jpg' },
    { id: '10', img: '../../../assets/images/gorda_2.jpg' },
    { id: '11', img: '../../../assets/images/pipa_2.jpg' },
    { id: '12', img: '../../../assets/images/chimi_2.jpg' },
    { id: '13', img: '../../../assets/images/monkey_2.jpg' },
    { id: '14', img: '../../../assets/images/dizzy_2.jpg' },
    { id: '15', img: '../../../assets/images/changa_2.jpg' },
    { id: '16', img: '../../../assets/images/brother_2.jpg' },
    { id: '17', img: '../../../assets/images/grogu_2.jpg' },
    { id: '18', img: '../../../assets/images/korra_2.jpg' },
    { id: '19', img: '../../../assets/images/merida_2.jpg' },
    { id: '20', img: '../../../assets/images/tobias_2.jpg' },
  ];
  arrImgs1 = [
    { id: '0', img: '../../../assets/images/amy.jpg' },
    { id: '1', img: '../../../assets/images/tonton.jpg' },
    { id: '2', img: '../../../assets/images/molly.jpg' },
    { id: '3', img: '../../../assets/images/pato.jpg' },
    { id: '4', img: '../../../assets/images/sasil.jpg' },
    { id: '5', img: '../../../assets/images/yuyis.jpg' },
    { id: '6', img: '../../../assets/images/trixie.jpg' },
    { id: '7', img: '../../../assets/images/rayito.jpg' },
    { id: '8', img: '../../../assets/images/itzia&temmy.jpg' },
    { id: '9', img: '../../../assets/images/rocko.jpg' },
    { id: '10', img: '../../../assets/images/gorda.jpg' },
    { id: '11', img: '../../../assets/images/pipa.jpg' },
    { id: '12', img: '../../../assets/images/chimi.jpg' },
    { id: '13', img: '../../../assets/images/monkey.jpg' },
    { id: '14', img: '../../../assets/images/dizzy.jpg' },
    { id: '15', img: '../../../assets/images/changa.jpg' },
    { id: '16', img: '../../../assets/images/brother.jpg' },
    { id: '17', img: '../../../assets/images/grogu.jpg' },
    { id: '18', img: '../../../assets/images/korra.jpg' },
    { id: '19', img: '../../../assets/images/merida.jpg' },
    { id: '20', img: '../../../assets/images/tobias.jpg' },
  ];
  constructor(public petService: PetsService) {}

  ngOnInit(): void {
    this.myPets = this.petService.getPets();
    this.trn = this.myPets.length;
  }

  changeImg(event: MouseEvent) {
    // console.log(event.target);

    this.arrImgs2.forEach((item, i) => {
      if (event.target instanceof HTMLImageElement) {
        if (event.target.id == item.id) {
          event.target.setAttribute('src', item.img);
        }
      }
    });
  }

  returnImg(event: MouseEvent) {
    this.arrImgs1.forEach((item, i) => {
      if (event.target instanceof HTMLImageElement) {
        if (event.target.id == item.id) {
          event.target.setAttribute('src', item.img);
        }
      }
    });
  }
}
