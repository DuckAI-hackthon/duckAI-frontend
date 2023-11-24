import axios from 'axios';

export default class catchKeyWordsApi {
    async catchKeyWords(text) {
        try{
            const response = await axios.post(
                "http://localhost:3000/duck/keys",
                {
                    prompt: text,
                },
            );
            return response.data;
        } catch(error){
            console.error(error);
            return error;
        }
    }
}
