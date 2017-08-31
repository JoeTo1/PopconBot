/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.sound');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');


Blockly.Blocks['sound_sounds_menu'] = {
  /**
   * Sound effects drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SOUND_MENU",
            "options": [
              ['meow', '0'],
              ['boing', '1'],
              ['cave', '2'],
              ['drip drop', '3'],
              ['drum machine', '4'],
              ['eggs', '5'],
              ['zoop', '6']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_play'] = {
  /**
   * Block to play sound.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAY,
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_playuntildone'] = {
  /**
   * Block to play sound until done.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAYUTILDONE,
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_stopallsounds'] = {
  /**
   * Block to stop all sounds
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "stop all sounds",
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};


Blockly.Blocks['sound_drums_menu'] = {
  /**
   * Drums drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DRUM",
            "options": [
              ['(1) Snare Drum', '1'],
              ['(2) Bass Drum', '2'],
              ['(3) Side Stick', '3'],
              ['(4) Crash Cymbal', '4'],
              ['(5) Open Hi-Hat', '5'],
              ['(6) Closed Hi-Hat', '6'],
              ['(7) Tambourine', '7'],
              ['(8) Hand Clap', '8'],
              ['(9) Claves', '9'],
              ['(10) Wood Block', '10'],
              ['(11) Cowbell', '11'],
              ['(12) Triangle', '12'],
              ['(13) Bongo', '13'],
              ['(14) Conga', '14'],
              ['(15) Cabasa', '15'],
              ['(16) Guiro', '16'],
              ['(17) Vibraslap', '17'],
              ['(18) Open Cuica', '18']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};



Blockly.Blocks['sound_playdrumforbeats'] = {
  /**
   * Block to play a drum for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAYDRUMFORBEATS,
      "args0": [
        {
          "type": "input_value",
          "name": "DRUM"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_restforbeats'] = {
  /**
   * Block to rest for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_RESTFORBEATS,
      "args0": [
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};


Blockly.Blocks['sound_playnoteforbeats'] = {
  /**
   * Block to play a certain note for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "play note %1 for %2 beats",
      "args0": [
        {
          "type": "input_value",
          "name": "NOTE"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_effects_menu'] = {
  /**
   * Sound effects drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "EFFECT",
            "options": [
              ['pitch', 'PITCH'],
              ['pan left/right', 'PAN'],
              ['echo', 'ECHO'],
              ['reverb', 'REVERB'],
              ['fuzz', 'FUZZ'],
              ['robot', 'ROBOT']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_seteffectto'] = {
  /**
   * Block to set the audio effect
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETEFFECTTO,
      "args0": [
        {
          "type": "input_value",
          "name": "EFFECT"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};


Blockly.Blocks['sound_changeeffectby'] = {
  /**
   * Block to change the audio effect
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CHANGEEFFECTBY,
      "args0": [
        {
          "type": "input_value",
          "name": "EFFECT"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_cleareffects'] = {
  /**
   * Block to clear audio effects
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CLEAREFFECTS,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_instruments_menu'] = {
  /**
   * Instruments drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "INSTRUMENT",
            "options": [
              ['(1) Piano', '1'],
              ['(2) Electric Piano', '2'],
              ['(3) Organ', '3'],
              ['(4) Guitar', '4'],
              ['(5) Electric Guitar', '5'],
              ['(6) Bass', '6'],
              ['(7) Pizzicato', '7'],
              ['(8) Cello', '8'],
              ['(9) Trombone', '9'],
              ['(10) Clarinet', '10'],
              ['(11) Saxophone', '11'],
              ['(12) Flute', '12'],
              ['(13) Wooden Flute', '13'],
              ['(14) Bassoon', '14'],
              ['(15) Choir', '15'],
              ['(16) Vibraphone', '16'],
              ['(17) Music Box', '17'],
              ['(18) Steel Drum', '18'],
              ['(19) Marimba', '19'],
              ['(20) Synth Lead', '20'],
              ['(21) Synth Pad', '21']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};
Blockly.Blocks['sound_setinstrumentto'] = {
  /**
   * Block to set the sprite's instrument to a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETINSTRUMENTTO,
      "args0": [
        {
          "type": "input_value",
          "name": "INSTRUMENT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_changevolumeby'] = {
  /**
   * Block to change the sprite's volume by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CHANGEVOLUMEBY ,
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_setvolumeto'] = {
  /**
   * Block to set the sprite's volume to a certain percent
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETVOLUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_volume'] = {
  /**
   * Block to report volume
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_VOLUME,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary,
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['sound_changetempoby'] = {
  /**
   * Block to change the sprite's tempo by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CHANGETEMPOBY,
      "args0": [
        {
          "type": "input_value",
          "name": "TEMPO"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_settempotobpm'] = {
  /**
   * Block to set the sprite's volume to a certain bpm
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETTEMPOTOBPM,
      "args0": [
        {
          "type": "input_value",
          "name": "TEMPO"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_tempo'] = {
  /**
   * Block to report tempo
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_TEMPO,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary,
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};
