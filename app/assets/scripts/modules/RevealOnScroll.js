import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

// create with new RevealOnScroll(jqueryselector, offset(%));
class RevealOnScroll {
    constructor(elements, offset) {
        this.itemsToReveal = elements;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }
    createWaypoints() {
        let that = this;
        this.itemsToReveal.each(function () {
            let currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass("reveal-item--is-visile"); //this class reveals
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;