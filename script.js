const mapping1 = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
    " ": 27,
    ".": 28,
    ",": 29,
    "\'": 30
};

const mapping2 = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
    27: " ",
    28: ".",
    29: ",",
    30: "\'"
};

let message = "";
let code = "";
let x = "";
//const program = prompt("Encode or Decode (e or d)? ");
let recipient = ""
let shiftconstant = 1;
messagebutton = document.getElementById("submitmessage")
codebutton = document.getElementById("submitcode")

function getshiftconstant() {
    recipient = document.getElementById("recipienttext").value;
    for (let i = 0; i < recipient.length; i++) {
        x *= mapping1[recipient[i]];
    }
    x = parseInt(x.toString(2));
    x = x.toString(16);
    return x;
}

function encode() {
    shiftconstant = getshiftconstant();
    //message = prompt("Message: ");
    message = document.getElementById("messagetext").value;
    for (let i = 0; i < message.length; i++) {
        x = mapping1[message[i]];
        x += 7;
        x *= 2;
        x = x.toString(16);
        code += x;
    }
    code = shiftconstant + code;
    //console.log("Code: " + code);
    document.getElementById("codetext").value = code;
    code = "";
    message = "";
}

function decode() {
    shiftconstant = getshiftconstant();
    //code = prompt("Code: ");
    code = document.getElementById("codetext").value;
    if (code.slice(0, shiftconstant.length) === shiftconstant) {
        code = code.slice(shiftconstant.length);
        for (let i = 0; i < code.length / 2; i++) {
            x = code.slice(i * 2, (i * 2 + 2));
            x = parseInt(x, 16);
            x /= 2;
            x -= 7;
            x = mapping2[Math.round(x)];
            message += x;
        }
        //console.log("Message: " + message);
        document.getElementById("messagetext").value = message;
        code = "";
        message = "";
    } else {
        //console.log("Locked");
        document.getElementById("output").value = "Locked";
    }
}

/*
if (program === "e") {
    message = prompt("Message: ");
    for (let i = 0; i < message.length; i++) {
        x = mapping1[message[i]];
        x += 7;
        x *= 2;
        x = x.toString(16);
        code += x;
    }
    code = shiftconstant + code;
    console.log("Code: " + code);
    paragraph.textContent = "Code: " + code;
}

if (program === "d") {
    code = prompt("Code: ");
    if (code.slice(0, shiftconstant.length) === shiftconstant) {
        code = code.slice(shiftconstant.length);
        for (let i = 0; i < code.length / 2; i++) {
            x = code.slice(i * 2, (i * 2 + 2));
            x = parseInt(x, 16);
            x /= 2;
            x -= 7;
            x = mapping2[Math.round(x)];
            message += x;
        }
        console.log("Message: " + message);
        paragraph.textContent = "Message: " + message;
    } else {
        console.log("Locked");
        paragraph.textContent = "Locked";
    }
}
*/
