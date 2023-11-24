import axios from 'axios';

export default class getAnswerApi {
    async getAnswer(text) {
        try{
            const data = await axios.post(
                "http://localhost:3000/duck/qea",
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
