import { NgModule } from "@angular/core";

import { ClientService } from "./client.service";
import { SocketService } from "./socket.service";

@NgModule({
    declarations: [
    ],
    providers: [
        ClientService,
        SocketService,
    ],
    exports: [
    ]
})
export class SharedModule {}