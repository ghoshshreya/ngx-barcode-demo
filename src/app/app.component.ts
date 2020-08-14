import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public serialNo: string = null;
  public serialNoInput: string  = null;
  public selectedFormat: any = 'CODE128';

  public formatArr : any[] = [
    'CODE128',
    'CODE128A', 
    'CODE128B', 
    'CODE128C',
    'UPC', 
    'EAN8', 
    'EAN5', 
    'EAN2',
    'CODE39',
    'ITF14',
    'MSI', 
    'MSI10', 
    'MSI11', 
    'MSI1010', 
    'MSI1110',
    'pharmacode',
    'codabar'
  ];
}
