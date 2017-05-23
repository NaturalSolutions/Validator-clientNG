export interface Poi {
    id? : number;
	name? :   string ;
	version?      : number ;
	longitude?    : number ;
	latitude?     : number ; 
	type_id? : number ; 
	name_en?:string;
	name_fr?:string;
	name_es?:string; 
	name_de?:string;
	name_it?:string;
	visit_time_min?: number ;
	visit_time_max?: number ;
	price_min?: string ;
	price_max?: string ;
	// general_type_id => dynamic, read it with poi.get('general_type_id')
	street?: string;
	postal_code?:string;
	phone?:string;
	email?:string;
	website?:string;
	resa_link?:string;
	url_img1?:string;
	url_img2?:string;
	desc?:string;
	desc_en?:string;
	desc_fr?:string;
	desc_es?:string;
	desc_de?:string;
	desc_it?:string;
	withchild?: boolean;
	userId?:number;
	// period: new Period();
}