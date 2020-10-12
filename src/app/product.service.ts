import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http'

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';
  getAlbum(id) {
    Number;
  }
  constructor(private _http: Http) { }

}
