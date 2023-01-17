import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styles: [
  ]
})
export class CardUserComponent {
  @Input() user?: User;
}
