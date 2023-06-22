import * as request from '../utils/request';

export const Search = async (q, type = 'less') => {
    try {
        // XMLHttpRequest
        //Fetch
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
