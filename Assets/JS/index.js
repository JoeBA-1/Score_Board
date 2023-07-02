var score_HOME = document.getElementById("score_home")
var score_GUEST = document.getElementById("score_guest")
var btnH1 = document.getElementById("btnh1")
var btnH2 = document.getElementById("btnh2")
var btnH3 = document.getElementById("btnh3")
var btnG1 = document.getElementById("btng1")
var btnG2 = document.getElementById("btng2")
var btnG3 = document.getElementById("btng3")
var New_Game = document.getElementById("new_game")
var stat_Result = document.getElementById("stat_p")
var home = 0
var guest = 0
var Result = 0


function increment_h_1() {
    home += 1
    score_HOME.textContent = home
    score()
}
function increment_h_2() {
    home += 2
    score_HOME.textContent = home
    score()
}
function increment_h_3() {
    home += 3
    score_HOME.textContent = home
    score()
}
function increment_g_1() {
    guest += 1
    score_GUEST.textContent = guest
    score()
}
function increment_g_2() {
    guest += 2
    score_GUEST.textContent = guest
    score()
}
function increment_g_3() {
    guest += 3
    score_GUEST.textContent = guest
    score()
}
function Reset() {
    home = 0
    guest = 0
    score_HOME.textContent = home
    score_GUEST.textContent = guest
    stat_Result.textContent = "SAME SCORE BOTH"
    document.getElementById("T_home").style.backgroundColor = "initial"
    document.getElementById("T_guest").style.backgroundColor = "initial"
}

function score() {
    Result = home - guest
    if (Result< 0) {
        stat_Result.textContent = "Guest score is higher by: " + (-Result) + " points"
        document.getElementById("T_guest").style.backgroundColor = "red"
        document.getElementById("T_home").style.backgroundColor = "initial"
    } else if (Result > 0) {
        stat_Result.textContent = "Home score is higher by: " + Result + " points"
        document.getElementById("T_home").style.backgroundColor = "red";
        document.getElementById("T_guest").style.backgroundColor = "initial"
    } else {
        stat_Result.textContent = "SAME SCORE BOTH"
        document.getElementById("T_home").style.backgroundColor = "initial"
        document.getElementById("T_guest").style.backgroundColor = "initial"
    }
}
