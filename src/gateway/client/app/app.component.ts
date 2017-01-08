import { Component } from '@angular/core';
import { SocketService } from './shared/socket.service';

@Component({
  selector: 'chat-app',
  templateUrl: './app.component.html'
})
export class AppComponent { 

  constructor(private socket: SocketService) {
    
  }

  onInit(){
      this.socket.join('test-channel')
          .subscribe(function(data: any){
                  console.log(data);
              });
  }
}