import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

import { ClientService } from '../shared/client.service';

const template: string = require('./nickname.component.html');

@Component({
    selector: 'nickname',
    styles: [],
    template
})
export class NicknameComponent {

    @Input() visible: boolean = false;
    nicknameForm: FormGroup;

    constructor(private client: ClientService, fb: FormBuilder){
        this.nicknameForm = fb.group({
            'nickname' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
        });
    }

    ngOnChanges(changes: SimpleChanges){
        if (changes['visible']){
           let showModal = changes['visible'].currentValue === true;
           this.toggle(showModal);
        }
    }

    onSubmit(form: any){
       this.client.nickname = form.nickname;
       this.toggle(false);
    }

    toggle(visible: boolean) {
        let command = visible ? 'show' : 'hide';
        $('#innerModal').modal(command);
    }
}