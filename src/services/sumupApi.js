import axios from 'axios';

export default class getSummaryApi {
    async getSummary(text) {
        try{
            const data = await axios.post(
                "http://localhost:3000/duck/sumup",
                {
                    prompt: text,
                },
            );
            return data;
        } catch(error){
            console.error(error);
            return error;
        }
    }
}