import axios from 'axios';

export default class getSummaryApi {
    async getSummary(text) {
        try{
            const result = await axios.post(
                "http://localhost:3000/duck/sumup",
                {
                    prompt: text,
                },
            );
            return result.data;
        } catch(error){
            console.error(error);
            return error;
        }
    }
}