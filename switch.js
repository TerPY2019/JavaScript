const status = 400;

switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400: // or
        console.log("Error 400");
        break;
    case 500: // or
        console.log('Error!');
        break;
    default: // else
        console.log('Unknown status');
}