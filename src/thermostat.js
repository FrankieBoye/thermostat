function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.PowerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if(this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.PowerSavingMode === true;
};

Thermostat.prototype.isPowerSavingModeOff = function() {
  return this.PowerSavingMode === false;
};
