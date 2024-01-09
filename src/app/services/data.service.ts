import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

baseUrl : string ="http://localhost:5037/api/"
  constructor(private _HTTP:HttpClient ) { }

 

getalldeviceTypes():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}DeviceDetails`)

}

GetAllBranches():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}DeviceDetails/branch`)

}
GetAllDepartments():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}DeviceDetails/department`)

}
GetAllITemps():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}DeviceDetails/ITemp`)

}
Postdevice(newdevice:any):Observable<any>{
  return this._HTTP.post(`${this.baseUrl}DeviceDetails`,newdevice)
}
GetAllOfficeDevices():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}DeviceDetails/ALLOfficeDevices`)

}





GetAllmaintainancestatus():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}OutsideMaintainance/status`)

}

getalloutsidemaintainancedevices():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}OutsideMaintainance`)
}

getallwarrentymaintainancedevices():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}Warrentymaintainance`)
}

getalldevices():Observable<any>{
  return this._HTTP.get(`${this.baseUrl}insidemaintainancelist`)
  } 

  postOUTMaintainancedevice(newdevice:any):Observable<any>{
    return this._HTTP.post(`${this.baseUrl}OutsideMaintainance`,newdevice)

  }

  maintainanceHistory():Observable<any>{
    return this._HTTP.get(`${this.baseUrl}History`)
  }
  searchHistory():Observable<any>{
    return this._HTTP.get(`${this.baseUrl}HistoryController/search/9m`)
  }
  
  deadHistory():Observable<any>{
    return this._HTTP.get(`${this.baseUrl}History/Dead`)
  }

}

