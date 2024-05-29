import {Component} from "@angular/core";
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms' // it gives NgModule

@Component({ /** here we have to user inbuild var for html or css otherwise will give error */
    standalone : true,
    imports: [RouterOutlet, FormsModule], /** standalone : true must be with */
    selector: 'app-root',
    templateUrl :'./app.component.event.html',
    styleUrls : ['./app.component.event.css']
})

export class EventAppComponent{

    randomcolor  = this.getRandomColor();
    heading : string = "Main Heading"
    course : string = "Angular Event Component"



    /*####### Methods ######################################*/
     public getRandomColor(){
        var letter = '0123456789ABCDEFG'.split('');
        var color = '#';
        for(var i = 0 ; i < 6 ; i++){
            color += letter[Math.floor(Math.random()*16)];
        }
        return color;
      }
      setColor(){
        this.getRandomColor();
      }
}
