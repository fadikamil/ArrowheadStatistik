/**
 * Created by Fadi Kamil & Dani Daryaweesh
 */

var enemyResult = [];

function run(jsonObj) {

    var i;

    if (jsonObj != null) {

        for (i = 0; i < jsonObj.length; i++) {

            var accidential = accidentialCalc(jsonObj[i].accidentals, jsonObj[i].kills);
            var attackPercentage = attackSuccessCalc(jsonObj[i].successful_attack_events, jsonObj[i].attack_events);
            var defendPercentage = defendSuccessCalc(jsonObj[i].successful_defend_events, jsonObj[i].defend_events);
            var missionsPercentage = missionSuccessCalc(jsonObj[i].successful_missions, jsonObj[i].missions);
            var kdRatio = kdRatioCalc(jsonObj[i].kills, jsonObj[i].deaths);
            var accuracy = accuracyCalc(jsonObj[i].hits, jsonObj[i].shots);

            enemyResult[i] = {

                accuracy: accuracy,
                kdRatio: kdRatio,
                missionsPercentage: missionsPercentage,
                defendPercentage: defendPercentage,
                attackPercentage: attackPercentage,
                accidentalKills: accidential
            };
        }
    }
}

function accuracyCalc(hits, shots) {

    if (hits == 0 || shots == 0) {

        return 0;
    } else {

        return ((hits / shots) * 100);
    }
}

function kdRatioCalc(kills, deaths) {

    if (kills == 0 || deaths == 0) {

        return 0;
    } else {

        return (kills / deaths);
    }
}

function accidentialCalc(accidentals, kills) {
    if(kills==0 || kills==null){
        kills=1;
    }
    return ((accidentals / kills) * 100);
}

function attackSuccessCalc(successful_attack_events, attack_events) {

    if (successful_attack_events == 0 || attack_events == 0) {

        return 0;
    }
    else {

        return (successful_attack_events / attack_events) * 100;
    }
}

function defendSuccessCalc(successful_defend_events, defend_events) {

    if (successful_defend_events == 0 || defend_events == 0) {

        return 0;
    }
    else {

        return (successful_defend_events / defend_events) * 100;
    }
}

function missionSuccessCalc(successful_missions, missions) {

    if (successful_missions == 0 || missions == 0) {

        return 0;
    }
    else {

        return (successful_missions / missions) * 100;
    }
}

function getCalculations() {
    return enemyResult;
}