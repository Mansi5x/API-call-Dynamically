import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private DynamicUrl="http://localhost:52914/api/ServiceMaster/GetServiceMaasterMasterAllData";
  private linkurl="http://localhost:52914/api/ServiceMaster/GetServiceMaasterMasterAllData/6038/00000001";
  constructor(private http:HttpClient) { 

  
  }
  getservice(){
    return this.http.get(`${this.linkurl}`);
  }
  getdynaic(pClientId:string,pPropertyId:String){
    return this.http.get(`${this.DynamicUrl}/${pClientId}/${pPropertyId}`);
  }
  
}
