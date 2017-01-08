import { Injectable, Input } from "@angular/core";

import {SocketService} from './socket.service';

@Injectable()
export class ClientService {
    _nickname:string
    @Input()
    set nickname(nickname:string){
        this._nickname = nickname;
    }
    get nickname() { return this._nickname; } 

    constructor(private socket: SocketService){
        this._nickname = '';
    }
}