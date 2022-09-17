import {Precio} from "./Precio";
import {Imagen} from "./Imagen";
import {Model} from "./model";
import {Categoria} from "./Categoria";

export interface Producto extends Model{
  colors: string;
  description: string;
  name: string;
  precios?: Precio[];
  sizes: string;
  imagenes?: Imagen[];
  categoria?: Categoria;
}
