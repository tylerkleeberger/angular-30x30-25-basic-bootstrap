import { SecondaryModel } from "../shared/secondary.model";

export interface PrimaryModel {
    id: number;
    name: string;
    description: string;
    secondaryItems: SecondaryModel[]; 

    
}


// export class PrimaryModel {
//     public id: number;
//     public name: string;
//     public description: string;
//     public secondaryItems: SecondaryModel[]; 

//     constructor(id: number, name: string, desc: string, secondaryItems: SecondaryModel[]) {
//         this.id = id;
//         this.name = name;
//         this.description = desc;
//         this.secondaryItems = secondaryItems;
//     }