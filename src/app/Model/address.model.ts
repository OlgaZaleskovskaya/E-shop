export class AddressModel {
    address1: string;
    address2: string;
    city: string;
    region: string;
    country: string;
    shippingRegion: string;
    shippingOption: string;


    constructor(address1: string,
        city: string,
        region: string,
        country: string,
        shippingRegion: string,
        shippingOption: string, address2: string) {
        this.address1 = address1;
        this.city = city;
        this.region = region;
        this.country = country;
        this.shippingOption = shippingOption;
        this.shippingRegion = shippingRegion;
        this.address2 = address2;

    }


}