import {Model} from "./model";

export interface Imagen extends Model{
  PRODUCTS_id: number;
  order: number;
  url: string;
}
