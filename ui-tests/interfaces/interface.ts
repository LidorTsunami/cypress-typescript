interface Product {
    searchQuery?: string;
    productText: string;
    url?: string;
    colorText?: string;
}

interface Products {
    pencilSharpener: Product;
    scissors: Product;
}

interface CustomerService {
    searchQuery: string;
    expectedTitle: string;
    expectedUrlIncludes: string[];
}

interface TestData {
    products: Products;
    customerService: CustomerService;
}
