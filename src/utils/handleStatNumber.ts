export function handleStatNumber(statNumber: number){
    if(statNumber.toString().length === 1){
        return `00${statNumber}`;
    }else if(statNumber.toString().length === 2){
        return `0${statNumber}`;
    }else {
        return `${statNumber}`;
    }
}