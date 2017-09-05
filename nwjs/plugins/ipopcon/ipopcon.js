/**
* Created by YSM on 2017/08/19.
*/
var USE_READ = true;
var Ipopcon_device = require('sensortag');
//var async = require('async');
var path = require('path');


var Ipopcon = function (runtime) {
    this.runtime = runtime
    this.IPOP = Ipopcon_device;
    this.IPOP.__device = null;
    this.IPOP._x = 0;

    this.color = {
        "primary": "#FF6680",
        "secondary": "#FF4D6A",
        "tertiary": "#FF3355"
    };

};


Ipopcon.prototype.getBlocks = function () {
    var color = this.color;

    return {

      'ipopcon_get_sensordata':{
			/**
			* descript :
		  * @this Blockly.Block
			**/
			init: function() {
				this.jsonInit({
				"id": "ipopcon_get_sensordata",
				"message0": "get sensor data by noble",
				"args0": [
				],
	/*			"inputsInline": true,
				"previousStatement": null,
				"nextStatement": null,
				"colour": color.primary,
				"colourSecondary": color.secondary,
				"colourTertiary": color.tertiary*/
        "inputsInline": true,
        "output": "Number",
        "colour": color.primary,
        "colourSecondary": color.secondary,
        "colourTertiary": color.tertiary,
        "outputShape": 2

				});
		    }
		}




    };
};

Ipopcon.prototype.getPrimitives = function() {
    return {
    	'ipopcon_get_sensordata': this.getSensorData
    };
};

Ipopcon.prototype.getSensorData = function(argValues, util) {


            this.IPOP.__device.readAccelerometer(function(error, x=0, y=0, z=0) {
/*            console.log('\tx = ', x);
            console.log('\ty = ', y);
            console.log('\tz = ', z);*/
            this.IPOP._x = x;


          }.bind(this));


          return this.IPOP._x;
};


Ipopcon.prototype.getToolbox = function () {
	return '<category name="Ipopcon" colour="#FFA500" secondaryColour="#FFA000">'+
			'<block type="ipopcon_get_sensordata">'+
			'</block>'+
			'</category>';

}


module.exports = Ipopcon;
