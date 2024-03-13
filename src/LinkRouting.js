const bossLinks = new Map();

bossLinks.set("kalli", "kalli")
bossLinks.set("shuro chi", "shuro-chi")
bossLinks.set("morgeth", "morgeth")
bossLinks.set("riven", "riven")
bossLinks.set("consecrated mind", "consecrated-mind")
bossLinks.set("sanctified mind", "sanctified-mind")
bossLinks.set("atraks", "atraks")
bossLinks.set("taniks", "taniks")
bossLinks.set("templar", "templar")
bossLinks.set("atheon", "atheon")
bossLinks.set("caretaker", "caretaker")
bossLinks.set("rhulk", "rhulk")
bossLinks.set("warpriest", "warpriest")
bossLinks.set("golgoroth", "golgoroth")
bossLinks.set("daughters", "daughters")
bossLinks.set("oryx", "oryx")
bossLinks.set("explicator", "explicator")
bossLinks.set("nezerac", "nezerac")
bossLinks.set("ir yut", "ir-yut")
bossLinks.set("crota", "crota")
bossLinks.set("dne", "invalid")


function Routing(Search) {
    if (typeof Search === 'string')  {
        //console.log("is String");
        if (bossLinks.has(Search)) {
            var winBoss = "#" + bossLinks.get(Search);
            window.open(winBoss);
        } else {
            var winError1 = "#" + bossLinks.get("dne");
            window.open(winError1);
        }
    } else {
        var winError2 = "#" + bossLinks.get("dne");
        window.open(winError2);
    }
}
export default Routing;