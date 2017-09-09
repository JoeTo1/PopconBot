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
    this.IPOP._device = null;
    this.IPOP._accel_x = 0;
    this.IPOP._accel_y = 0;
    this.IPOP._accel_z = 0;
    this.IPOP._average = 0;
    this.IPOP._magnetometer_x = 0;
    this.IPOP._magnetometer_y = 0;
    this.IPOP._magnetometer_z = 0;
    this.IPOP._gyro_x = 0;
    this.IPOP._gyro_y = 0;
    this.IPOP._gyro_z = 0;
    this.IPOP._button_1 = 0;
    this.IPOP._button_2 = 0;
    this.IPOP._temperature = 0;
    this.IPOP._lux = 0;
    this.IPOP._baro = 0;
    this.IPOP._altitude = 0;

    this.color = {
        "primary": "#FF7F00",
        "secondary": "#FF4D6A",
        "tertiary": "#FF3355"
    };

/*
    this.IPOP.on('simpleKeyChange', function(left, right, reedRelay) {

      if(right){
        this.IPOP._button_2  = 1;
        console.log("button 2 : " +  this.IPOP._button_2);
      }

      else {
        this.IPOP._button_2  = 0;
        console.log("button 2 : " +   this.IPOP._button_2);
      }

      if(left){
        this.IPOP._button_1  = 1;
        console.log("button 1 : " +   this.IPOP._button_1);
      }

      else {
        this.IPOP._button_1  = 0;
        console.log("button 1 : " +   this.IPOP._button_1);
      }

    });
*/



};

/*
SensorTag.on('simpleKeyChange', function(left, right, reedRelay) {

  if(right){
    this.IPOP._button_2  = 1;
    console.log("button 2 : " +  this.IPOP._button_2);
  }

  else {
    this.IPOP._button_2  = 0;
    console.log("button 2 : " +   this.IPOP._button_2);
  }

  if(left){
    this.IPOP._button_1  = 1;
    console.log("button 1 : " +   this.IPOP._button_1);
  }

  else {
    this.IPOP._button_1  = 0;
    console.log("button 1 : " +   this.IPOP._button_1);
  }

});

*/



Ipopcon.prototype.getBlocks = function () {
    var color = this.color;

    return {
	    'ipopcon_get_accelerometer_x':{
		    /**
		     * descript :
		     * @this Blockly.Block
		     **/
		    init: function() {
			    this.jsonInit({
				    "message0": "get accelerometer x value by ble",
				    "args0": [
				    ],

				    "inputsInline": true,
				    "output": "Number",
				    "colour": color.primary,
				    "colourSecondary": color.secondary,
				    "colourTertiary": color.tertiary,
				    "outputShape": 2

			    });
		    }
	    },
	    'ipopcon_get_accelerometer_y':{
		    /**
		     * descript :
		     * @this Blockly.Block
		     **/
		    init: function() {
			    this.jsonInit({
				    "message0": "get accelerometer y value by ble",
				    "args0": [
				    ],

				    "inputsInline": true,
				    "output": "Number",
				    "colour": color.primary,
				    "colourSecondary": color.secondary,
				    "colourTertiary": color.tertiary,
				    "outputShape": 2

			    });
		    }
	    },
	    'ipopcon_get_accelerometer_z':{
		    /**
		     * descript :
		     * @this Blockly.Block
		     **/
		    init: function() {
			    this.jsonInit({
				    "message0": "get accelerometer z value by ble",
				    "args0": [
				    ],

				    "inputsInline": true,
				    "output": "Number",
				    "colour": color.primary,
				    "colourSecondary": color.secondary,
				    "colourTertiary": color.tertiary,
				    "outputShape": 2

			    });
		    }
	    },
	    'ipopcon_get_accelerometer_average':{
		    /**
		     * descript :
		     * @this Blockly.Block
		     **/
		    init: function() {
			    this.jsonInit({
				    "message0": "get accelerometer average value by ble",
				    "args0": [
				    ],

				    "inputsInline": true,
				    "output": "Number",
				    "colour": color.primary,
				    "colourSecondary": color.secondary,
				    "colourTertiary": color.tertiary,
				    "outputShape": 2

			    });
		    }
	    },
      'ipopcon_get_magnetometer_x':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get magnetometer x value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_magnetometer_y':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get magnetometer y value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_magnetometer_z':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get magnetometer z value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_gyro_x':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get gyro x value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_gyro_y':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get gyro y value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_gyro_z':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get gyro_z value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_button_1':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get button_1 value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_button_2':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get button_2 value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_temperature':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get temperature value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_lux':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get lux value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_baro':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get baro value by ble",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_altitude':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "get altitude value by ble",
            "args0": [
            ],

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
		'ipopcon_get_accelerometer_x': this.getAccelvalue_x,
		'ipopcon_get_accelerometer_y': this.getAccelvalue_y,
		'ipopcon_get_accelerometer_z': this.getAccelvalue_z,
		'ipopcon_get_accelerometer_average': this.getAccelvalue_average,
		'ipopcon_get_magnetometer_x' : this.getMagnetometer_x,
		'ipopcon_get_magnetometer_y' : this.getMagnetometer_y,
		'ipopcon_get_magnetometer_z' : this.getMagnetometer_z,
		'ipopcon_get_gyro_x' : this.getGyro_x,
		'ipopcon_get_gyro_y' : this.getGyro_y,
		'ipopcon_get_gyro_z' : this.getGyro_z,
		'ipopcon_get_button_1' : this.getButton_1,
		'ipopcon_get_button_2' : this.getButton_2,
		'ipopcon_get_temperature' : this.gettemperature,
		'ipopcon_get_lux' : this.getLux,
		'ipopcon_get_baro' : this.getBaro,
		'ipopcon_get_altitude' : this.getAltitude
	};
};

Ipopcon.prototype.getAccelvalue_x = function(argValues, util) {
    this.IPOP._device.readAccelerometer(function(error, x=0, y=0, z=0) {
        this.IPOP._accel_x = x;
    }.bind(this));

    return this.IPOP._accel_x;
};

Ipopcon.prototype.getAccelvalue_y = function(argValues, util) {
    this.IPOP._device.readAccelerometer(function(error, x=0, y=0, z=0) {
        this.IPOP._accel_y = y;
    }.bind(this));

    return this.IPOP._accel_y;
};
Ipopcon.prototype.getAccelvalue_z = function(argValues, util) {
    this.IPOP._device.readAccelerometer(function(error, x=0, y=0, z=0) {
        this.IPOP._accel_z = z;
    }.bind(this));

    return this.IPOP._accel_z;
};
Ipopcon.prototype.getAccelvalue_average = function(argValues, util) {
    this.IPOP._device.readAccelerometer(function(error, x=0, y=0, z=0) {
//        this.IPOP._average = (x+y+z)/3;
       this.IPOP._average = ( Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2)) - 1 );

    }.bind(this));

    console.log("this.IPOP._average : " +this.IPOP._average);
    return this.IPOP._average;
};

Ipopcon.prototype.getMagnetometer_x = function(argValues, util) {
  this.IPOP._device.readMagnetometer(function(error, x=0, y=0, z=0) {
      this.IPOP._magnetometer_x = x;
  }.bind(this));

  return this.IPOP._magnetometer_x;
  };
Ipopcon.prototype.getMagnetometer_y = function(argValues, util) {
  this.IPOP._device.readMagnetometer(function(error, x=0, y=0, z=0) {
      this.IPOP._magnetometer_y = y;
  }.bind(this));

  return this.IPOP._magnetometer_y;
};
Ipopcon.prototype.getMagnetometer_z = function(argValues, util) {
  this.IPOP._device.readMagnetometer(function(error, x=0, y=0, z=0) {
      this.IPOP._magnetometer_z = z;
  }.bind(this));

  return this.IPOP._magnetometer_z;
};
Ipopcon.prototype.getGyro_x = function(argValues, util) {
  this.IPOP._device.readGyroscope(function(error, x=0, y=0, z=0) {
      this.IPOP._gyro_x = x;
  }.bind(this));

  return this.IPOP._gyro_x;
};
Ipopcon.prototype.getGyro_y = function(argValues, util) {
  this.IPOP._device.readGyroscope(function(error, x=0, y=0, z=0) {
      this.IPOP._gyro_y = y;
  }.bind(this));

  return this.IPOP._gyro_y;
};
Ipopcon.prototype.getGyro_z = function(argValues, util) {
  this.IPOP._device.readGyroscope(function(error, x=0, y=0, z=0) {
      this.IPOP._gyro_z = z;
  }.bind(this));

  return this.IPOP._gyro_z;
};
Ipopcon.prototype.getButton_1 = function(argValues, util) {
  /* we should implemtent*/

  console.log("left : " + this.IPOP._device.left_button);
  return this.IPOP._device.left_button;
};
Ipopcon.prototype.getButton_2 = function(argValues, util) {
  /* we should implemtent*/
  console.log("right : " + this.IPOP._device.right_button);
  return this.IPOP._device.right_button;
  //return this.IPOP._button_2 ;
};
Ipopcon.prototype.gettemperature = function(argValues, util) {
  this.IPOP._device.readIrTemperature(function(error, objectTemperature, ambientTemperature) {
      this.IPOP._temperature = ambientTemperature;
      console.log(ambientTemperature);
  }.bind(this));

  return this.IPOP._temperature;
};
Ipopcon.prototype.getLux = function(argValues, util) {
  this.IPOP._device.readLuxometer(function(error, lux) {
      this.IPOP._lux = lux;
  }.bind(this));

  return this.IPOP._lux;
};
Ipopcon.prototype.getBaro = function(argValues, util) {
  this.IPOP._device.readBarometricPressure(function(error, pressure) {
      this.IPOP._baro  = pressure;
  }.bind(this));

  return this.IPOP._baro;
};
Ipopcon.prototype.getAltitude = function(argValues, util) {
  /* we should implemtent*/

  this.IPOP._device.readBarometricPressure(function(error, pressure) {
      this.IPOP._baro  = pressure;
  }.bind(this));

  this.IPOP._altitude = 44330*(1 - Math.pow((this.IPOP._baro/1013.4),1/5.255)  );    // p0 = 1013.4(seoul see hPa)
//  console.log("this.IPOP._altitude : " + this.IPOP._baro);
//  console.log("this.IPOP._altitude : " + this.IPOP._altitude);
  return this.IPOP._altitude;
};

Ipopcon.prototype.getToolbox = function () {
	return '<category name="Ipopcon" colour="#FFA500" secondaryColour="#FFA000">'+
			'<block type="ipopcon_get_accelerometer_x">'+
			'</block>'+
      '<block type="ipopcon_get_accelerometer_y">'+
      '</block>'+
      '<block type="ipopcon_get_accelerometer_z">'+
      '</block>'+
      '<block type="ipopcon_get_accelerometer_average">'+
      '</block>'+
      '<block type="ipopcon_get_magnetometer_x">'+
      '</block>'+
      '<block type="ipopcon_get_magnetometer_y">'+
      '</block>'+
      '<block type="ipopcon_get_magnetometer_z">'+
      '</block>'+
      '<block type="ipopcon_get_gyro_x">'+
      '</block>'+
      '<block type="ipopcon_get_gyro_y">'+
      '</block>'+
      '<block type="ipopcon_get_gyro_z">'+
      '</block>'+
      '<block type="ipopcon_get_button_1">'+
      '</block>'+
      '<block type="ipopcon_get_button_2">'+
      '</block>'+
      '<block type="ipopcon_get_temperature">'+
      '</block>'+
      '<block type="ipopcon_get_lux">'+
      '</block>'+
      '<block type="ipopcon_get_baro">'+
      '</block>'+
      '<block type="ipopcon_get_altitude">'+
      '</block>'+
			'</category>';

}

module.exports = Ipopcon;
