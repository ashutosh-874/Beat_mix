// Drum Arrays
let kicks  = new Array(16).fill(false);
let snares= new Array(16).fill(false);
let hiHats= new Array(16).fill(false);
let rideCymbals= new Array(16).fill(false);

const toggleDrum = (arr_str, index) =>{
    if(arr_str && index>=0 && index<16){
        switch (arr_str) {
            case 'kicks':
                kicks[index] = kicks[index] ? false : true;
                break;
            case 'snares':
                snares[index] = snares[index] ? false : true;
                break;
            case 'hiHats':
                hiHats[index] = hiHats[index] ? false : true;
                break;
            case 'rideCymbals':
                rideCymbals[index] = rideCymbals[index] ? false : true;
                break;
            default:
                break;
        }
    }
}

const clear = arr_str =>{
    if(arr_str){
        for(let index = 0; index<16; index++){
            switch (arr_str) {
                case 'kicks':
                    kicks[index] = false;
                    break;
                case 'snares':
                    snares[index] = false;
                    break;
                case 'hiHats':
                    hiHats[index] = false;
                    break;
                case 'rideCymbals':
                    rideCymbals[index] = false;
                    break;
                default:
                    break;
            }
        }
    }
}

const invert = arr_str =>{
    if(arr_str){
        for(let index = 0; index<16; index++){
            switch (arr_str) {
                case 'kicks':
                    kicks[index] = kicks[index] ? false : true;
                    break;
                case 'snares':
                    snares[index] = snares[index] ? false : true;
                    break;
                case 'hiHats':
                    hiHats[index] = hiHats[index] ? false : true;
                    break;
                case 'rideCymbals':
                    rideCymbals[index] = rideCymbals[index] ? false : true;
                    break;
                default:
                    break;
            }
        }
    }
}


const getNeighborPads = (x, y, size) => {
    const neighborPads = [];
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
      return neighborPads;
    }
    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);
    return neighborPads.filter((neighbor) => {
      return neighbor.every((val) => {
        return val >= 0 && val < size;
      });
    });
  };