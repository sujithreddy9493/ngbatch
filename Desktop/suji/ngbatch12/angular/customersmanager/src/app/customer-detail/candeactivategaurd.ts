import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EditcustomerComponent } from './editcustomer.component';

export class CanDeactivateGaurd implements CanDeactivate<EditcustomerComponent> {
    constructor(){}
    canDeactivate(component: EditcustomerComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot):boolean{
        var userConfirmation = confirm('Do you want to leave the page without saving ?');
        if(userConfirmation){
            return true;
        }else{
            return false;
        }
    }

}