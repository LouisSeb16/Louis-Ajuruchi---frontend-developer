import axios from "axios";

export async function fetchAllRockets() {

    try {
        const response = await axios.get('https://api.spacexdata.com/v3/rockets');

        const responseData = {
            message: 'Request successful',
            data: response.data,
            status: response.status
        }

        return responseData;

    } catch (error) {

        const errorData = {
            message: 'Request failed',
            data: null,
            status: error ? error : 500,
        };

        return errorData;

    }
};