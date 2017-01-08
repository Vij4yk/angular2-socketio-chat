import * as io from "socket.io-client";
import { Observable } from "rxjs";
    
function RxfromIO (io: any, eventName: string): Observable<any> {
    return Observable.create( (observer:  any) => {
        io.on(eventName, (data: any) => {
            observer.onNext(data)
        });
        return {
            dispose : io.close
        }
        });
}

export class ObservableClient {
    client: any;

    constructor(options: any){
        this.client = io.connect('http://localhost:62226');
    }

    join(channel: string) {
            this.client.emit('join-channel', { data: channel });
            return {
                listen: function() { 
                    return RxfromIO(this.client, 'message'); 
                },
                send: function(message: string) { this.client.emit('message', {
                        to: channel,
                        data: message
                    }); 
                }
            }
    }

    leave(channel: string) {
                this.client.emit('leave-channel', { data: channel });
            }
}
    