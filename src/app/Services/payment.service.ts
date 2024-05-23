import { Injectable } from "@angular/core";
import { HttpClient , HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})

export class PayMentService{

constructor(private http:HttpClient){

}

// makePayment(actualAmount:number): Observable<any>{


// const url= '/api';

// const headers = new HttpHeaders({'Content-Type': 'application/json' })

// const paymentData={
// amt:actualAmount,
// psc:0,
// pdc:0,
// txAmt: actualAmount,
// tAmt:actualAmount ,
// pid:"EmartStore",
// scd:"EMARTPAYTEST",
// su:"http://merchant.com.np/page/esewa_payment_success",
// fu:"http://merchant.com.np/page/esewa_payment_failed"

// }
// return this.http.post<any>(url,paymentData,{headers})
// }

// makePayment(actualAmount: number): Observable<any> {
//     const url = '/api';
//     const queryParams = `amt=${actualAmount}&psc=0&pdc=0&txAmt=${actualAmount}&tAmt=${actualAmount}&pid=EmartStore&scd=EMARTPAYTEST&su=http://merchant.com.np/page/esewa_payment_success&fu=http://merchant.com.np/page/esewa_payment_failed`;
    
//     return this.http.get(url, { responseType: 'text', params: { queryParams } });
//   }
// }


makePayment(paymentData: any): Observable<any> {
    const url = '/api';
    const queryParams = new HttpParams({ fromObject: paymentData });
    
    return this.http.get(url, { responseType: 'text', params: queryParams });
  }
}
