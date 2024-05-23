// import { Component } from '@angular/core';
// import { PayMentService } from '../Services/payment.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-paymentform',
//   templateUrl: './paymentform.component.html',
//   styleUrl: './paymentform.component.css'
// })
// export class PaymentformComponent {
//  htmlContent: string = '';
//  btnclicked:boolean = true;
//   constructor(private paymentService: PayMentService,
//     private router:Router){

//   }

//   payWithEsewa(){

//     const paymentData = {
//       "amount": "100",
//       "failure_url": "https://google.com",
//       "product_delivery_charge": "0",
//       "product_service_charge": "0",
//       "product_code": "EPAYTEST",
//       "signature": "YVweM7CgAtZW5tRKica/BIeYFvpSj09AaInsulqNKHk=",
//       "signed_field_names": "total_amount,transaction_uuid,product_code",
//       "success_url": "https://esewa.com.np",
//       "tax_amount": "10",
//       "total_amount": "110",
//       "transaction_uuid": "ab14a8f2b02c3"
//     };



//     this.btnclicked = false;
//    this.paymentService.makePayment(paymentData).subscribe((response: string)=>{
//    this.htmlContent = response
//    },
//    (error)=>{
//     console.error('Payment initiation failed' , error);
//    })
//   }
// }
import { Component, ViewChild, OnInit } from '@angular/core';
import {  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';
import * as CryptoJS from 'crypto-js';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

interface Payment {
  amount: string;
  tax_amount: string;
  total_amount: string;
  transaction_uuid: string;
  product_code: string; 
  product_service_charge: string;
  product_delivery_charge: string;
  success_url: string;
  failure_url: string;
  signed_field_names: string;
  signature: string;
}
@Component({
  selector: 'app-paymentform',
 templateUrl: './paymentform.component.html',
 styleUrl: './paymentform.component.css'
})
export class PaymentformComponent implements OnInit {
  @ViewChild('myForm') myForm: any;
  transactionId: string = '';
  hashInBase64: string = '';
  total_amount: string = '';
  product_code: string = 'EPAYTEST';
  secretKey: string = '8gBm/:&EnhH.1/q';
  esewaEndpoint: string = 'https://rc-epay.esewa.com.np/api/epay/main/v2/form';

  constructor(
    public dialogRef: MatDialogRef<PaymentformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {
    console.log("Data", data);
    this.total_amount = data.price;
  }

  ngOnInit(): void {
      this.generateUUID();
      this.generateSignature();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  generateUUID(): void {
    // Generate a random UUID (v4)
    this.transactionId = uuidv4();
  }

  generateSignature() {
    const inputString = `total_amount=${this.total_amount},transaction_uuid=${this.transactionId},product_code=${this.product_code}`;
    console.log(inputString)
    const inputBytes = CryptoJS.enc.Utf8.parse(inputString);
    const secretKeyBytes = CryptoJS.enc.Utf8.parse(this.secretKey);

    const hashBytes = CryptoJS.HmacSHA256(inputBytes, secretKeyBytes);

    this.hashInBase64 =  CryptoJS.enc.Base64.stringify(hashBytes);
  }

  submitForm() {
    (this.myForm.nativeElement as HTMLFormElement).submit();
  }
}