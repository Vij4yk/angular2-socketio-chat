import { Injectable } from "@angular/core";
import { ObservableClient } from "../../models/observable-client";

@Injectable()
export class SocketService{
    client: ObservableClient;

    constructor(){
        this.client = new ObservableClient({}); // TODO: add env related options
    }

    join(channel: string) {
        return this.client.join('test-channel')
                   .listen();
    }
}

