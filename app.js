let button = document.querySelector("#button");

function TicTakToe() {
    const box1 = document.querySelector('#box1');
    const box2 = document.querySelector('#box2');
    const box3 = document.querySelector('#box3');
    const box4 = document.querySelector('#box4');
    const box5 = document.querySelector('#box5');
    const box6 = document.querySelector('#box6');
    const box7 = document.querySelector('#box7');
    const box8 = document.querySelector('#box8');
    const box9 = document.querySelector('#box9');
    let winc = 0, drawcp = 0, winp = 0;
    const arr = [];
    function Factorial(n) {
        let ans = 1;
        for (let i = 1; i <= n; i++) {
            ans = ans * i;
        }
        return ans;
    }
    let s = new Array(0);
    let vis = new Array(10);
    function permutation(n) {
        if (n === 0) {
            arr.push(s.slice());
            return;
        }
        for (let i = 1; i <= 9; i++) {
            if (vis[i]) {
                continue;
            }
            else {
                vis[i] = 1;
                s.push(i);
                permutation(n - 1);
                s.pop();
                vis[i] = 0;
            }
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    permutation(9);
    let results = [];
    function checker(per) {
        let h1 = 0, h2 = 0, h3 = 0, v1 = 0, v2 = 0, v3 = 0, d1 = 0, d2 = 0;
        let flag = 0;
        for (let i = 0; i < per.length; i++) {
            let marker;
            if (i & 1) {
                marker = -1;
            }
            else {
                marker = 1;
            }
            if (per[i] === 1) {
                h1 += marker;
                v1 += marker;
                d1 += marker;
            }
            else if (per[i] === 2) {
                h1 += marker;
                v2 += marker;
            }
            else if (per[i] === 3) {
                h1 += marker;
                v3 += marker;
                d2 += marker;
            }
            else if (per[i] === 4) {
                h2 += marker;
                v1 += marker;
            }
            else if (per[i] === 5) {
                h2 += marker;
                v2 += marker;
                d1 += marker;
                d2 += marker;
            }
            else if (per[i] === 6) {
                h2 += marker;
                v3 += marker;
            }
            else if (per[i] === 7) {
                h3 += marker;
                v1 += marker;
                d2 += marker;
            }
            else if (per[i] === 8) {
                h3 += marker;
                v2 += marker;
            }
            else if (per[i] === 9) {
                h3 += marker;
                v3 += marker;
                d1 += marker;
            }
            if (h1 === 3 || h1 === -3) {
                if (i & 1) {
                    return -1;
                }
                else {
                    return (1);
                }
                flag = 1;
                break;
            }
            else if (h2 === 3 || h2 === -3) {
                if (i & 1) {
                    return (-1);
                }
                else {
                    return (1);
                }
                flag = 1;
                break;
            }
            else if (h3 === 3 || h3 === -3) {
                if (i & 1) {
                    return (-1);
                }
                else {
                    return (1);
                }
                flag = 1;
                break;
            }
            else if (v1 === 3 || v1 === -3) {
                if (i & 1) {
                    return (-1);
                }
                else {
                    return (1);
                }
                flag = 1;
                break;
            }
            else if (v2 === 3 || v2 === -3) {
                if (i & 1) {
                    return (-1);
                }
                else {
                    return (1);
                }
                flag = 1;
                break;
            }
            else if (v3 === 3 || v3 === -3) {
                if (i & 1) {
                    return (-1);
                }
                else {
                    return (1);
                }
                flag = 1;
                break;
            }
            else if (d1 === 3 || d1 === -3) {
                if (i & 1) {
                    return (-1);
                }
                else {
                    return (1);
                }
                flag = 1;
                break;
            }
            else if (d2 === 3 || d2 === -3) {
                if (i & 1) {
                    return (-1);
                }
                else {
                    return (1);
                }
                flag = 1;
                break;
            }
        }
        if (!flag) {
            return (0);
        }
    }
    function checkPermutation() {
        for (const per of arr) {
            let r = checker(per);
            results.push(r);
        }
    }
    checkPermutation();
    let chosen = [5];
    // let nodeg = document.createElement("img");
    // nodeg.src = 'download1.jpg';
    // box5.append(nodeg);
    box5.style.backgroundImage = "url('download1.jpg')";

    function strt() {
        for (let j = 0; j < Factorial(9); j++) {
            let flag = 0;
            for (let i = 0; i < chosen.length; i++) {
                if (arr[j][i] === chosen[i]) {
                    flag = 1;
                    continue;
                }
                else {
                    flag = 0;
                    break;
                }
            }
            if (flag) {
                return j;
            }
        }
    }
    let turn = 1;
    let clicked = new Array(10);

    function main() {
        let start = strt();
        let cpyStart = start;

        if (turn === 4) {
            chosen.push(arr[cpyStart][2 * turn]);
            let boxnumber = arr[cpyStart][2 * turn];
            // let node = document.createElement("img");
            // node.src = 'download1.jpg';
            let va = "box" + `${boxnumber}`;
            window[va].style.backgroundImage = "url('download1.jpg')";
            clicked[boxnumber] = 1;
            return;
        }
        let minimumArray = [];
        for (let choices = 0; choices < 9 - 2 * (turn); choices++) {
            let maxi = -1, ones;
            for (let ch2 = 0; ch2 < 8 - 2 * (turn); ch2++) {
                let counter = 0;
                let numberofminusones = 0, numberofones = 0, numberofzero = 0;
                let fe = Factorial(7 - 2 * (turn));
                while (counter < fe) {
                    if (results[start] === -1) {
                        numberofminusones++;
                    }
                    if (results[start] === 0) {
                        numberofzero++;
                    }
                    if (results[start] === 1) {
                        numberofones++;
                    }
                    counter++;
                    start++;
                }
                if (maxi < numberofminusones) {
                    maxi = numberofminusones;
                    ones = numberofones;
                }
                else if (maxi === numberofminusones) {
                    if (ones > numberofones) {
                        ones = numberofones;
                    }
                }
            }
            let dubarr = [maxi, ones];
            minimumArray.push(dubarr.slice());
        }
        let mini = Infinity, number, nuone;
        for (let i = 0; i < minimumArray.length; i++) {
            if (mini > minimumArray[i][0]) {
                mini = minimumArray[i][0];
                nuone = minimumArray[i][1];
            }
            else if (mini === minimumArray[i][0]) {
                if (nuone < minimumArray[i][1]) {
                    nuone = minimumArray[i][1];
                }
            }
        }
        for (let i = 0; i < minimumArray.length; i++) {
            if (mini === minimumArray[i][0] && nuone === minimumArray[i][1]) {
                number = i;
                break;
            }
        }
        cpyStart = cpyStart + number * (Factorial(8 - 2 * (turn)));
        chosen.push(arr[cpyStart][2 * turn]);
        let boxnumber = arr[cpyStart][2 * turn];
        // let node = document.createElement("img");
        // node.src = 'download1.jpg';
        let va = "box" + `${boxnumber}`;
        window[va].style.backgroundImage = "url('download1.jpg')";
        clicked[boxnumber] = 1;
    }
    box1.addEventListener('click', async (e) => {
        if (clicked[1] || winp || drawcp || winc) {
        }
        else {
            // let node = document.createElement("img");
            // node.src = 'download2.jpg';
            // box1.append(node);
            box1.style.transition = "background 2s";

            box1.style.background = "url('download2.jpg') 0 0 repeat";
            chosen.push(1);
            let ans1 = checker(chosen);
            if (ans1 === -1) {
                winp++;
                let person = document.querySelector("#personscore");
                person.innerHTML = winp
            }
            main();
            ans1 = checker(chosen);
            turn++;
            if (ans1 === 1) {
                winc++;
                let computer = document.querySelector("#computerscore");
                computer.innerHTML = parseInt(computer.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            else if (ans1 === 0 && turn === 5) {
                drawcp++;
                let draw = document.querySelector("#drawscore");
                draw.innerHTML = parseInt(draw.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            clicked[1] = 1;

        }

    })
    box2.addEventListener('click', async (e) => {
        if (clicked[2] || winp || drawcp || winc) {

        }
        else {
            // let node = document.createElement("img");
            // node.src = 'download2.jpg';
            // box2.append(node);
            box2.style.backgroundImage = "url('download2.jpg')";
            chosen.push(2);
            let ans1 = checker(chosen);
            if (ans1 === -1) {
                winp++;
                let person = document.querySelector("#personscore");
                person.innerHTML = winp
            }
            main();
            ans1 = checker(chosen);
            turn++;
            if (ans1 === 1) {
                winc++;
                let computer = document.querySelector("#computerscore");
                computer.innerHTML = parseInt(computer.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            else if (ans1 === 0 && turn === 5) {
                drawcp++;
                let draw = document.querySelector("#drawscore");
                draw.innerHTML = parseInt(draw.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            clicked[2] = 1;

        }
    })
    box3.addEventListener('click', async (e) => {
        if (clicked[3] || winp || drawcp || winc) {

        }
        else {
            // let node = document.createElement("img");
            // node.src = 'download2.jpg';
            // box3.append(node);
            box3.style.backgroundImage = "url('download2.jpg')";

            chosen.push(3);
            let ans1 = checker(chosen);
            if (ans1 === -1) {
                winp++;
                let person = document.querySelector("#personscore");
                person.innerHTML = winp
            }
            main();
            ans1 = checker(chosen);
            turn++;
            if (ans1 === 1) {
                winc++;
                let computer = document.querySelector("#computerscore");
                computer.innerHTML = parseInt(computer.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            else if (ans1 === 0 && turn === 5) {
                drawcp++;
                let draw = document.querySelector("#drawscore");
                draw.innerHTML = parseInt(draw.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            clicked[3] = 1;

        }
    })
    box4.addEventListener('click', async (e) => {
        if (clicked[4] || winp || drawcp || winc) {

        }
        else {
            // let node = document.createElement("img");
            // node.src = 'download2.jpg';
            // box4.append(node);
            box4.style.backgroundImage = "url('download2.jpg')";

            chosen.push(4);
            let ans1 = checker(chosen);
            if (ans1 === -1) {
                winp++;
                let person = document.querySelector("#personscore");
                person.innerHTML = winp
            }
            main();
            ans1 = checker(chosen);
            turn++;
            if (ans1 === 1) {
                winc++;
                let computer = document.querySelector("#computerscore");
                computer.innerHTML = parseInt(computer.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            else if (ans1 === 0 && turn === 5) {
                drawcp++;
                let draw = document.querySelector("#drawscore");
                draw.innerHTML = parseInt(draw.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            clicked[4] = 1;
        }
    })
    box6.addEventListener('click', async (e) => {
        if (clicked[6] || winp || drawcp || winc) {

        }
        else {
            // let node = document.createElement("img");
            // node.src = 'download2.jpg';
            // box6.append(node);
            box6.style.backgroundImage = "url('download2.jpg')";

            chosen.push(6);
            let ans1 = checker(chosen);
            if (ans1 === -1) {
                winp++;
                let person = document.querySelector("#personscore");
                person.innerHTML = winp
            }
            main();
            ans1 = checker(chosen);
            turn++;
            if (ans1 === 1) {
                winc++;
                let computer = document.querySelector("#computerscore");
                computer.innerHTML = parseInt(computer.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            else if (ans1 === 0 && turn === 5) {
                drawcp++;
                let draw = document.querySelector("#drawscore");
                draw.innerHTML = parseInt(draw.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            clicked[6] = 1;
        }
    })
    box7.addEventListener('click', async (e) => {
        if (clicked[7] || winp || drawcp || winc) {

        }
        else {
            // let node = document.createElement("img");
            // node.src = 'download2.jpg';
            // box7.append(node);
            box7.style.backgroundImage = "url('download2.jpg')";

            chosen.push(7);
            let ans1 = checker(chosen);
            if (ans1 === -1) {
                winp++;
                let person = document.querySelector("#personscore");
                person.innerHTML = winp
            }
            main();
            ans1 = checker(chosen);
            turn++;
            if (ans1 === 1) {
                winc++;
                let computer = document.querySelector("#computerscore");
                computer.innerHTML = parseInt(computer.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            else if (ans1 === 0 && turn === 5) {
                drawcp++;
                let draw = document.querySelector("#drawscore");
                draw.innerHTML = parseInt(draw.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            clicked[7] = 1;
        }
    })
    box8.addEventListener('click', async (e) => {
        if (clicked[8] || winp || drawcp || winc) {

        }
        else {
            // let node = document.createElement("img");
            // node.src = 'download2.jpg';
            // box8.append(node);
            box8.style.backgroundImage = "url('download2.jpg')";

            chosen.push(8);
            let ans1 = checker(chosen);
            if (ans1 === -1) {
                winp++;
                let person = document.querySelector("#personscore");
                person.innerHTML = winp
            }
            main();
            ans1 = checker(chosen);
            turn++;
            if (ans1 === 1) {
                winc++;
                let computer = document.querySelector("#computerscore");
                computer.innerHTML = parseInt(computer.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            else if (ans1 === 0 && turn === 5) {
                drawcp++;
                let draw = document.querySelector("#drawscore");
                draw.innerHTML = parseInt(draw.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            clicked[8] = 1;
        }
    })
    box9.addEventListener('click', async (e) => {
        if (clicked[9] || winp || drawcp || winc) {

        }
        else {
            // let node = document.createElement("img");
            // node.src = 'download2.jpg';
            // box9.append(node);
            box9.style.backgroundImage = "url('download2.jpg')";
            chosen.push(9);
            let ans1 = checker(chosen);
            if (ans1 === -1) {
                winp++;
                let person = document.querySelector("#personscore");
                person.innerHTML = winp
            }
            main();
            ans1 = checker(chosen);
            turn++;
            if (ans1 === 1) {
                winc++;
                let computer = document.querySelector("#computerscore");
                computer.innerHTML = parseInt(computer.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            else if (ans1 === 0 && turn === 5) {
                drawcp++;
                let draw = document.querySelector("#drawscore");
                draw.innerHTML = parseInt(draw.innerHTML) + 1;
                await sleep(1000);
                box1.style.background = "black"
                box2.style.background = "black"
                box3.style.background = "black"
                box4.style.background = "black"
                box5.style.background = "black"
                box6.style.background = "black"
                box7.style.background = "black"
                box8.style.background = "black"
                box9.style.background = "black"
                TicTakToe();
            }
            clicked[9] = 1;
        }
    })

}
button.addEventListener('click', (e) => {
    button.innerHTML = "Oh You Can't Win Against Me!!"
    let res = TicTakToe();

});
