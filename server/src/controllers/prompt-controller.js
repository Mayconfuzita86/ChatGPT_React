const openai = require("../config/openai")
const imputPrompt = require("../models/imput-prompt")

module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.configuration()
        const imputModel = new imputPrompt(req.body)

        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(imputModel)
            )

            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                sucess:false,
                error: error.responde ? error.response : "ther was an issue on the server"
            })

        }
    }
}