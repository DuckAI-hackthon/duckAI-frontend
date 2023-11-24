import axios from 'axios';

export default class getAnswerApi {
    async getAnswer(text) {
        try{
            const result = await axios.post(
                "http://localhost:3000/duck/qea",
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
