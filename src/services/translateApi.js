import axios from "axios";

export default class getTranslationApi{
    async getTranslation(text, from, to) {
        try{
            const result = await axios.post(
                "http://localhost:3000/duck/translate",
                {
                    prompt: text,
                    from: from,
                    to: to
                },
            );
            return result.data;
        } catch(error){
            console.error(error);
            return error;
        }
    }
}
