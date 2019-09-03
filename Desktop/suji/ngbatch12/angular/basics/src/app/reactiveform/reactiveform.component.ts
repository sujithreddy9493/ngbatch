import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

function ratingValidation(a,b){
return function (control:AbstractControl):null |{[Key:string]:boolean}{
  console.log(control.value);
  if(control.value < a || control.value > b){
    return{
      check:true
    }
  }
  return null;
}
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
  rootFormGroup;

  ngOnInit() { 
    this.rootFormGroup = new FormGroup({
      name: new FormControl('',Validators.required),
      rating:new FormControl('',[Validators.required,ratingValidation(1,10)]),
      notifymethod: new FormControl('phone'),
      phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      email: new FormControl('',Validators.required),
      address: new FormGroup({
        city: new FormControl('',Validators.required),
        state:new FormControl('',Validators.required)
      })
      
    })
}

notificationProcess(){
  let chooseNotificationMethod = this.rootFormGroup.get('notifymethod');
  setTimeout(() =>{
  let phone = this.rootFormGroup.get('phone');
  let email = this.rootFormGroup.get('email');
  console.log('chooseNotificationMethod',chooseNotificationMethod.value);
  if(chooseNotificationMethod.value ==='phone'){
    phone.setValidators([Validators.required]);
    email.clearValidators();
  }else{
    console.log('email form control',email);
    email.setValidators([Validators.required]);
    phone.clearValidators();
  }

  phone.updateValueAndValidity();
      email.updateValueAndValidity();
    },1);
    console.log('chooseNotificationMethod',chooseNotificationMethod.value);
}
}
