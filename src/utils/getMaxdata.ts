export const getMaxdata=(a: any, b: any)=>{
    if(a<=0){
       return 0
    }
    if(a>=b){
        return b  
    }
    return a
}