import axios from "axios";

class OthersService{
    async getAis() {
        try {
            const result = await axios.get(
                "http://localhost:8000/api/ais/"
            )
            return result.data;
        } catch (error) {
            console.error(error)
            return error;
        }
    }
    async postTranslate(text, to_lang, from_lang, user_id, ai, type) {
        try {
            const dataResult = {
                "text": text,
                "to_lang": to_lang,
                "from_lang": from_lang,
                "user_id": user_id
            }
            const result = await axios.post(
                `http://localhost:8000/ai/?ai=${ai}&type=${type}`, dataResult 
            )
            return result.data;
        } catch (error) {
            console.error(error)
            return error;
        }
    }
}

export default new OthersService();