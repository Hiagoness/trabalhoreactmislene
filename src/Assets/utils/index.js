import {  unMask} from '../../Assets/remask/Index.js'; 



export const ValidaEmail = (email , required = false) => {    

    if ( required === false ) {
        let lengthEmail  = (email === null) || (email === undefined) ? 0 : email.length
        if (lengthEmail >= 1){
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            //return re.test(email);
            var result = email.replace(/\s/g, "").split(/,|;/);  
            for(var i = 0;i < result.length;i++) {
                if(!re.test(result[i])) {
                    return false;
                }
            }          
        }
        return true;        

    }
    else {
        let lengthEmail  = (email === null) || (email === undefined) ? 0 : email.length
        if (lengthEmail >= 1){
            var res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return res.test(email);
            // let result = email.replace(/\s/g, "").split(/,|;/);  
            // for(var x = 0;x < result.length;x++) {
            //     if(!res.test(result[i])) {
            //         return false;
            //     }
            // }      
        }
        return false
    }
    
};

export const ValidaGUID =  ( guid ) =>  {
    let x = "" + guid;

    x = x.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
    if (x === null) {
      return false;
    }
    return true;
}

export default {ValidaEmail,ValidaGUID}