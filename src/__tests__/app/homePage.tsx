import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { getProductsPagination } from '@/app/api/products/product-service';

global.fetch = jest.fn();

describe('Home', () => {
    const mockData = {
        paging: {
            total: 1,
            pages: 1,
            size: 20,
            currentPage: 0
        },
        products: [
            {
                productId: 358787341,
                storeId: 5,
                storeName: "Ripley",
                name: "POLERON HOMBRE ELLUS S63913I24",
                sku: "2000399900347",
                brand: "ELLUS",
                url: "https://simple.ripley.cl/poleron-hombre-ellus-s63913i24-2000399900309#2000399900347",
                imageUrl: "https://home.ripley.cl/store/Attachment/WOP/D395/2000399900323/2000399900323_2.jpg",
                status: "AVAILABLE",
                created: "2024-10-17T07:54:10Z",
                updated: "2024-10-17T07:54:10Z",
                extracted: "2024-11-19T13:53:54Z",
                prices: {
                    lowest: 23990.0,
                    offerPrice: 23990.0,
                    normalPrice: 39990.0
                },
                categories: {
                    web: [
                        {
                            id: 693621,
                            categoryIdPath: "73113>693611>693612>693621",
                            fullPath: "Moda Hombre > Tops y Chaquetas > Polerones"
                        },
                    ],
                    internal: [
                        {
                            id: 710881,
                            categoryIdPath: "606115>710769>710881",
                            fullPath: "D - HOMBRE > D395 - MARCAS JUVENIL NACIONAL HOMBRE"
                        }
                    ]
                },
                competitors: []
            }
        ]
    };

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('Should render home page', () => {
        render(<Home />)
        expect(screen.getByText('Navbar')).toBeInTheDocument();
    })

    test('Should return products', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockData),
        });

        const result = await getProductsPagination({ paging: { page: 1, size: 20 }, filters: { brand: "", status: [] } });
        
        expect(result).toEqual(mockData);
    })
})
