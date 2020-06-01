var container =document.querySelector('body > c-wiz > div > div.WOi1Wb > div.GhN39b > div > div > div.DQBC5d'); // TODO I should come up with a better selector
var newElement = document.createElement("input");
newElement.type="range";
newElement.min="0";
newElement.max="1";
newElement.step="0.01";
newElement.style.setProperty("height","48px");

newElement.value = 1;

newElement.onchange = function() {
    setVolume(this.value);
}

container.insertBefore(newElement, container.firstChild);


function getVolume() {
    // TODO This returns the first audio element's volume. Is this okay?
    document.querySelectorAll('audio').forEach(function(mitem) {
        return mitem.volume;
    })
}

function setVolume(volume) {
    document.querySelectorAll('audio').forEach(function(mitem) {
        mitem.volume = volume;
    })
}
