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
            console.log(dataResult)
            const result = await axios.post(
                `http://localhost:8000/ai/?ai=${ai}&type=${type}`, dataResult 
            )
            return result.data;
        } catch (error) {
            console.error(error)
            return error;
        }
    }
    async postGeneratorText(text, size, user_id, ai, type) {
        try {
            const dataResult = {
                "text": text,
                "user_id": user_id,
                "amount": size,
            }
            console.log(dataResult)
            const result = await axios.post(
                `http://localhost:8000/ai/?ai=${ai}&type=${type}`, dataResult 
            )
            return result.data;
        } catch (error) {
            console.error(error)
            return error;
        }
    }

    async postGenereatorKeyword(keyword, text, user_id, ai, type) {
        try {
            console.log(`http://localhost:8000/ai/?ai=${ai}&type=${type}`)
            const dataResult = {
                "keyNum": keyword,
                "text": text,
                "user_id": user_id,
            }
            console.log('aaa')
            console.log(dataResult)
            const result = await axios.post(
                `http://localhost:8000/ai/?ai=${ai}&type=${type}`, dataResult 
            )
            return result.data;
        } catch (error) {
            console.log('oioi')
            console.error(error)
            return error;
        }
    }

    async postGetChatlog(text, user_id, ai, type) {
        try {
            const dataResult = {
                "text": text,
                "user_id": user_id,
            }
            console.log(dataResult)
            const result = await axios.post(
                `http://localhost:8000/ai/?ai=${ai}&type=${type}`, dataResult 
            )
            return result.data;
        } 
        catch (error) {
            console.error(error)
            return error;
        }
    }

    async getChatHistory(user_id, ai_id) {
        try {
            const result = await axios.get(`http://localhost:8000/api/get_chat_history_user/?user_id=${user_id}&ai_id=${ai_id}`)
            console.log(result.data)
            return result.data.response;
        } catch (error) {
            console.log(error)
        }
    }

    async postChatQEA(text, user_id, ai, type) {
        try {
            const dataResult = {
                "text": text,
                "user_id": user_id,
            }
            console.log(dataResult)
            const result = await axios.post(
                `http://localhost:8000/ai/?ai=${ai}&type=${type}`, dataResult 
            )
            return result.data;
        } 
        catch (error) {
            console.error(error)
            return error;
        }
    }

}

export default new OthersService();