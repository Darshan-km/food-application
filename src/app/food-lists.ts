// tslint:disable-next-line: no-namespace

    export class ICategory {
        name: string;
        image: string;
    }

    export class IRecipe {
        name: string;
        image: string;
        price: number;
        category: string;
        rating: number;
        reviews: number;
        details: string;
        isFavourite: boolean;
    }

    export class IRootObject {
        categories: ICategory[];
        recipes: IRecipe[];
    }


