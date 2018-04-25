export class Recipe {

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

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

}