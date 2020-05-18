function number(num) {
    if (num===undefined || num===null) {
        return 'unknown';
    }

    return num.toLocaleString();
}

export default {
    number,
}