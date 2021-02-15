import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/link.service';

@Component({
  selector: 'app-servicemasterlist',
  templateUrl: './servicemasterlist.component.html',
  styleUrls: ['./servicemasterlist.component.css']
})
export class ServicemasterlistComponent implements OnInit {
  resultmode :any;
  constructor(private linkservice : LinkService) { }

  ngOnInit(): void {
  }
  Getservicedata(){
    this.linkservice.getservice().subscribe( data=>{
      console.log(data);
      this.resultmode=(data);
    },error=>console.log(error));
  }
  Getdynamicval(ClientId:string,PropertyId:string){
    this.linkservice.getdynaic(ClientId,PropertyId).subscribe(data=>{
      console.log(data);
      this.resultmode=(data);
    },error=>console.log(error));

  }
}
