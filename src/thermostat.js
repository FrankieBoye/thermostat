function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.PowerSavingMode = true;
  this.PSM_on_max = 25;
  this.PSM_off_max = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.up = function() {
  if(this.isPSM_on_max()) {
    throw "Error, cannot go above 25 degrees when PSM is on"
  };
  if(this.isPSM_off_max()) {
    throw "Error, cannot go above 32 degrees"
  };
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if(this.isMinimumTemperature()) {
    throw "Error, cannot go below 10 degrees"
  };
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPSM_on_max = function() {
  return this.temperature === this.PSM_on_max && this.PowerSavingMode === true;
};

Thermostat.prototype.isPSM_off_max = function() {
  return this.temperature === this.PSM_off_max && this.PowerSavingMode === false;
};

Thermostat.prototype.getPowerSavingMode = function() {
  return this.PowerSavingMode;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.PowerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.PowerSavingMode = false;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.usage = function() {
  if (this.temperature > 25) {
    return 'high-usage'
  }
  else
  if (this.temperature < 18) {
    return 'low-usage'
  }
  else
    return 'medium-usage'
  };
