import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-Practice';
  course:string = "Angular";
  isInvalid:boolean = false;
  // Style binding
  randomColor  = this.getRandomColor();
  heading:string = 'main heading';
  hasError:boolean = true;
  isspeical:boolean = true;
  style1:string = 's1';



  //#####################################################
  public getRandomColor(){
    var letter = '0123456789ABCDEFG'.split('');
    var color = '#';
    for(var i = 0 ; i < 6 ; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
  }

  // function to set new random color
  setColor(){
    this.randomColor = this.getRandomColor();
  }
  msgs={
    'success' :!this.hasError,
    'failure' :this.hasError,
    'special' :this.isspeical
  
  }

}
