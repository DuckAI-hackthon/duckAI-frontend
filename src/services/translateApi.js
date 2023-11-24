import axios from "axios";

export default class getTranslationApi{
    async getTranslation(text) {
        try{
            const data = await axios.post(
                "http://localhost:3000/duck/translate",
                {
                    prompt: text,
                    from: "English",
                    to: "Portuguese"
                },
            );
            return data;
        } catch(error){
            console.error(error);
            return error;
        }
    }
}
