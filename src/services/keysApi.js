import axios from 'axios';

export default class catchKeyWordsApi {
    async catchKeyWords(text) {
        try{
            const data = await axios.post(
                "http://localhost:3000/duck/keys",
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
