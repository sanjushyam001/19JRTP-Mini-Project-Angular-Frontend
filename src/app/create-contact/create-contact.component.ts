import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact:Contact=new Contact();
  constructor(private contactService:ContactService,
    private router:Router) {

   }

  ngOnInit(): void {
   
    
  }

  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }
  saveContact(){
    this.contactService.createContact(this.contact).subscribe(
      data=>{
        console.log("SUCCESSFULL........");
        console.log(data);
        this.redirectToContactList();
      
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      }
    
    );

  }
  redirectToContactList(){
    this.router.navigate(['/contacts']);
  }
}
