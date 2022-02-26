const _error=require('../error')
const portfolioService=require('../service/portfolio')
exports.getPortfolio=async (req,res)=>{
try {
    const {id}=req.params
    const resp= await portfolioService.getportfolio({
        id
    })
    res.json(resp)
} catch (error) {
    res.send(_error('bummer something went wrong'))
}
}