import { Component } from '@angular/core';
import { ClientService } from './shared/client.service';

@Component({
  selector: 'chat-app',
  templateUrl: './app.component.html'
})
export class AppComponent { 


  constructor(private client: ClientService) {
  }

  onInit(){
/*      this.socket.join('test-channel')
          .subscribe(function(data: any){
                  console.log(data);
              });*/
  }
}