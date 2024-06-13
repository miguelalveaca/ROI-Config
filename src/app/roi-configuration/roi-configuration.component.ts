import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
//import { SdsAlertModule, SdsButtonModule, SdsLoaderModule} from "@altera/sunrise-components";
//import { SdsIconsModule } from "@altera/sunrise-icons";


@Component({
    selector: 'my-app',
    standalone: true,
    imports: [DialogsModule,CommonModule,ButtonsModule], //SdsAlertModule,SdsButtonModule,SdsLoaderModule,SdsIconsModule],
    styleUrls: ['./roi-configuration.component.css'],
    templateUrl:'./roi-configuration.component.html'
})
export class AppComponent implements OnInit{
        public opened = false;
        public close(status:string)  {
          this.opened = false;
        }

    public open()  {
        this.opened = true;
    }
    ngOnInit()
    {
      this.open()
    }    
}
