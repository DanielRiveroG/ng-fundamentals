import { Injectable } from '@angular/core';

declare let toastr;

@Injectable()
export class ToastrService {
    success(message){
        toastr.success(message);
    }
    info(message){
        toastr.info(message);
    }
    warning(message){
        toastr.warning(message);
    }
    error(message){
        toastr.error(message);
    }
}