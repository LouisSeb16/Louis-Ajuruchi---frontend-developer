import axios from "axios";

export async function fetchAllRockets() {

    try {
        const response = await axios.get('https://api.spacexdata.com/v3/rockets');

        const { data } = response;

        const responseData = {
            message: 'Request successful',
            data: data,
            status: 200
        }

        return responseData;

    } catch (error) {

        const errorData = {
            message: 'Request failed',
            data: null,
            status: 500,
        };

        console.log(error);

        return errorData;

    }
};