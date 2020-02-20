module.exports = function toReadable (number) {
    let num = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let decimals = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let manyDecimals = [,,'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    const findDec = (number) => {
        let ost = number%10;
        let dec = manyDecimals[(number-ost)/10];
        let dig = num[ost];
        return ost > 0 ? `${dec} ${dig}` : dec;
    }

    


    if (number < 10) return num[number];
    else if (number < 20) return decimals[number-10];
    else if (number < 100) return findDec(number);
    else {
        let ost = number % 100;
        let hun = num[(number-ost)/100];
        return (ost > 0 
                ? `${hun} hundred ${ost < 10 ? num[ost] : ost < 20 ? decimals[ost-10] : findDec(ost)}`  
                : `${hun} hundred`);
    }

}
