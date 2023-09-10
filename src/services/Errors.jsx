
const CanDisplayError = (error) =>{
    switch(error.code)
    {
        case 0:
            return false;
        case 1:
            return false;
        case 2: 
            return false;
        case 3:
            return false;
        case 5:
            return true;
        case 6:
            return true;
        default:
            return false;
    }
}

export {CanDisplayError};