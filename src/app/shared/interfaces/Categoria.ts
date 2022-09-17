import {Model} from "./model";

export interface Categoria extends Model {
  name: string;
  urlImg: string;
  parent_category_id: null;
  categoria?: Categoria;
}
