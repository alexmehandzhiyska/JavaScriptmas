function validTime(str) {
    const regex = /([01][0-9]|2[0-4]):([0-5][0-9])/;
    return regex.test(str) ? true : false;
}
