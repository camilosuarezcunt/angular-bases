import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames:String[] = ["ironman", "spiderman", "hulk", "Thor"];
  public deletedHeroe?: String = "";

  removeLastHeroe(): void {
    this.deletedHeroe = this.heroeNames.pop();
  }

}
