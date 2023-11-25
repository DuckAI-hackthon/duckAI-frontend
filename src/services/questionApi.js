import axios from 'axios';
import { userData } from '../stores/user.js';

export default class getAnswerApi {
    async getAnswer(text) {
        console.log(userData)
        try{
            const result = await axios.post(
                `http://127.0.0.1:8000/ai/?ai=1&type=1`,
                {
                    prompt: text,
                    user_id: 1,
                },
            );
            return result.data;
        } catch(error){
            console.error(error);
            return error;
        }
    }
}
