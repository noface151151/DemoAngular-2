import { Ingredient } from 'app/shared/ingredient.model';

export class Recipe {


  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }


  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }


  private _imagePath: string;
  public get imagePath(): string {
    return this._imagePath;
  }
  public set imagePath(v: string) {
    this._imagePath = v;
  }

  private _ingredients: Ingredient[];
  public get ingredients(): Ingredient[] {
    return this._ingredients;
  }
  public set ingredients(v: Ingredient[]) {
    this._ingredients = v;
  }

  constructor(id: number, name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
