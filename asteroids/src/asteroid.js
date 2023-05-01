import * as Util from "./util.js";
import MovingObject from "./moving_object.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = 'gray'

    constructor(parameter){
        super(parameter);
        this.pos = parameter.pos;
        if(!parameter.vel){
            this.vel = Util.randomVec();
        } else {
            this.vel = parameter.vel;
        }
        if(!parameter.radius){
            this.radius = this.RADIUS;
        } else {
            this.radius = parameter.radius;
        }
        // this.radius = parameter.radius || this.RADIUS;
        // this.color = parameter.color || this.COLOR;
    }
    
}

export default Asteroid;