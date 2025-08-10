export interface Product {
    searchQuery?: string;
    productText: string;
    url?: string;
    colorText?: string;
}

export interface Products {
    pencilSharpener: Product;
    scissors: Product;
}

export interface CustomerService {
    searchQuery: string;
    expectedTitle: string;
    expectedUrlIncludes: string[];
}

export interface TestData {
    products: Products;
    customerService: CustomerService;
}
