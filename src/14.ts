let i = 0;
function increment() {
    if (!i) {
        i = 1;
        setTimeout(() => {
            i++;
            console.log(i);
        }, 500);
    } else {
        i++;
        console.log(i);
    }
}
