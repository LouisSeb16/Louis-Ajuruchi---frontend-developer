import { fetchAllRockets } from '@/sdk/services/providers';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

jest.mock('axios');

describe('fetchAllRockets', () => {
    it('fetches successfully data from an API', async () => {
        const responseData = {
            message: 'Request successful',
            data: [
                {
                    id: 1,
                    rocket_name: 'Falcon 1',
                    active: false,
                    boosters: 0,
                    company: 'SpaceX',
                    cost_per_launch: 6700000,
                    country: 'Republic of the Marshall Islands',
                    description: 'The Falcon 1 was an expendable launch system...',
                    diameter: { meters: 1.68, feet: 5.5 },
                    engines: { number: 1, type: 'merlin', version: '1C', layout: 'single', isp: { /* ... */ } },
                    first_flight: '2006-03-24',
                    first_stage: { reusable: false, engines: 1, fuel_amount_tons: 44.3, /* ... */ },
                    flickr_images: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
                    height: { meters: 22.25, feet: 73 },
                    landing_legs: { number: 0, material: null },
                    mass: { kg: 30146, lb: 66460 },
                    payload_weights: [{ /* ... */ }],
                    rocket_id: 'falcon1',
                    rocket_type: 'rocket',
                    second_stage: { reusable: false, engines: 1, fuel_amount_tons: 3.38, /* ... */ },
                    stages: 2,
                    success_rate_pct: 40,
                    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1'
                }
            ],
            status: 200
        };

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(responseData);

        const result = await fetchAllRockets();

        expect(result).toEqual(responseData);
    });

    it('fetches erroneously from an API', async () => {
        const errorMessage = 'Request failed';
        const status = 500;
        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue({ message: errorMessage, status });

        const result = await fetchAllRockets();

        expect(result).toEqual({ message: errorMessage, data: null, status });
    });
})