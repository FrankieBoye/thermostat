describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can be increased with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can be decreased with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('cannot go below 10 degrees', function() {
    for (var i = 20; i > 10; i--) {
      thermostat.down();
      // console.log(thermostat.getCurrentTemperature());
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
    expect(function() {thermostat.down()}).toThrow("Error, cannot go below 10 degrees");
  });

  it('should have power saving mode ON by default', function() {
    expect(thermostat.getPowerSavingMode()).toBe(true);
  });

  it('should be able to switch power saving mode OFF', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.getPowerSavingMode()).toBe(false);
  });

  it('can switch power saving mode ON', function() {
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.getPowerSavingMode()).toBe(true);
  });

  it('cannot go above 25 degrees if PowerSavingMode is ON', function() {
    for (var i = 20; i < 25; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
    expect(function() {thermostat.up()}).toThrow("Error, cannot go above 25 degrees when PSM is on")
  });

  it('cannot go above 32 degrees if PowerSavingMode is OFF', function() {
    thermostat.switchPowerSavingModeOff();
    for (var i = 20; i < 32; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
    expect(function() {thermostat.up()}).toThrow("Error, cannot go above 32 degrees")
  });

  it('can reset the temperature to 20 degrees with a reset function', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can display current usage', function() {
    for (var i = 20; i < 25; i++) {
      thermostat.up();
    }
    expect(thermostat.usage()).toEqual("medium-usage")
    thermostat.switchPowerSavingModeOff();
    for (var i = 25; i < 32; i++) {
      thermostat.up();
      // console.log(thermostat.getCurrentTemperature());
    }
    expect(thermostat.usage()).toEqual("high-usage")
    for (var i = 32; i > 17; i--) {
      thermostat.down();
    }
    // console.log(thermostat.getCurrentTemperature());
    expect(thermostat.usage()).toEqual("low-usage")
  });

});
