const Game = require('../Models/game');

exports.read = async(req,res) => {
    try{
        const id = req.params.id
        const gamed = await Game.findOne({_id:id}).exec();
        res.send(gamed);
    } catch(Err) {
        res.status(500).send('Server Error');
      
    }
}

exports.list = async(req,res) => {
    try{
        const gamed = await Game.find({}).exec();
        res.send(gamed);
    } catch(Err) {
        res.status(500).send('Server Error');
      
    }
 }

 exports.create = async(req,res) => {
    try{
        //console.log(req.body);
        const gamed = await Game(req.body).save();
        res.send(gamed);
    } catch(Err) {
        res.status(500).send('Server Error');
      
    }
 }

 exports.update = async(req,res) => {
    try{
        const id = req.params.id
        const gamed = await Game.findOneAndUpdate({_id:id},req.body,{new:true}).exec();
        res.send(gamed);
    } catch(Err) {
        res.status(500).send('Server Error');
      
    }
 }

 exports.del = async(req,res) => {
    try{
        const id = req.params.id
        const gamed = await Game.findOneAndDelete({_id:id}).exec();
        res.send(gamed);
    } catch(Err) {
        res.status(500).send('Server Error');
      
    }
 }
 