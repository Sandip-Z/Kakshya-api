/*
    parcel = request
    payload = response
    accident = errors
    
*/

class Accident{
    constructor(){
        this.err = [];
    }

    populate(obj){
        this.err.push(obj);
    }

    get_error(){
        return this.err;
    }

    clear_log(){
        this.err = [

        ]
    }

}

module.exports = new Accident();