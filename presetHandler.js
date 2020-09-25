// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (req_type,index,newPresetArray) => {
    if((req_type==='GET' || req_type==='PUT') && index>=0 && index<presets.length){
        let arr = [200];
        if(req_type==='GET'){
            arr.push(presets[index]);
        }
        else if(req_type==='PUT'){
            presets[index] = newPresetArray;
            arr.push(presets[index]);
        }
        return arr;
    }
    else if(index<0 || index>=presets.length) return [404];
    else{
        return [400];
    }

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
